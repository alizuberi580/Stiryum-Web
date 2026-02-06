"use client";

import {
    Upload,
    FileText,
    Target,
    BarChart3,
    Users,
    Zap,
    Shield,
} from "lucide-react";

const features = [
    {
        icon: Upload,
        title: "Bulk CV Upload",
        description:
            "Upload hundreds of CVs at once. AI automatically extracts skills, experience, and qualifications into structured profiles.",
        benefits: ["Process 100+ CVs in minutes", "Zero manual data entry", "Instant profile creation"],
        color: "from-blue-500 to-cyan-500",
    },
    {
        icon: Target,
        title: "Semantic AI Matching",
        description:
            "Advanced embeddings understand context beyond keywords. Match candidates based on true skill alignment and role compatibility.",
        benefits: ["Context-aware scoring", "Find hidden talent", "Beyond keyword search"],
        color: "from-[#F37036] to-[#007DC5]",
    },
    {
        icon: BarChart3,
        title: "AI Scoring & Ranking",
        description:
            "Every candidate gets an AI-calculated match score. See the best fits first, ranked by relevance and potential.",
        benefits: ["Objective evaluation", "Instant top picks", "Data-driven decisions"],
        color: "from-green-500 to-emerald-500",
    },
    {
        icon: FileText,
        title: "JD Generation Chatbot",
        description:
            "AI chatbot creates professional job descriptions in minutes—optimized for matching and searchability.",
        benefits: ["5-minute JD creation", "SEO-optimized", "Consistent quality"],
        color: "from-orange-500 to-amber-500",
    },
    {
        icon: Users,
        title: "Pipeline Management",
        description:
            "Manage every hiring stage in one place. Track progress, collaborate with team members, and maintain full visibility.",
        benefits: ["Centralized workflow", "Team collaboration", "Real-time tracking"],
        color: "from-indigo-500 to-violet-500",
    },
    {
        icon: Shield,
        title: "Bias-Aware Hiring",
        description:
            "AI designed to reduce unconscious bias. Focus on skills and qualifications while promoting fair evaluation.",
        benefits: ["Reduce hiring bias", "Promote diversity", "Objective assessment"],
        color: "from-yellow-500 to-orange-500",
    },
];

export default function Features() {
    return (
        <div className="min-h-screen text-white py-20 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-20">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 text-[#ffffff]">
                    Everything You Need to Hire Smarter
                </h1>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    AI-powered recruitment platform with all the tools you need
                </p>
            </div>

            {/* Features Grid */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
                    >
                        {/* Gradient glow on hover */}
                        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[#F37036]/10 to-[#007DC5]/10 blur-xl -z-10" />

                        {/* Icon */}
                        <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                            <feature.icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Title */}
                        <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                            {feature.title}
                        </h3>

                        {/* Description */}
                        <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>

                        {/* Benefits */}
                        <div className="space-y-2">
                            {feature.benefits.map((benefit, benefitIndex) => (
                                <div key={benefitIndex} className="flex items-start gap-2">
                                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mt-0.5">
                                        <div className="w-2 h-2 rounded-full bg-green-400" />
                                    </div>
                                    <span className="text-sm text-gray-400">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* Comparison Section */}
            <div className="max-w-6xl mx-auto mb-20">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Traditional Hiring vs. Stiryum
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {/* Traditional Way */}
                    <div className="bg-red-500/5 border border-red-500/20 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                                <span className="text-2xl">😓</span>
                            </div>
                            <h3 className="text-2xl font-bold text-red-400">Traditional Hiring</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "Manual CV screening (hours)",
                                "Keyword searches miss talent",
                                "Inconsistent evaluations",
                                "Fragmented tools",
                                "Weeks to hire",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-red-400 mt-1">✗</span>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Stiryum Way */}
                    <div className="bg-green-500/5 border border-green-500/20 rounded-2xl p-8">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#F37036] to-[#007DC5] flex items-center justify-center">
                                <span className="text-2xl">🚀</span>
                            </div>
                            <h3 className="text-2xl font-bold text-green-400">With Stiryum</h3>
                        </div>
                        <ul className="space-y-4">
                            {[
                                "AI screens 100s of CVs in minutes",
                                "Semantic matching finds talent",
                                "Objective scoring",
                                "All-in-one platform",
                                "Days to hire",
                            ].map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-green-400 mt-1">✓</span>
                                    <span className="text-gray-300">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}