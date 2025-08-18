"use client";

import React, { useEffect, useState } from "react";

export function StatsCard({ icon, label, value, accentColor, isVisible, delay }) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setShouldAnimate(true);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, delay]);

  return (
    <div
      className={`bg-white rounded-2xl p-6 penny-shadow transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        shouldAnimate ? "animate-count-up" : "opacity-0"
      }`}
    >
      <div className="flex items-center space-x-4">
        <div
          className="p-3 rounded-full"
          style={{ backgroundColor: `${accentColor}20`, color: accentColor }}
        >
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium" style={{ color: "#6B7280" }}>
            {label}
          </p>
          <p className="text-2xl font-bold" style={{ color: "#111827" }}>
            {value}
          </p>
        </div>
      </div>
    </div>
  );
}
