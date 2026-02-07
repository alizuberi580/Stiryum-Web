import Reveal from "./Reveal";
import TextCycleAnimation from "./TextCycleAnimation";

type Props = {
  className?: string;
  headingClassName?: string;
  heading?: string;
  description?: string;
  textCentered?: boolean;
  variant?: "primary" | "secondary" | "gradient";
  textCycle?: string[];
};

const HeadingComponent = ({
  className,
  headingClassName,
  heading,
  description,
  textCentered = false,
  variant = "primary",
  textCycle,
}: Props) => {
  return (
    <div
      className={`${className} flex flex-col ${
        textCentered ? "items-center max-w-7xl mx-auto" : ""
      } gap-4 px-4`}
      data-variant={variant}
    >
      <Reveal className="w-full flex flex-col items-center">
        {heading && (
          <h1
            className={`text-3xl md:text-5xl lg:text-7xl font-medium leading-normal silver-metal-gradient text-center ${headingClassName}`}
          >
            {heading}
          </h1>
        )}
        {textCycle && (
          <TextCycleAnimation
            words={textCycle}
            className="text-3xl md:text-5xl lg:text-7xl font-medium leading-normal silver-metal-gradient text-center"
          />
        )}
      </Reveal>
      {description && (
        <Reveal className="w-full">
          <p
            data-variant={variant}
            className="text-center text-md md:text-xl data-[variant=primary]:text-black data-[variant=secondary]:text-white"
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
};

export default HeadingComponent;
