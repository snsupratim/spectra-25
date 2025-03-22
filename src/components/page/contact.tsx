import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,
  Wind,
  Cloud,
  Stars,
  Sparkles,
  Moon,
} from "lucide-react";

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How can we visit your magical realm?",
      answer:
        "Our enchanted office welcomes visitors during mystical hours. Follow the glowing path to find us.",
    },
    {
      question: "Where are you located?",
      answer:
        "Our sanctuary exists in the heart of the city, where reality meets magic. Look for the building with the ethereal blue glow.",
    },
    {
      question: "What are your working hours?",
      answer:
        "We're available from sunrise to sunset (9:00 AM - 6:00 PM), when the magical energies are strongest.",
    },
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#1a2b3c] to-[#0f172a] text-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute left-10 top-10 text-blue-300/20">
          <Cloud size={100} className="blur-[1px] filter" />
        </div>
        <div className="animate-float-delayed absolute right-20 top-40 text-blue-300/20">
          <Wind size={80} className="blur-[1px] filter" />
        </div>
        <div className="left-30 animate-twinkle absolute bottom-20 text-blue-300/20">
          <Stars size={60} className="blur-[1px] filter" />
        </div>
        <div className="animate-float-rotate absolute right-1/4 top-1/3 text-blue-300/20">
          <Moon size={70} className="blur-[1px] filter" />
        </div>
        <div className="animate-twinkle absolute bottom-1/4 right-1/3 text-blue-300/20">
          <Sparkles size={50} className="blur-[1px] filter" />
        </div>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="mb-16 text-center">
          <h1 className="animate-pulse-glow mb-4 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-6xl font-bold text-transparent">
            Enter Our Magical Realm
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-blue-200">
            Where every visit becomes an enchanted journey through time and
            space
          </p>
        </div>

        {/* Contact Info & Map */}
        <div className="mx-auto max-w-4xl">
          <div className="neon-glow mb-12 rounded-2xl bg-white/5 p-8 shadow-xl backdrop-blur-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="neon-glow flex transform flex-col items-center space-y-4 rounded-xl bg-white/5 p-6 transition-all duration-300 hover:scale-105">
                <div className="rounded-full bg-blue-500/20 p-4">
                  <MapPin className="h-8 w-8 text-blue-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-200">
                    Visit Us
                  </h3>
                  <p className="mt-2 text-blue-300">
                    123 Enchanted Forest Lane
                  </p>
                </div>
              </div>

              <div className="neon-glow flex transform flex-col items-center space-y-4 rounded-xl bg-white/5 p-6 transition-all duration-300 hover:scale-105">
                <div className="rounded-full bg-blue-500/20 p-4">
                  <Phone className="h-8 w-8 text-blue-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-200">
                    Call Us
                  </h3>
                  <p className="mt-2 text-blue-300">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="neon-glow flex transform flex-col items-center space-y-4 rounded-xl bg-white/5 p-6 transition-all duration-300 hover:scale-105">
                <div className="rounded-full bg-blue-500/20 p-4">
                  <Mail className="h-8 w-8 text-blue-300" />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-blue-200">
                    Email Us
                  </h3>
                  <p className="mt-2 text-blue-300">hello@magicalrealm.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="neon-glow h-80 overflow-hidden rounded-2xl bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3682.915324404707!2d88.3451222091869!3d22.619636979372576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1742658554016!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%)" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="brightness-75 filter"
            ></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="mb-12 bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 bg-clip-text text-center text-4xl font-bold text-transparent">
            Mystical Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="neon-glow transform overflow-hidden rounded-xl bg-white/5 backdrop-blur-lg transition-all duration-300 hover:bg-white/10"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-blue-200">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transform text-blue-300 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden px-6 transition-all duration-500 ease-in-out ${
                    openFaq === index ? "max-h-40 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-blue-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
