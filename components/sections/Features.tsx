"use client";

import {
  Upload,
  FileText,
  Target,
  BarChart3,
  Users,
  Shield,
  Layers,
  Sparkles,
  Search,
  Filter,
  CheckCircle2,
} from "lucide-react";
import HeadingComponent from "../HeadingComponent";

const features = [
  {
    icon: Upload,
    title: "Bulk CV Upload",
    description:
      "Processing hundreds of resumes simultaneously. AI automatically parses data, extracts core skills, and builds structured profiles in seconds.",
    benefits: ["Process 100+ CVs in minutes", "Zero manual data entry"],
    iconColor: "from-blue-600 to-cyan-400",
  },
  {
    icon: Target,
    title: "Semantic AI Matching",
    description:
      "Understand the context of experience beyond Keywords. Find the absolute best fits through deep role compatibility analysis.",
    benefits: ["Context-aware scoring", "Identify hidden talent"],
    iconColor: "from-[#F37036] to-[#007DC5]",
  },
  {
    icon: FileText,
    title: "Smart JD Chatbot",
    description:
      "Craft professional job descriptions in minutes using our interactive AI assistant, optimized for matching.",
    benefits: ["SEO-optimized JDs", "Instant formatting"],
    iconColor: "from-orange-500 to-amber-500",
  },
  {
    icon: BarChart3,
    title: "Predictive Ranking",
    description:
      "Leverage data-driven insights to rank candidates objectively based on qualifications and role requirements.",
    benefits: ["Objective evaluations", "Drill-down analytics"],
    iconColor: "from-green-500 to-emerald-500",
  },
  {
    icon: Users,
    title: "Seamless Pipeline",
    description:
      "A unified dashboard to manage your talent pipeline. Collaborative tools for your entire hiring team.",
    benefits: ["Centralized workflow", "Team sync"],
    iconColor: "from-indigo-500 to-violet-500",
  },
  {
    icon: Shield,
    title: "Bias-Free Evaluation",
    description:
      "Engineered to prioritize skill over pedigree. Our algorithms promote diversity and inclusion by focusing on soft skill proficiency.",
    benefits: ["Mitigate unconscious bias", "Promote inclusive hiring"],
    iconColor: "from-yellow-400 to-orange-500",
  },
];

export default function Features() {
  return (
    <div className="min-h-screen text-white py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/5 blur-[140px] rounded-full -z-10" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <HeadingComponent
          textCentered
          heading="Everything You Need to Hire Smarter"
          description="Built for modern hiring teams who value speed, accuracy, and fairness."
        />
      </div>

      {/* Standard Symmetric Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative overflow-hidden bg-white/[0.03] border border-white/10 rounded-[2rem] p-8 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 hover:-translate-y-1"
          >
            {/* Glossy Overlay */}
            <div className="absolute inset-0 bg-linear-to-tr from-white/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10">
              {/* Icon Container */}
              <div className="flex items-center justify-between mb-8">
                <div
                  className={`w-14 h-14 rounded-2xl bg-linear-to-br ${feature.iconColor} p-[1px] shadow-lg group-hover:scale-110 transition-transform duration-500`}
                >
                  <div className="w-full h-full rounded-[15px] bg-[#00001A] flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                {/* Subtle index number or indicator */}
                <span className="text-white/10 text-4xl font-black group-hover:text-white/20 transition-colors">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold tracking-tight mb-4 silver-metal-gradient">
                {feature.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Benefits with custom icons */}
              <div className="space-y-3">
                {feature.benefits.map((benefit, bIndex) => (
                  <div key={bIndex} className="flex items-center gap-3">
                    <CheckCircle2
                      className={`w-4 h-4 bg-linear-to-br ${feature.iconColor} rounded-full text-white p-0.5 opacity-60`}
                    />
                    <span className="text-sm text-gray-500 group-hover:text-gray-300 transition-colors">
                      {benefit}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Hover Accent Glow */}
            <div
              className={`absolute -right-16 -bottom-16 w-48 h-48 bg-linear-to-br ${feature.iconColor} opacity-[0.02] blur-3xl group-hover:opacity-[0.08] transition-opacity duration-700`}
            />
          </div>
        ))}
      </div>

      {/* Refined Comparison Experience */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <HeadingComponent
            textCentered
            heading="The Stiryum Advantage"
            variant="gradient"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional */}
          <div className="group relative bg-[#1c1c1c]/20 border border-white/5 rounded-[3rem] p-10 hover:border-red-500/20 transition-all duration-500">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center text-xl">
                ✕
              </div>
              <h3 className="text-2xl font-bold text-gray-400">
                Traditional Hiring
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                "Hours of manual CV screening",
                "Keyword filters overlook talent",
                "Inconsistent evaluations",
                "Fragmented hiring tools",
                "Long hire-to-onboard cycles",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-gray-500 text-sm md:text-base"
                >
                  <div className="w-1 h-1 rounded-full bg-red-500/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Stiryum */}
          <div className="group relative bg-white/[0.02] border border-white/10 rounded-[3rem] p-10 hover:border-green-500/20 transition-all duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 flex items-center justify-center text-xl text-green-400">
                ✓
              </div>
              <h3 className="text-2xl font-bold text-white">
                The Stiryum Advantage
              </h3>
            </div>
            <ul className="space-y-5">
              {[
                "Screen 100s of CVs in seconds",
                "Semantic context finds perfection",
                "Objective, data-driven rankings",
                "Unified all-in-one ecosystem",
                "Accelerated 3-7 day hire cycles",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-gray-300 text-sm md:text-base"
                >
                  <CheckCircle2 className="w-4 h-4 text-green-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
