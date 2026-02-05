"use client";

import { Check, X, Zap, Crown, Building2 } from "lucide-react";
import { useState } from "react";
import { pricingPlans } from "@/constants/data";


export default function PricingPage() {
    const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly");

    return (
        <div className="min-h-screen bg-[#0b1120] text-white py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-[#F37036] to-[#007DC5] bg-clip-text text-transparent">
                    Simple, Transparent Pricing
                </h1>
                {/*<p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                    Choose the perfect plan to revolutionize your hiring process with AI-powered recruitment
                </p>*/}

                {/* Billing Toggle */}
                <div className="inline-flex items-center gap-4 bg-white/5 border border-white/10 rounded-full p-1">
                    <button
                        onClick={() => setBillingCycle("monthly")}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${billingCycle === "monthly"
                            ? "bg-gradient-to-r from-[#F37036] to-[#007DC5] text-white"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Monthly
                    </button>
                    <button
                        onClick={() => setBillingCycle("annual")}
                        className={`px-6 py-2 rounded-full transition-all duration-300 ${billingCycle === "annual"
                            ? "bg-gradient-to-r from-[#F37036] to-[#007DC5] text-white"
                            : "text-gray-400 hover:text-white"
                            }`}
                    >
                        Annual
                        <span className="ml-2 text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-full">
                            Save 20%
                        </span>
                    </button>
                </div>
            </div>

            {/* Pricing Cards */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 mb-16 items-stretch justify-center">
                {pricingPlans.map((plan, index) => (
                    <div
                        key={index}
                        className={`relative w-full md:w-[360px] flex flex-col rounded-3xl backdrop-blur-sm transition-all duration-500 group ${plan.highlighted
                            ? "bg-gradient-to-b from-white/10 to-white/5 border-2 border-[#F37036] shadow-2xl shadow-[#F37036]/20 hover:shadow-[#F37036]/40 hover:-translate-y-2"
                            : "bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-xl "
                            }`}
                    >
                        {/* Highlight Badge */}
                        {plan.highlighted && (
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                                <div className="bg-gradient-to-r from-[#F37036] to-[#007DC5] text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                                    Most Popular
                                </div>
                            </div>
                        )}

                        {/* Animated gradient border on hover */}
                        <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#F37036]/20 via-transparent to-[#007DC5]/20 blur-xl -z-10" />

                        <div className="p-6 sm:p-8 flex flex-col h-full">
                            {/* Plan Header */}
                            <div className="mb-3">
                                {/*<div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${plan.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                    <plan.icon className="w-8 h-8 text-white" />
                                </div>*/}
                                <h3 className="text-2xl font-bold">{plan.name}</h3>

                            </div>

                            {/* Price */}
                            <div className="text-center mb-3 pb-3 md:mb-4 md:pb-4 lg:mb-5 lg:pb-5 border-b border-white/10">
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
                                {billingCycle === "annual" && plan.price !== "$0" && plan.price !== "Custom" && (
                                    <p className="text-sm text-green-400 mt-2 font-medium">
                                        💰 Save ${(99 * 12 * 0.2).toFixed(0)}/year
                                    </p>
                                )}
                            </div>

                            {/* Features List */}
                            <div className="flex-grow mb-8">
                                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4">
                                    What's Included
                                </p>
                                <ul className="space-y-3">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-start gap-3">
                                            <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${feature.included
                                                ? "bg-green-500/20"
                                                : "bg-gray-700/50"
                                                }`}>
                                                {feature.included ? (
                                                    <Check className="w-3 h-3 text-green-400" />
                                                ) : (
                                                    <X className="w-3 h-3 text-gray-600" />
                                                )}
                                            </div>
                                            <span
                                                className={`text-sm ${feature.included ? "text-gray-200" : "text-gray-600"
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
                                className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 text-base ${plan.highlighted
                                    ? "bg-gradient-to-r from-[#F37036] to-[#007DC5] hover:shadow-lg hover:shadow-[#F37036]/50 text-white transform hover:scale-105"
                                    : "bg-white/10 hover:bg-white/20 border border-white/20 text-white hover:border-white/40"
                                    }`}
                            >
                                {plan.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom CTA */}
            {/*<div className="max-w-4xl mx-auto mt-24 text-center bg-gradient-to-br from-[#F37036]/10 to-[#007DC5]/10 border border-[#F37036]/20 rounded-2xl p-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Ready to revolutionize your hiring?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                    Join thousands of companies using Stiryum to hire faster, smarter, and with greater
                    confidence
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button className="px-8 py-4 bg-gradient-to-r from-[#F37036] to-[#007DC5] text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-[#F37036]/50 transition-all duration-300">
                        Start Free Trial
                    </button>
                    <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300">
                        Schedule Demo
                    </button>
                </div>
            </div>*/}
        </div>
    );
}