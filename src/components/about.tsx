import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { AnimatedTitle } from "./animated-title";

gsap.registerPlugin(ScrollTrigger);

export const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      {/* Header Section */}
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
        </p>

        <AnimatedTitle containerClass="mt-5 !text-black text-center">
          {
            "Welcome to Spectr<b>a</b> Where <b>inova</b>tion <br /> meets Creativity "
          }
        </AnimatedTitle>

        <div className="about-subtext text-center">
          <p>For the first time Spectra combining with Ghibli Animes and others.</p>
          <p>Experience an Incredible Journey from a Beginner to Mastering Your Skills and Unleash Your True Potential Like Never Before!</p>
        </div>
      </div>

      {/* Video Section */}
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <video
            src="/videos/vid-about.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};