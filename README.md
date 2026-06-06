# Futsal Consultation Landing Page

## Where leads are saved

When someone submits the form locally, the lead is saved here:

```text
data/leads.json
```

The file is ignored by Git so private lead information is not committed.

Hosted platforms such as Vercel usually do not allow permanent file storage.
For production, use the email notification setup below.

## Email notifications

For production email notifications, add these environment variables in Vercel:

```text
LEADS_EMAIL=your-email@example.com
RESEND_API_KEY=your-resend-api-key
LEADS_FROM_EMAIL=Consultation Leads <onboarding@resend.dev>
```

You can get a Resend API key from https://resend.com. After those variables are added, every valid form submission will also be emailed to `LEADS_EMAIL`.

After changing environment variables in Vercel, redeploy the project so the API
route uses the new settings.
