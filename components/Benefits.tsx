import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Discover why your current marketing is not generating consistent bookings",
  "Get a customized digital marketing strategy designed for your futsal business",
  "Learn practical ways to attract more local players and repeat customers",
  "Identify simple opportunities to increase bookings without relying on random boost posts",
  "Leave the call with a clear action plan you can use for your business"
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white px-5 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase text-brand-red">
            How You Benefit From This Consultation
          </p>
          <h2 className="mt-3 text-3xl font-bold text-brand-navy sm:text-4xl">
            Get clear marketing direction for your futsal business.
          </h2>
        </div>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex gap-4 rounded-lg border border-brand-line bg-white p-5 shadow-sm"
            >
              <CheckCircle2
                className="mt-1 h-6 w-6 flex-none text-brand-red"
                aria-hidden
              />
              <p className="text-base font-semibold leading-7 text-brand-ink">
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
