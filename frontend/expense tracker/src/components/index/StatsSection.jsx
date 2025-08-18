"use client";

import React, { useState, useEffect } from "react";
import { StatsCard } from "./StatsCard";
import { DollarSign, TrendingUp, TrendingDown } from "lucide-react";

export function StatsSection() {
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

    const element = document.getElementById("stats-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="stats-section" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <StatsCard
            icon={<DollarSign className="h-8 w-8" />}
            label="Total Balance"
            value="$12,847.50"
            accentColor="#8B5CF6"
            isVisible={isVisible}
            delay={0}
          />
          <StatsCard
            icon={<TrendingUp className="h-8 w-8" />}
            label="Total Income"
            value="$8,420.00"
            accentColor="#34D399"
            isVisible={isVisible}
            delay={200}
          />
          <StatsCard
            icon={<TrendingDown className="h-8 w-8" />}
            label="Total Expenses"
            value="$3,572.50"
            accentColor="#F87171"
            isVisible={isVisible}
            delay={400}
          />
        </div>
      </div>
    </section>
  );
}
