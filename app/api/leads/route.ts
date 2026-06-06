import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { NextResponse } from "next/server";

type LeadPayload = {
  fullName?: string;
  email?: string;
  whatsapp?: string;
  businessName?: string;
  website?: string;
  message?: string;
};

type LeadRecord = Required<LeadPayload> & {
  id: string;
  submittedAt: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const canSaveToFile =
  process.env.NODE_ENV !== "production" ||
  process.env.SAVE_LEADS_TO_FILE === "true";

function clean(value?: string) {
  return typeof value === "string" ? value.trim() : "";
}

function validateLead(payload: LeadPayload) {
  const lead = {
    fullName: clean(payload.fullName),
    email: clean(payload.email),
    whatsapp: clean(payload.whatsapp),
    businessName: clean(payload.businessName),
    website: clean(payload.website),
    message: clean(payload.message)
  };

  const errors: Partial<Record<keyof LeadPayload, string>> = {};

  if (!lead.fullName) {
    errors.fullName = "Full Name is required.";
  }

  if (!lead.email) {
    errors.email = "Active Email is required.";
  } else if (!emailPattern.test(lead.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!lead.whatsapp) {
    errors.whatsapp = "WhatsApp Number is required.";
  }

  if (!lead.businessName) {
    errors.businessName = "Business Name is required.";
  }

  return { lead, errors };
}

async function saveLeadToFile(lead: LeadRecord) {
  const dataDirectory = path.join(process.cwd(), "data");
  const filePath = path.join(dataDirectory, "leads.json");

  await mkdir(dataDirectory, { recursive: true });

  let existingLeads: LeadRecord[] = [];
  try {
    existingLeads = JSON.parse(await readFile(filePath, "utf8")) as LeadRecord[];
  } catch {
    existingLeads = [];
  }

  existingLeads.push(lead);
  await writeFile(filePath, JSON.stringify(existingLeads, null, 2));
}

async function sendEmail(lead: LeadRecord) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.LEADS_EMAIL;
  const fromEmail =
    process.env.LEADS_FROM_EMAIL ?? "Consultation Leads <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    return false;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      subject: `New futsal consultation lead: ${lead.businessName}`,
      text: [
        "New FREE 1:1 Consultation lead",
        "",
        `Full Name: ${lead.fullName}`,
        `Active Email: ${lead.email}`,
        `WhatsApp Number: ${lead.whatsapp}`,
        `Business Name: ${lead.businessName}`,
        `Website / Facebook URL: ${lead.website || "Not provided"}`,
        `Anything you want to say: ${lead.message || "Not provided"}`,
        `Submitted At: ${lead.submittedAt}`
      ].join("\n")
    })
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Lead email delivery failed:", errorText);
    return false;
  }

  return true;
}

export async function POST(request: Request) {
  try {
    const payload = (await request.json()) as LeadPayload;
    const { lead, errors } = validateLead(payload);

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ ok: false, errors }, { status: 400 });
    }

    const leadRecord: LeadRecord = {
      ...lead,
      id: crypto.randomUUID(),
      submittedAt: new Date().toISOString()
    };

    if (canSaveToFile) {
      await saveLeadToFile(leadRecord);
    }

    const emailSent = await sendEmail(leadRecord);

    if (!canSaveToFile && !emailSent) {
      console.warn(
        "Lead received, but no production delivery method is configured. Set RESEND_API_KEY and LEADS_EMAIL."
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Lead submission failed:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please try again."
      },
      { status: 500 }
    );
  }
}
