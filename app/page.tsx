import Benefits from "@/components/Benefits";
import CTAForm from "@/components/CTAForm";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Urgency from "@/components/Urgency";

export default function LandingPage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Problem />
      <Benefits />
      <Urgency />
      <CTAForm />
    </main>
  );
}
