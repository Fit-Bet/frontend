import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { FeaturesSection } from "@/components/FeaturesSection";

export default function Home() {
  return (
    <div className="relative">
      <Header />
      <main className="pt-16">
        <Hero />
        <FeaturesSection />
      </main>
    </div>
  )
}