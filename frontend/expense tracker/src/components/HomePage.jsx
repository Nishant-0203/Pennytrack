import Hero from "./index/Hero";
import { StatsSection } from "./index/StatsSection";
import FeatureGrid from "./index/Featuregrid";

import { Testimonials } from "./index/Testimonials";
import Footer from "./index/Footer";
import DashboardPreview from "./index/Dashboardpreview";
import Navbar from "./index/NavBar";

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: "#F9FAFB" }}>
      <Navbar />
      <section id="home" style={{ scrollMarginTop: "80px" }}>
        <Hero />
      </section>
      <StatsSection />
      <section id="features" style={{ scrollMarginTop: "80px" }}>
        <FeatureGrid />
      </section>
      <section id="Demo" style={{ scrollMarginTop: "80px" }}>
        <DashboardPreview />
      </section>
      <section id="Review" style={{ scrollMarginTop: "80px" }}>
        <Testimonials />
      </section>
      <section id="Login" style={{ scrollMarginTop: "80px" }}>
        <Footer />
      </section>
    </main>
  );
}
