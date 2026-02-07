import Image from "next/image";
import footerLogo from "../public/footer-logo.svg";
import Link from "next/link";
import { footerData } from "../constants/data";

const Footer = () => {
  return (
    <div
      className="bg-[#00001A] h-[400px]"
      // className="relative h-[600px]"
      // style={{ clipPath: "polygon(0% 0, 100% 0%,100% 100%,0 100%)" }}
    >
      {/* <div className="relative h-[calc(100vh+600px)] -top-[100vh]"> */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sticky h-full flex flex-col items-center md:flex-row gap-8 md:items-center justify-center md:justify-between">
        <div>
          <Link href="/">
            <Image
              src={footerLogo}
              alt="Logo"
              className="w-48 sm:w-56 md:w-64"
              suppressHydrationWarning={true}
            />
          </Link>
        </div>
        <div className="md:grid md:grid-cols-3 md:gap-auto max-w-3xl flex flex-col gap-8">
          {footerData.map((section, index) => (
            <div key={index} className="flex flex-col md:items-start gap-2">
              <h1 className="text-lg md:text-xl font-semibold text-white">
                {section.title}
              </h1>
              <div className="flex flex-col gap-1">
                {section.links.map((link, linkIndex) => (
                  <div className="flex flex-col gap-2" key={linkIndex}>
                    {link?.heading && (
                      <h2 className="text-white text-md md:text-lg font-semiboldgit a md:font-bold">
                        {link.heading}
                      </h2>
                    )}
                    {"src" in link && (link.src as string) ? (
                      <Link href={link.src as string} target={link?.target}>
                        <h1 className="text-sm md:text-lg text-white">
                          {link.title}
                        </h1>
                      </Link>
                    ) : (
                      <h1 className="text-sm md:text-lg text-white">
                        {link.title}
                      </h1>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Footer;
