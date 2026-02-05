import { ourPartners } from "../constants/data";
import Reveal from "./Reveal";
import TextCycleAnimation from "./TextCycleAnimation";
import { InfiniteMovingText } from "./ui/infinite-moving-text";
import { WavyBackground } from "./ui/wavy-background";

type Prop = {
    heading: string;
    description?: string;
    textCycle?: string[];
};

const HeroSection = ({ heading, description, textCycle }: Prop) => {
    return (
        <WavyBackground className="max-w-screen overflow-x-hidden">
            <div className="relative min-h-screen max-w-screen w-[calc(100vw-50px)] sm:w-[calc(100vw-100px)] flex flex-col gap-4 items-center justify-center">
                <div
                    className={`flex flex-col leading-relaxed md:gap-2 items-center text-center px-4`}
                >
                    <Reveal>
                        <h1 className="text-3xl md:text-5xl lg:text-7xl leading-10 md:leading-20 font-medium text-white">
                            {heading}
                        </h1>
                        {textCycle && (
                            <TextCycleAnimation
                                words={textCycle}
                                className="text-3xl h-2 leading-snug md:text-5xl lg:text-7xl text-[#ffffff]"
                            />
                        )}
                    </Reveal>
                </div>
                {description && (
                    <Reveal>
                        <p className="text-lg text-white md:text-xl font-medium px-4 max-w-2xl text-center">
                            {description}
                        </p>
                    </Reveal>
                )}
                <div className="flex flex-col gap-4 absolute bottom-20 ">
                    <h3 className="text-white text-wrap px-1 sm:px-4 text-[18px] text-center font-semibold">
                        Our solutions are recognized by
                    </h3>
                    <div className="relative w-full overflow-x-hidden">
                        <InfiniteMovingText
                            className="w-screen"
                            items={ourPartners}
                            speed="fast"
                        />
                    </div>
                </div>
            </div>
        </WavyBackground>
    );
};

export default HeroSection;
