import { useState } from "react";
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
    {
      question: "What are your working hours?",
      answer:
        "We're available from sunrise to sunset (9:00 AM - 6:00 PM), when the magical energies are strongest.",
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
          
            

<<<<<<< HEAD
           

            {/* Contact Form */}
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm mb-1">FULL NAME *</label>
                  <input
                    type="text"
                    placeholder="Richard D. Hammond"
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
                    placeholder="+880 (123) 456 88"
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
                <label className="block text-gray-300 text-sm mb-1">TEXTAREA *</label>
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
          <div><div className="bg-[#1a2b3c] p-8 rounded-2xl shadow-lg">
            <h1 className="text-5xl font-bold text-white mb-2">
              Need Help ? <br /> Contact us without any hesitation.
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
                  55 Main Street, 2nd block, <br /> New York City
                </p>
              </div>
              <div className="flex items-center mb-2">
                <Mail className="h-5 w-5 text-yellow-400 mr-2" />
                <p className="text-gray-300 text-sm">support@gmail.com</p>
              </div>
              <div className="flex items-center mb-2">
                <Phone className="h-5 w-5 text-yellow-400 mr-2" />
                <p className="text-gray-300 text-sm">+880 (123) 456 88</p>
              </div>
            </div>
            </div></div>
=======
        {/* Contact Info & Map */}
        <div className="mx-auto max-w-4xl">
          <div className="neon-glow mb-12 rounded-2xl bg-white/5 p-8 shadow-xl backdrop-blur-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  title: "Visit Us",
                  text: "123 Enchanted Forest Lane",
                },
                { icon: Phone, title: "Call Us", text: "+1 (555) 123-4567" },
                {
                  icon: Mail,
                  title: "Email Us",
                  text: "hello@magicalrealm.com",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="neon-glow flex transform flex-col items-center space-y-4 rounded-xl bg-white/5 p-6 transition-all duration-300 hover:scale-105"
                >
                  <div className="rounded-full bg-blue-500/20 p-4">
                    <item.icon className="h-8 w-8 text-blue-300" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-blue-200">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-blue-300">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Map */}
          <div className="neon-glow h-80 overflow-hidden rounded-2xl bg-white/5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.915324404707!2d88.3451222091869!3d22.619636979372576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f89d65da7b3775%3A0x30915f7e98f1b0d5!2sMCKV%20Institute%20of%20Engineering!5e0!3m2!1sen!2sin!4v1742707219937!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter:
                  "grayscale(30%) contrast(120%) brightness(90%) sepia(10%) hue-rotate(230deg)",
              }}
              loading="eager"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
>>>>>>> 3749271d2df44a5a97ba7ffd4ce70885e10d71e7
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
<<<<<<< HEAD
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
=======
                    className={`h-5 w-5 transform text-blue-300 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 text-blue-300">{faq.answer}</div>
                )}
>>>>>>> 3749271d2df44a5a97ba7ffd4ce70885e10d71e7
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-20 h-[600px] overflow-hidden ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.241264871293!2d-74.00597408459392!3d40.71277527933191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a1f4b1e4b4f%3A0x7e0e0e0e0e0e0e0e!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1742658554016!5m2!1sen!2sin"
            width="100%"
            height="400px"
            style={{ border: 0, filter: "grayscale(100%)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="brightness-75 filter"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default App;