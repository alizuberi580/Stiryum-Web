"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import footerLogo from "../public/footer-logo.svg";
import Button from "./Button";

// Navigation link type definition
type NavLink = {
    id: string;
    label: string;
    href: string;
};

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
    const [activeSection, setActiveSection] = useState<string>("home");

    // Navigation links for smooth scrolling
    const navLinks: NavLink[] = [
        { id: "home", label: "Home", href: "#home" },
        { id: "features", label: "Features", href: "#features" },
        { id: "pricing", label: "Pricing", href: "#pricing" },
        { id: "faq", label: "FAQ", href: "#faq" },
    ];

    // Auto-hide navbar on scroll down
    useEffect(() => {
        let lastScrollY = window.scrollY;

        const controlNavbar = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > 100 && currentScrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            lastScrollY = currentScrollY;
        };

        window.addEventListener("scroll", controlNavbar);

        return () => {
            window.removeEventListener("scroll", controlNavbar);
        };
    }, []);

    // Intersection Observer for active section detection
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: "-20% 0px -70% 0px", // Adjust these values to fine-tune when sections become "active"
            threshold: 0,
        };

        const observerCallback = (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Observe all sections
        navLinks.forEach((link) => {
            const section = document.getElementById(link.id);
            if (section) {
                observer.observe(section);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    // Smooth scroll to section
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.replace("#", "");
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const navbarHeight = 100; // Adjust based on your navbar height
            const targetPosition = targetElement.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: "smooth",
            });

            // Close mobile menu after clicking
            setIsMobileMenuOpen(true);
        }
    };

    return (
        <div
            className={`fixed md:mx-4 mx-2 px-auto z-50 max-w-screen w-[calc(100%-16px)] md:w-[calc(100%-32px)] transition-transform duration-300 ${isVisible ? "translate-y-0 my-4" : "-translate-y-full m-0"
                }`}
        >
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 flex p-4 rounded-2xl backdrop-filter backdrop-blur-md bg-background/50 justify-between items-center w-full">
                <div className="position-relative w-24 h-6 md:w-32 md:h-8">
                    <Link href="/" onClick={(e) => handleSmoothScroll(e, "#home")}>
                        <Image src={footerLogo} alt="Stiryum Logo" suppressHydrationWarning={true} />
                    </Link>
                </div>

                <nav className="hidden md:flex space-x-8 items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className={`
                                ${activeSection === link.id
                                    ? "text-white font-bold"
                                    : "text-gray-400 hover:text-gray-100"
                                }
                                transition-all duration-200 ease-in-out relative group
                            `}
                        >
                            {link.label}
                            {/* Active indicator underline */}
                            <span
                                className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-[#F37036] to-[#007DC5] transition-all duration-300 ${activeSection === link.id ? "w-full" : "w-0 group-hover:w-full"
                                    }`}
                            ></span>
                        </a>
                    ))}
                </nav>


                <div className="flex items-center gap-2 md:gap-4">
                    <Link href="https://calendar.app.google/vGkWmHKibQThERD59" target="_blank">
                        <Button className="px-2 py-2 text-md" variant="bordered">
                            Book a Call
                        </Button>
                    </Link>


                    <div className="md:hidden">
                        <button
                            className="flex items-center justify-center p-2 rounded-md border-none text-white hover:text-gray-900 hover:bg-white transition-all duration-300 ease-in-out"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle mobile menu"
                        >
                            {isMobileMenuOpen ? <BiMenu size={30} /> : <BiX size={30} />}
                        </button>
                    </div>
                </div>
            </div>


            <div
                className={`md:hidden transition-all duration-300 ease-in-out ${!isMobileMenuOpen
                    ? "max-h-64 rounded-2xl mt-2 opacity-100 backdrop-filter backdrop-blur-md bg-background/50 border border-white/10"
                    : "max-h-0 opacity-0 overflow-hidden"
                    }`}
            >
                <nav className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            onClick={(e) => handleSmoothScroll(e, link.href)}
                            className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${activeSection === link.id
                                ? "text-[#F37036] bg-white/5"
                                : "text-gray-300 hover:text-[#F37036] hover:bg-white/5"
                                }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
