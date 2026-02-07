"use client";

import { Upload, Sparkles, Target, Zap, Users } from "lucide-react";
import HeadingComponent from "../HeadingComponent";
import Reveal from "../Reveal";

const steps = [
  {
    title: "Upload CVs",
    description:
      "Bulk upload resumes and let our AI parser extract skills, experience, and certifications into structured data instantly.",
    icon: Upload,
    color: "from-blue-600 to-cyan-400",
  },
  {
    title: "Optimize JDs",
    description:
      "Generate high-performing job descriptions with our AI assistant or refine existing ones for maximum matching accuracy.",
    icon: Sparkles,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Semantic Analysis",
    description:
      "Our AI performs deep semantic analysis to find the perfect candidate-to-role fit based on actual competence, not just keywords.",
    icon: Target,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "AI Ranking",
    description:
      "Receive a stack-ranked list of candidates with detailed match scores and qualitative insights for every applicant.",
    icon: Zap,
    color: "from-[#F37036] to-[#007DC5]",
  },
  {
    title: "Accelerated Hiring",
    description:
      "Manage shortlists and pipeline stages in one unified dashboard, reducing time-to-hire by over 70%.",
    icon: Users,
    color: "from-green-500 to-emerald-500",
  },
];

export default function HowItWorks() {
  return (
    <div className="min-h-screen text-white py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-background relative overflow-hidden">
      {/* Immersive Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-600/[0.02] blur-[180px] rounded-full -z-10" />

      {/* Header Section */}
      <div className="max-w-7xl mx-auto mb-20 md:mb-32 text-center">
        <HeadingComponent
          textCentered
          heading="The Stiryum Journey"
          description="A simplified, AI-driven workflow designed to help you find your next great hire faster than ever."
        />
      </div>

      {/* Timeline Layout */}
      <div className="max-w-5xl mx-auto relative px-4 md:px-0">
        {/* Vertical Line */}
        {/* Desktop: Central. Mobile: Left-aligned (left-4) */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-linear-to-b from-transparent via-white/10 to-transparent" />

        <div className="space-y-16 md:space-y-32">
          {steps.map((step, index) => (
            <Reveal key={index} className="w-full">
              <div
                className={`relative flex flex-col md:flex-row items-start md:items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Content Side */}
                <div className="w-full md:w-[45%] pl-14 md:pl-0">
                  <div
                    className={`p-6 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/[0.03] border border-white/10 hover:bg-white/[0.06] hover:border-white/20 transition-all duration-500 group relative overflow-hidden shadow-2xl ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    {/* Glossy Overlay */}
                    <div className="absolute inset-0 bg-linear-to-tr from-white/[0.02] to-transparent pointer-events-none" />

                    <div className="relative z-10 text-left md:contents">
                      <h3 className="text-xl md:text-3xl font-bold mb-3 md:mb-4 silver-metal-gradient">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                        {step.description}
                      </p>
                    </div>

                    {/* Step Glow */}
                    <div
                      className={`absolute -right-8 -bottom-8 w-32 h-32 bg-linear-to-br ${step.color} opacity-[0.02] blur-3xl group-hover:opacity-[0.08] transition-opacity duration-700`}
                    />
                  </div>
                </div>

                {/* Center Circle / Dot */}
                <div className="absolute left-0 md:relative md:left-auto md:translate-x-0 z-20 flex items-center justify-center w-12 md:w-[10%]">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-linear-to-br ${step.color} p-[1px] shadow-[0_0_20px_rgba(255,255,255,0.05)] transform rotate-45`}
                  >
                    <div className="w-full h-full rounded-[11px] md:rounded-[15px] bg-[#00001A] flex items-center justify-center -rotate-45">
                      <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-7 md:-top-8 flex items-center justify-center w-full">
                    <span className="text-[10px] md:text-xs font-black tracking-widest text-white/20 uppercase whitespace-nowrap">
                      Stage 0{index + 1}
                    </span>
                  </div>
                </div>

                {/* Empty Side for Spacing */}
                <div className="hidden md:block md:w-[45%]" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
