"use client";

import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "College Student",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "Finally, a budgeting app that doesn't make me want to give up after a week. PennyTrack is so simple!",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Software Developer",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "The CSV export feature saved me hours during tax season. Clean interface, powerful features.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Marketing Coordinator",
    avatar: "/placeholder.svg?height=60&width=60",
    quote:
      "I love how it automatically categorizes my expenses. Makes tracking so much easier!",
    rating: 5,
  },
];

export function Testimonials() {
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

    const element = document.getElementById("testimonials-section");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="testimonials-section" className="py-16 lg:py-24">
      <div className="container mx-auto px-6 max-w-[1200px]">
        <div className="text-center mb-16">
          <h2
            className="text-3xl lg:text-4xl font-bold mb-4"
            style={{ color: "#111827" }}
          >
            Loved by students and professionals
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Join thousands who've taken control of their finances
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 penny-shadow transform transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current"
                    style={{ color: "#FB923C" }}
                  />
                ))}
              </div>

              <p
                className="mb-6 text-lg leading-relaxed"
                style={{ color: "#111827" }}
              >
                "{testimonial.quote}"
              </p>

              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold" style={{ color: "#111827" }}>
                    {testimonial.name}
                  </p>
                  <p className="text-sm" style={{ color: "#6B7280" }}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
