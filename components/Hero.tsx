import Image from "next/image";
import { ArrowDown, CalendarCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative bg-white px-5 pb-14 pt-6 text-brand-ink sm:pb-20 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-navy via-brand-red to-brand-navy" />
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex items-center justify-between">
          <Image
            src="/sailendra-logo.png"
            alt="Sailendra Man Singh"
            width={128}
            height={128}
            priority
            className="h-16 w-16 object-contain"
          />
          <a
            href="#consultation-form"
            className="hidden min-h-11 items-center justify-center rounded-md border border-brand-line px-4 text-sm font-bold text-brand-navy transition hover:border-brand-red hover:text-brand-red sm:inline-flex"
          >
            Book the Call
          </a>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand-line bg-brand-mist px-4 py-2 text-sm font-bold text-brand-navy">
              <CalendarCheck className="h-4 w-4 text-brand-red" aria-hidden />
              Free Consultation for Futsal Business Owners
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-normal text-brand-navy sm:text-5xl lg:text-6xl">
              Fill More Futsal Booking Slots With a Customized Digital Marketing
              Strategy
            </h1>
            <p className="mt-5 max-w-2xl text-xl font-semibold text-brand-red">
              Stop Guessing What Works.
            </p>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-700">
              Get a FREE 1:1 Digital Marketing Consultation and receive a
              customized marketing strategy built for your futsal business.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#consultation-form"
                className="inline-flex min-h-14 items-center justify-center gap-2 rounded-md bg-brand-red px-7 text-base font-bold text-white shadow-soft transition hover:bg-brand-navy focus:outline-none focus:ring-4 focus:ring-brand-red/20"
              >
                Get My Free Strategy Call
                <ArrowDown className="h-5 w-5" aria-hidden />
              </a>
              <a
                href="#benefits"
                className="inline-flex min-h-14 items-center justify-center rounded-md border border-brand-line px-7 text-base font-bold text-brand-navy transition hover:border-brand-red hover:text-brand-red"
              >
                How You Benefit
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-brand-line bg-brand-mist p-6 shadow-soft">
            <div className="rounded-lg bg-white p-6">
              <p className="text-sm font-bold uppercase text-brand-red">
                FREE 1:1 Consultation
              </p>
              <h2 className="mt-3 text-2xl font-bold text-brand-navy">
                Customized Strategy for Your Business
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Tell me about your business and leave the call with a clear
                action plan you can use for your business.
              </p>
              <div className="mt-6 space-y-3 text-sm font-semibold text-brand-ink">
                <p className="rounded-md border border-brand-line px-4 py-3">
                  Fill out the booking form with your business details.
                </p>
                <p className="rounded-md border border-brand-line px-4 py-3">
                  Join a free 1:1 consultation call.
                </p>
                <p className="rounded-md border border-brand-line px-4 py-3">
                  Receive a customized marketing strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
