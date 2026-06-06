const steps = [
  {
    title: "Step 1",
    body: "Fill out the booking form with your business details."
  },
  {
    title: "Step 2",
    body: "Join a free 1:1 consultation call and discuss your current marketing challenges."
  },
  {
    title: "Step 3",
    body: "Receive a customized marketing strategy and clear recommendations for your futsal business."
  }
];

export default function Urgency() {
  return (
    <section className="bg-brand-mist px-5 py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div>
          <p className="text-sm font-bold uppercase text-brand-red">
            Process of This Consultation
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Book the Call
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-700">
            FREE 1:1 Consultation. Customized Strategy for Your Business.
          </p>
          <a
            href="#consultation-form"
            className="mt-7 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-navy px-6 text-sm font-bold text-white shadow-soft transition hover:bg-brand-red focus:outline-none focus:ring-4 focus:ring-brand-red/20"
          >
            Book Free Consultation
          </a>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-lg border border-brand-line bg-white p-5 shadow-sm"
            >
              <p className="text-sm font-bold text-brand-red">{step.title}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-brand-ink">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
