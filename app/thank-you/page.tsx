import Image from "next/image";
import Link from "next/link";
import { CalendarCheck, MailCheck } from "lucide-react";

export const metadata = {
  title: "Thank You",
  description:
    "Your free 1:1 digital marketing consultation request has been received."
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-brand-mist px-5 py-8 text-brand-ink">
      <section className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-3xl flex-col items-center justify-center text-center">
        <Image
          src="/sailendra-logo.png"
          alt="Sailendra Man Singh"
          width={132}
          height={132}
          priority
          className="mb-8 h-24 w-24 object-contain"
        />
        <p className="mb-4 inline-flex items-center rounded-full border border-brand-line bg-white px-4 py-2 text-sm font-semibold text-brand-navy">
          FREE 1:1 Consultation
        </p>
        <h1 className="max-w-2xl text-4xl font-bold tracking-normal text-brand-navy sm:text-5xl">
          Thank you. Your free consultation request has been received.
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-700">
          Please check your active email and WhatsApp. The next step is to join a
          free 1:1 consultation call and discuss your current marketing
          challenges.
        </p>
        <div className="mt-8 grid w-full gap-3 sm:grid-cols-2">
          <div className="rounded-lg border border-brand-line bg-white p-5 text-left shadow-soft">
            <CalendarCheck className="mb-3 h-6 w-6 text-brand-red" aria-hidden />
            <h2 className="font-semibold text-brand-navy">Clear next steps</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              You will receive a customized marketing strategy and clear
              recommendations for your futsal business.
            </p>
          </div>
          <div className="rounded-lg border border-brand-line bg-white p-5 text-left shadow-soft">
            <MailCheck className="mb-3 h-6 w-6 text-brand-red" aria-hidden />
            <h2 className="font-semibold text-brand-navy">Check your inbox</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Keep an eye on your email and WhatsApp so the consultation can be
              confirmed quickly.
            </p>
          </div>
        </div>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center rounded-md bg-brand-navy px-6 text-sm font-bold text-white shadow-soft transition hover:bg-brand-red focus:outline-none focus:ring-4 focus:ring-brand-red/20"
        >
          Back to Consultation Page
        </Link>
      </section>
    </main>
  );
}
