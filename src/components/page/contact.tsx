import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  ChevronDown,

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
    <div className="relative min-h-screen bg-[#001D35] text-white">
      {/* Animated Background Elements */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-[#1a2b3c] p-8 rounded-2xl shadow-lg">
            <h1 className="text-5xl font-bold text-white mb-2 pb-11">
              Send Your Queries or<br />Problems
            </h1>

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    placeholder="Richard Hammond"
                    className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">EMAIL ADDRESS *</label>
                  <input
                    type="email"
                    placeholder="support@gmail.com"
                    className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">PHONE NUMBER *</label>
                  <input
                    type="text"
                    placeholder="+91 9999999999"
                    className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm mb-1">SUBJECT *</label>
                  <input
                    type="text"
                    placeholder="I would like to discuss"
                    className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-gray-300 text-sm mb-1">MESSAGE *</label>
                <textarea
                  placeholder="Write message"
                  className="w-full p-3 bg-[#2a3b4c] text-gray-300 rounded-lg h-24 focus:outline-none focus:ring-2 focus:ring-yellow-400 placeholder-gray-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Send Us Message
              </button>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="bg-[#1a2b3c] p-8 rounded-2xl shadow-lg">
            <h1 className="text-5xl font-bold text-white mb-2">
              Need Help? <br /> Contact Us Without Hesitation
            </h1>
            <p className="text-gray-400 text-sm mb-6">
              Sed ut perspiciatis unde omnis natus rem aperiam eaque inventore veritatis
            </p>

            {/* Contact Info */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-2">Main Office</h3>
              <div className="flex items-start mb-2">
                <MapPin className="h-5 w-5 text-yellow-400 mr-2 mt-1" />
                <p className="text-gray-300 text-sm">
                  123 Enchanted Forest Lane, <br /> New York City
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-yellow-400 mr-2" />
                <p className="text-gray-300 text-sm">hello@magicalrealm.com</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                <p className="text-gray-300 text-sm">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="mb-12 text-center text-4xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <div className="mx-auto max-w-3xl space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="transform overflow-hidden rounded-xl bg-[#1a2b3c] transition-all duration-300 hover:bg-[#2a3b4c]"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="text-lg font-semibold text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 transform text-yellow-400 transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden px-6 transition-all duration-500 ease-in-out ${
                    openFaq === index ? "max-h-40 py-4" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 h-[400px] overflow-hidden rounded-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.915324404707!2d88.3451222091869!3d22.619636979372576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1743003836835!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{
              border: 0,
              filter:
                "grayscale(30%) contrast(120%) brightness(90%) sepia(10%) hue-rotate(230deg)",
            }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
}

export default App;