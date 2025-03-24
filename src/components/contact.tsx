import { JSX } from "react";
import { Button } from "./button";

// Define the props for ImageClipBox
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

// Define the props for the Button component (if not already defined in ./button)
interface ButtonProps {
  children: React.ReactNode;
  containerClass?: string;
  [key: string]: any; // For additional props like onClick, etc.
}

// Ensure the Button component in ./button is typed correctly
// Example of what ./button.tsx might look like:
/*
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  containerClass?: string;
  [key: string]: any;
}

export const Button = ({ children, containerClass, ...props }: ButtonProps) => (
  <button className={containerClass} {...props}>
    {children}
  </button>
);
*/

export const Contact = (): JSX.Element => {
  return (
    <section
      id="contact"
      className="my-20 min-h-96 w-screen px-10"
      aria-label="Contact Section"
    >
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        {/* Left side background image */}
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/art4.jpg"
            alt="Contact Background Image 1"
            clipClass="contact-clip-path-1"
          />
          {/* Commented out for now, can be re-enabled if needed */}
          {/* <ImageClipBox
            src="/img/art3.webp"
            alt="Contact Background Image 2"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          /> */}
        </div>

        {/* Right side swordman image */}
        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman.webp"
            alt="Swordman Illustration"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="font-general text-[10px] uppercase">Reach Us</p>

          <p className="special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]">
            Having Any
            <br /> kind of Trouble ? <br />{" "}
            <span className="text-sky-400">Contact Us</span>
          </p>

          {/* Updated href to point to a proper contact page route */}
          <a href="/contact">
            <Button containerClass="mt-10 cursor-pointer">Contact Us</Button>
          </a>
        </div>
      </div>
    </section>
  );
};