# Futsal Consultation Landing Page

## Where leads are saved

When someone submits the form locally, the lead is saved here:

```text
data/leads.json
```

The file is ignored by Git so private lead information is not committed.

## Email notifications

For production email notifications, add these environment variables in Vercel:

```text
LEADS_EMAIL=your-email@example.com
RESEND_API_KEY=your-resend-api-key
LEADS_FROM_EMAIL=Consultation Leads <onboarding@resend.dev>
```

You can get a Resend API key from https://resend.com. After those variables are added, every valid form submission will also be emailed to `LEADS_EMAIL`.
