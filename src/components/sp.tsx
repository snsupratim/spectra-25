import { JSX } from "react";

// Removed unused Button import
interface ImageClipBoxProps {
  src: string;
  alt: string;
  clipClass?: string;
}

const ImageClipBox = ({ src, alt, clipClass }: ImageClipBoxProps) => (
  <div className={clipClass}>
    <img src={src} alt={alt} />
  </div>
);

export const Sp = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="my-20 min-h-96 w-screen px-10"
      aria-label="Sponsors Section"
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left side image - matching the swordman */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman.webp"
            alt="Swordman Left"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        {/* Right side image - original swordman */}
        <div className="absolute -top-40 right-20 w-60 sm:top-1/2 md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman.webp"
            alt="Swordman Right"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <h2 className="special-font text-3xl md:text-4xl font-bold mb-8">
            Our Title Sponsors
          </h2>

          <p className="font-general text-[10px] uppercase">Reach Us</p>

          {/* Fixed duplicate div by removing the nested one */}
          <div className="mt-10 flex w-full justify-center gap-6">
            <div className="border-2 border-white h-40 w-40 overflow-hidden">
              <ImageClipBox
                src="/img/apple.png"
                alt="Apple Sponsor Logo"
                clipClass="h-full w-full object-cover"
              />
            </div>
            <div className="border-2 border-white h-40 w-40 overflow-hidden">
              <ImageClipBox
                src="/img/tesla.jpg"
                alt="Tesla Sponsor Logo"
                clipClass="h-full w-full object-cover"
              />
            </div>
            <div className="border-2 border-white h-40 w-40 overflow-hidden">
              <ImageClipBox
                src="/img/images.png"
                alt="Sponsor Logo"
                clipClass="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};