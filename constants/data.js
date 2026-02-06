import { Zap, Crown, Building2 } from "lucide-react";
export const portfolioPage = {
    hero: {
        heading: "Our Portfolio",
        description:
            "Discover our portfolio of high-impact projects, delivering innovative, customized solutions for every client.",
    },
    //projects: projects,
};
export const footerData = [
    {
        title: "Company",
        links: [
            { heading: "", title: "Home", src: "/" },
            { heading: "", title: "Portfolio", src: "/portfolio", target: "" },
            { heading: "", title: "Services", src: "/services", target: "" },
            { heading: "", title: "Industries", src: "/industries", target: "" },
        ],
    },
    {
        title: "Reach us out",
        links: [
            {
                heading: "For Projects",
                title: "solutions@divdash.com",
            },
            { heading: "For Jobs", title: "apply@divdash.com" },
        ],
    },
    {
        title: "Follow us on Social Media",
        links: [
            {
                heading: "",
                title: "Linkedin",
                src: "https://www.linkedin.com/company/divdash",
                target: "blank",
            },
            {
                heading: "",
                title: "Facebook",
                src: "https://www.facebook.com/DivDashOfficial",
                target: "blank",
            },
            {
                heading: "",
                title: "Instagram",
                src: "https://www.instagram.com/DivDashOfficial/#",
                target: "blank",
            },
            {
                heading: "",
                title: "X",
                src: "https://x.com/DivDashOfficial",
                target: "blank",
            },
        ],
    },
];

export const ourPartners = [
    "Google",
    "Obvio",
    "lunedata",
    "Innovit",
    "Teggior",
    "Cannar",
    "Google",
    "Obvio",
    "lunedata",
    "Innovit",
    "Teggior",
    "Cannar",
    "Google",
    "Obvio",
    "lunedata",
    "Innovit",
    "Teggior",
    "Cannar",
];
export const homePage = {
    hero: {
        heading: "Revolutionizing hiring with",
        description:
            "AI-powered hiring that matches candidates, automates shortlisting, and streamlines recruitment.",
        changingText: [
            "AI-Powered Candidate Matching",
            "Semantic CV-to-Job Alignment",
            "Automated Shortlisting",
            "Intelligent Hiring Pipelines",
            "Bias-Aware Recruitment",
            "Data-Driven Hiring Decisions",
            "Scalable Talent Acquisition",
        ],
    },
    whyUs: {
        heading: "Why Choose Stiryum?",
        description: `We find the developers, you build the future. Save your team countless interview hours and boost retention with rigorously vetted senior engineers who excel technically and culturally, delivering value from day one.`,
    },
}

export const pricingPlans = [
    {
        name: "Free",
        icon: Zap,
        price: "0",
        period: "forever",
        //description: "Perfect for trying out AI-powered recruitment",
        features: [
            { text: "Up to 10 CV uploads per month", included: true },
            { text: "5 job descriptions", included: true },
            { text: "Basic AI matching & scoring", included: true },
            { text: "Manual shortlisting", included: true },
            { text: "Email support", included: true },
            { text: "Bulk CV upload", included: false },
            { text: "Advanced pipeline management", included: false },
            { text: "AI JD generation chatbot", included: false },
            { text: "Automated candidate outreach", included: false },
            { text: "Custom branding", included: false },
        ],
        cta: "Start Free",
        highlighted: false,
        color: "from-gray-600 to-gray-700",
    },
    {
        name: "Premium",
        icon: Crown,
        price: "99",
        period: "per month",
        //description: "For growing teams ready to scale their hiring",
        features: [
            { text: "Unlimited CV uploads", included: true },
            { text: "Unlimited job descriptions", included: true },
            { text: "Advanced semantic AI matching", included: true },
            { text: "Bulk CV upload & processing", included: true },
            { text: "AI JD generation chatbot", included: true },
            { text: "Automated shortlisting & pipelines", included: true },
            { text: "Candidate communication tools", included: true },
            { text: "Priority email & chat support", included: true },
            { text: "Analytics & reporting dashboard", included: true },
            { text: "Custom branding", included: false },
        ],
        cta: "Start Premium Trial",
        highlighted: true,
        color: "from-[#F37036] to-[#007DC5]",
    },
    {
        name: "Custom",
        icon: Building2,
        price: "Custom",
        period: "pricing",
        //description: "Tailored solutions for large organizations",
        features: [
            { text: "Everything in Premium", included: true },
            { text: "Unlimited team members", included: true },
            { text: "Custom AI model training", included: true },
            { text: "Advanced bias detection & mitigation", included: true },
            { text: "Multi-department pipelines", included: true },
            { text: "API access & integrations", included: true },
            { text: "Custom branding & white-labeling", included: true },
            { text: "Dedicated account manager", included: true },
            { text: "24/7 priority support & SLA", included: true },
            { text: "On-premise deployment option", included: true },
        ],
        cta: "Contact Sales",
        highlighted: false,
        color: "from-purple-600 to-indigo-700",
    },
];
