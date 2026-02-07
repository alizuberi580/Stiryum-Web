"use client";

import { Check, X, Zap, Crown, Building2 } from "lucide-react";
import { useState } from "react";
import { pricingPlans } from "@/constants/data";

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );

  const handleButtonClick = (planName: string) => {
    console.log(`${planName} plan button clicked`);
  };

  return (
    <div className="min-h-screen text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        {/*<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#f1bf50] to-[#005baa] bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                </h1>*/}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-[#ffffff]">
          Simple, Transparent Pricing
        </h1>
        {/*<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Choose the perfect plan to revolutionize your hiring process with AI-powered recruitment
                </p>*/}

        {/* Billing Toggle */}
        <div className="inline-flex items-center gap-3 border border-[#f1bf50]/40 rounded-full p-1 mt-6">
          <button
            onClick={() => setBillingCycle("monthly")}
            className={`px-3 py-1 rounded-full transition-all duration-300 ${
              billingCycle === "monthly"
                ? "bg-gradient-to-r from-[#f1bf50] to-[#005baa] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingCycle("annual")}
            className={`px-3 py-1 rounded-full transition-all duration-300 ${
              billingCycle === "annual"
                ? "bg-gradient-to-r from-[#f1bf50] to-[#005baa] text-white"
                : "text-gray-400 hover:text-white"
            }`}
          >
            Annual
          </button>
        </div>
        <span className="ml-2 text-sm text-white px-2 py-1 rounded-full">
          Save 20% annually
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mb-16 items-stretch justify-center">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative w-full md:w-[360px] lg:w-[400px] flex flex-col rounded-t-2xl transition-all duration-300 overflow-hidden bg-gradient-to-b from-[#976B03]/10 to-[#0b1120] border-t border-[#f1bf50]/20"
            style={
              {
                //boxShadow: '0 -20px 40px rgba(241, 191, 80, 0.15)'
              }
            }
          >
            {/* Top border */}
            <div className="absolute top-0 left-0 right-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-transparent via-[#f1bf50] to-transparent" />

            {/* Left border with fade */}
            <div className="absolute top-0 left-0 bottom-0 w-[1px] bg-gradient-to-b from-[#f1bf50]/20 via-[#f1bf50]/20 to-transparent" />

            {/* Right border with fade */}
            <div className="absolute top-0 right-0 bottom-0 w-[1px] bg-gradient-to-b from-[#f1bf50]/20 via-[#f1bf50]/20 to-transparent" />

            <div className="p-6 sm:p-8 flex flex-col h-full">
              {/* Plan Header */}
              <div className="mb-3 flex items-center justify-between">
                <h3
                  className={`text-2xl font-bold ${
                    plan.highlighted
                      ? "bg-gradient-to-r from-[#f1bf50] to-[#976B03] bg-clip-text text-transparent"
                      : ""
                  }`}
                >
                  {plan.name}
                </h3>

                {/* Most Popular Badge - Inline for Premium */}
                {plan.highlighted && (
                  <div className="text-xs font-semibold text-[#f1bf50] border border-[#f1bf50]/40 px-3 py-1 rounded-full bg-[#f1bf50]/30">
                    Most Popular
                  </div>
                )}
              </div>

              {/* Price */}
              <div
                className={`text-center mb-3 pb-3 md:mb-4 md:pb-4 lg:mb-5 lg:pb-5 border-b ${plan.highlighted ? "border-[#f1bf50]/40" : "border-white/10"}`}
              >
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {plan.price === "Custom" ? (
                      plan.price
                    ) : (
                      <>
                        <span className="text-lg">$</span>
                        {plan.price}
                      </>
                    )}
                  </span>
                  {plan.price !== "Custom" && plan.price !== "$0" && (
                    <span className="text-gray-400 text-md">
                      /{billingCycle === "annual" ? "year" : "month"}
                    </span>
                  )}
                </div>
              </div>

              {/* Features List */}
              <div className="flex-grow mb-8">
                <p
                  className={`text-xs font-semibold uppercase tracking-wider mb-4 ${plan.highlighted ? "text-[#f1bf50]" : "text-gray-400"}`}
                >
                  What's Included
                </p>
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check
                          className={`w-4 h-4 flex-shrink-0 mt-0.5 ${plan.highlighted ? "text-[#f1bf50]" : "text-[#f1bf50]/50"}`}
                        />
                      ) : (
                        <X className="w-4 h-4 flex-shrink-0 mt-0.5 text-gray-600" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-gray-200" : "text-gray-600"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => handleButtonClick(plan.name)}
                className={`w-full py-2 rounded-md font-semibold transition-all duration-300 text-base ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-[#f1bf50] to-[#976B03] text-white hover:shadow-[0_10px_20px_-5px_rgba(241,191,80,0.5)] hover:scale-[1.02] hover:-translate-y-1"
                    : "text-[#ffffff]/50 hover:bg-white/5 hover:text-gray-400 border border-[#976B03]/20 bg-gradient-to-b from-[#f1bf50]/10 to-[#976B03]/10 hover:border-[#f1bf50]/50 hover:shadow-[0_10px_20px_-5px_rgba(241,191,80,0.2)]"
                }`}
                style={{}}
              >
                {plan.cta}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
