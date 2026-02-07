import { ourPartners } from "../constants/data";
import Reveal from "./Reveal";
import TextCycleAnimation from "./TextCycleAnimation";
import bgImage from "../public/images/bg.webp";
// import bgImage from "../public/images/bg2.png";
import { InfiniteMovingText } from "./ui/infinite-moving-text";
import { WavyBackground } from "./ui/wavy-background";
import HeadingComponent from "./HeadingComponent";

type Prop = {
  heading: string;
  description?: string;
  textCycle?: string[];
};

const HeroSection = ({ heading, description, textCycle }: Prop) => {
  return (
    // <WavyBackground className="max-w-screen overflow-x-hidden">
    <div
      className="relative min-h-screen max-w-screen w-full flex flex-col gap-4 items-center justify-center overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 50% -20%, rgba(59, 130, 246, 0.25) 0%, rgba(2, 6, 23, 1) 85%), radial-gradient(circle at 0% 0%, rgba(59, 130, 246, 0.1) 0%, transparent 40%), radial-gradient(circle at 100% 0%, rgba(147, 51, 234, 0.1) 0%, transparent 40%), #020617",
      }}
    >
      {/* Subtle Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div
        className={`flex flex-col leading-relaxed md:gap-2 items-center text-center px-4 relative z-10`}
        // style={{ backgroundImage: `url(${bgImage})` }}
      >
        <Reveal>
          <div className="mb-6 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/80 text-xs md:text-sm font-medium tracking-widest uppercase flex items-center gap-2 w-fit mx-auto">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            AI Powered Recruitment Platform
          </div>
          <div className="flex flex-col gap-2 items-center justify-center">
            <HeadingComponent textCentered heading={heading} textCycle={textCycle} />
          </div>
        </Reveal>
      </div>
      {description && (
        <Reveal>
          <p className="text-lg text-gray-400 md:text-xl font-medium px-4 max-w-2xl text-center">
            {description}
          </p>
        </Reveal>
      )}
      {/* <div className="flex flex-col gap-4 absolute bottom-20 ">
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
                </div> */}
    </div>
    // {/* </WavyBackground> */}
  );
};

export default HeroSection;
