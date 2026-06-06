"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { LockKeyhole } from "lucide-react";

type FormValues = {
  fullName: string;
  email: string;
  whatsapp: string;
  businessName: string;
  website: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const initialValues: FormValues = {
  fullName: "",
  email: "",
  whatsapp: "",
  businessName: "",
  website: "",
  message: ""
};

function validate(values: FormValues) {
  const errors: FormErrors = {};

  if (!values.fullName.trim()) {
    errors.fullName = "Full Name is required.";
  }

  if (!values.email.trim()) {
    errors.email = "Active Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.whatsapp.trim()) {
    errors.whatsapp = "WhatsApp Number is required.";
  }

  if (!values.businessName.trim()) {
    errors.businessName = "Business Name is required.";
  }

  return errors;
}

export default function CTAForm() {
  const router = useRouter();
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  function updateField(field: keyof FormValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormError("");
    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(values)
      });

      const result = (await response.json()) as {
        ok: boolean;
        errors?: FormErrors;
        message?: string;
      };

      if (!response.ok || !result.ok) {
        if (result.errors) {
          setErrors(result.errors);
        }

        setFormError(
          result.message ?? "Please check the form details and try again."
        );
        setIsSubmitting(false);
        return;
      }

      router.push("/thank-you");
    } catch {
      setFormError("Something went wrong. Please try again.");
      setIsSubmitting(false);
    }
  }

  return (
    <section id="consultation-form" className="bg-white px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="lg:sticky lg:top-8">
          <p className="text-sm font-bold uppercase text-brand-red">
            Tell Me About Your Business
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Book Free Consultation
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            Fill out the form and get a FREE 1:1 Digital Marketing Consultation
            with a customized marketing strategy built for your futsal business.
          </p>
          <p className="mt-5 inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-mist px-4 py-2 text-sm font-semibold text-brand-navy">
            <LockKeyhole className="h-4 w-4 text-brand-red" aria-hidden />
            We respect your privacy. No spam.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          noValidate
          className="rounded-lg border border-brand-line bg-brand-mist p-4 shadow-soft sm:p-6"
        >
          <div className="rounded-lg bg-white p-5 sm:p-7">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field
                label="Full Name"
                name="fullName"
                placeholder="Enter your full name"
                value={values.fullName}
                error={errors.fullName}
                onChange={(value) => updateField("fullName", value)}
                required
              />
              <Field
                label="Active Email"
                name="email"
                type="email"
                placeholder="Enter your active email"
                value={values.email}
                error={errors.email}
                onChange={(value) => updateField("email", value)}
                required
              />
              <Field
                label="WhatsApp Number"
                name="whatsapp"
                placeholder="Enter your WhatsApp number"
                value={values.whatsapp}
                error={errors.whatsapp}
                onChange={(value) => updateField("whatsapp", value)}
                required
              />
              <Field
                label="Business Name"
                name="businessName"
                placeholder="Enter your business name"
                value={values.businessName}
                error={errors.businessName}
                onChange={(value) => updateField("businessName", value)}
                required
              />
              <Field
                label="Website / Facebook URL"
                name="website"
                type="url"
                placeholder="Paste your website or Facebook page"
                value={values.website}
                error={errors.website}
                onChange={(value) => updateField("website", value)}
                className="sm:col-span-2"
              />
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-bold text-brand-navy"
                >
                  Anything you want to say
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell me about your current marketing challenges"
                  value={values.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="focus-ring w-full resize-none rounded-md border border-brand-line bg-white px-4 py-3 text-base text-brand-ink placeholder:text-slate-400"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="mt-7 inline-flex min-h-14 w-full items-center justify-center rounded-md bg-brand-red px-7 text-base font-bold text-white shadow-soft transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-red/20 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isSubmitting ? "Booking..." : "Book Free Consultation"}
            </button>
            {formError ? (
              <p className="mt-4 text-center text-sm font-semibold text-brand-red">
                {formError}
              </p>
            ) : null}
            <p className="mt-4 text-center text-sm font-semibold text-slate-600">
              We respect your privacy. No spam.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  type = "text",
  required = false,
  className = ""
}: {
  label: string;
  name: keyof FormValues;
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  className?: string;
}) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-bold text-brand-navy">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${name}-error` : undefined}
        className="focus-ring min-h-12 w-full rounded-md border border-brand-line bg-white px-4 text-base text-brand-ink placeholder:text-slate-400"
      />
      {error ? (
        <p id={`${name}-error`} className="mt-2 text-sm font-semibold text-brand-red">
          {error}
        </p>
      ) : null}
    </div>
  );
}
