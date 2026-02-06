"use client";

import { Upload, Sparkles, Target, Users, CheckCircle2, ArrowRight } from "lucide-react";

const steps = [
    {
        number: "01",
        title: "Upload CVs",
        description:
            "Drag and drop CVs in bulk. AI instantly extracts skills, experience, and qualifications into structured profiles.",
        icon: Upload,
        color: "from-blue-500 to-cyan-500",
    },
    {
        number: "02",
        title: "Create Job Descriptions",
        description:
            "Upload existing JDs or use our AI chatbot to generate optimized job descriptions in minutes.",
        icon: Sparkles,
        color: "from-purple-500 to-pink-500",
    },
    {
        number: "03",
        title: "AI Matches Candidates",
        description:
            "Semantic AI understands true skill alignment beyond keywords. Candidates are scored and ranked automatically.",
        icon: Target,
        color: "from-[#F37036] to-[#007DC5]",
    },
    {
        number: "04",
        title: "Manage Pipeline",
        description:
            "Review ranked candidates, create shortlists, and manage your recruitment pipeline in one place.",
        icon: Users,
        color: "from-green-500 to-emerald-500",
    },
    {
        number: "05",
        title: "Hire Faster",
        description:
            "Communicate with candidates, schedule interviews, and make data-driven hiring decisions with confidence.",
        icon: CheckCircle2,
        color: "from-orange-500 to-red-500",
    },
];

export default function HowItWorks() {
    return (
        <div className="min-h-screen bg-black/30 text-white py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#ffffff]">
                    How Stiryum Works
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Revolutionize your recruitment process in five simple steps
                </p>
            </div>

            {/* Steps Section */}
            <div className="max-w-6xl mx-auto space-y-12 mb-20">
                {steps.map((step, index) => (
                    <div key={index} className="relative">
                        {/* Connector Line - except for last item */}
                        {index < steps.length - 1 && (
                            <div className="hidden md:block absolute left-[60px] top-32 w-1 h-24 bg-gradient-to-b from-white/20 to-transparent" />
                        )}

                        <div className="flex flex-col md:flex-row gap-8 items-start group">
                            {/* Step Number & Icon */}
                            <div className="flex-shrink-0">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-br from-[#F37036]/20 to-[#007DC5]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                    <div className="relative bg-white/5 border border-white/10 rounded-2xl p-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                        <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <step.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-5xl font-bold bg-gradient-to-br from-white/20 to-white/5 bg-clip-text text-transparent">
                                            {step.number}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-grow bg-white/5 border border-white/10 rounded-2xl p-8 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                    {step.title}
                                </h3>
                                <p className="text-gray-300 text-lg leading-relaxed">{step.description}</p>

                                {/* Learn More Link */}
                                <button className="mt-6 flex items-center gap-2 text-[#F37036] hover:text-[#007DC5] transition-colors duration-300 group/btn">
                                    <span className="font-semibold">Learn more</span>
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Stats Section */}
            <div className="max-w-6xl mx-auto bg-gradient-to-br from-white/10 to-white/5 border border-white/10 rounded-3xl p-12 mb-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F37036] to-[#007DC5] bg-clip-text text-transparent mb-2">
                            10x
                        </div>
                        <p className="text-gray-300 text-lg">Faster Candidate Screening</p>
                    </div>
                    <div className="text-center border-l border-r border-white/10 px-4">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F37036] to-[#007DC5] bg-clip-text text-transparent mb-2">
                            95%
                        </div>
                        <p className="text-gray-300 text-lg">Match Accuracy</p>
                    </div>
                    <div className="text-center">
                        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#F37036] to-[#007DC5] bg-clip-text text-transparent mb-2">
                            70%
                        </div>
                        <p className="text-gray-300 text-lg">Time Saved on Hiring</p>
                    </div>
                </div>
            </div>
        </div>
    );
}