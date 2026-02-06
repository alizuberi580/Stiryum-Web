"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import HeadingComponent from "../HeadingComponent";
import whyUsBgImg from "../../public/images/whyUsBgImg.webp";

type Props = {
    heading: string;
    description: string;
};

const WhyUsSection = ({ heading, description }: Props) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 0.9", "start 0.25"],
    });

    const words = description.split(" ");
    const bgImage = whyUsBgImg.src;

    return (
        <div
            className="min-h-screen max-w-screen flex flex-col items-center justify-center gap-4 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <HeadingComponent heading={heading} variant="secondary" />
            <div className="max-w-screen px-2 sm:px-8 lg:px-12 md:max-w-7xl mx-auto">
                <motion.p
                    ref={ref}
                    className="flex flex-wrap items-center justify-center text-md sm:text-xl xl:text-2xl font-medium px-4 md:px-0 leading-relaxed text-center"
                >
                    {words.map((word, index) => {
                        const start = index / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word
                                key={index}
                                word={word}
                                range={[start, end]}
                                progress={scrollYProgress}
                            />
                        );
                    })}
                </motion.p>
            </div>
        </div>
    );
};

export default WhyUsSection;

const Word = ({
    word,
    range,
    progress,
}: {
    word: string;
    range: [number, number];
    progress: any;
}) => {
    const wordOpacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="mr-1 mt-2 sm:mr-2 sm:mt-3 relative">
            <span className="absolute text-white opacity-[0.1]">{word}</span>
            <motion.span style={{ opacity: wordOpacity }} className="text-black">
                {word}
            </motion.span>
        </span>
    );
};
