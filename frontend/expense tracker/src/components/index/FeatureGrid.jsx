"use client";

import { useState, useEffect } from "react";
import { Zap, Shield, BarChart3, Download } from "lucide-react";

const features = [
  {
    icon: <Zap className="h-8 w-8" />,
    title: "Lightning Fast",
    description: "Track expenses in seconds with smart categorization",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Bank-Level Security",
    description: "Your financial data is encrypted and protected",
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    title: "Smart Insights",
    description: "Understand your spending patterns with visual reports",
  },
  {
    icon: <Download className="h-8 w-8" />,
    title: "Easy Export",
    description: "One-click CSV/Excel export for tax season",
  },
];

export default function FeatureGrid() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("features-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="features-section" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4" style={{ color: "#111827" }}>
            Everything you need to track your money
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Simple tools that make budgeting actually enjoyable
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 penny-shadow transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className="inline-flex p-3 rounded-full mb-4"
                style={{ backgroundColor: "#8B5CF620", color: "#8B5CF6" }}
              >
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: "#111827" }}>
                {feature.title}
              </h3>
              <p style={{ color: "#6B7280" }}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
