import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useState } from "react";

// Define the type for team members
interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  socials: {
    twitter?: string;
    instagram?: string;
    github?: string;
  };
}

// Sample team data
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    role: "Hokage",
    image: "https://res.cloudinary.com/dqievv927/image/upload/v1742628150/Naru_r5wk0i.jpg",
    socials: {
      twitter: "https://twitter.com/naruto",
      instagram: "https://instagram.com/naruto",
      github: "https://github.com/naruto",
    },
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    role: "Shadow Hokage",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/sasuke",
      github: "https://github.com/sasuke",
    },
  },
  {
    id: 3,
    name: "Sakura Haruno",
    role: "Medical Ninja",
    image: "https://via.placeholder.com/150",
    socials: {
      instagram: "https://instagram.com/sakura",
      github: "https://github.com/sakura",
    },
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    role: "Copy Ninja",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/kakashi",
      github: "https://github.com/kakashi",
    },
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    role: "Genius Strategist",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/itachi",
      instagram: "https://instagram.com/itachi",
    },
  },
  {
    id: 6,
    name: "Hinata Hyuga",
    role: "Byakugan Princess",
    image: "https://via.placeholder.com/150",
    socials: {
      instagram: "https://instagram.com/hinata",
      github: "https://github.com/hinata",
    },
  },
  {
    id: 7,
    name: "Gaara",
    role: "Kazekage",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/gaara",
      github: "https://github.com/gaara",
    },
  },
  {
    id: 8,
    name: "Rock Lee",
    role: "Taijutsu Master",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/rocklee",
      instagram: "https://instagram.com/rocklee",
    },
  },
];

// Enhanced animation variants
const cardVariants = {
  offscreen: {
    y: 150,
    opacity: 0,
    scale: 0.7,
    rotate: -15,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1.2,
      delay: 0.1,
    },
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      type: "spring",
      stiffness: 200,
    },
  },
};

// Dimmed and slowed laser border animation with breathing effect
const laserBorder = {
  borderColor: [
    "#FF00FF80",
    "#00FFFF80",
    "#FFFF0080",
    "#FF444480",
    "#00FF0080",
    "#FF00FF80",
  ],
  boxShadow: [
    "0 0 8px #FF00FF80",
    "0 0 8px #00FFFF80",
    "0 0 8px #FFFF0080",
    "0 0 8px #FF444480",
    "0 0 8px #00FF0080",
    "0 0 8px #FF00FF80",
  ],
};

const Team = () => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#0a001f] to-[#1a0044]">
      {/* Define custom fonts locally */}
      <style>
        {`
          @font-face {
            font-family: 'Ghibli';
            src: url('/fonts/Ghibli.otf') format('opentype');
            font-weight: normal;
            font-style: normal;
          }
          @font-face {
            font-family: 'Ghibli-Bold';
            src: url('/fonts/Ghibli-Bold.otf') format('opentype');
            font-weight: bold;
            font-style: normal;
          }
          .glow-text {
            text-shadow: 0 0 2px #fff, 0 0 5px rgba(255, 255, 255, 0.5);
          }
          .chakra-overlay {
            background: radial-gradient(circle, rgba(255,0,255,0.2) 0%, transparent 70%);
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
          }
        `}
      </style>

      <Navbar />

      {/* Team Section */}
      <div className="relative z-10 min-h-screen pt-24 px-8 sm:px-12 lg:px-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12 glow-text"
          style={{ fontFamily: "Ghibli-Bold, sans-serif" }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Meet Our Team
        </motion.h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl p-6 overflow-hidden border-4"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: true, amount: 0.8 }}
              variants={cardVariants}
              onHoverStart={() => setExpandedCardId(member.id)}
              onHoverEnd={() => setExpandedCardId(null)}
              animate={{
                ...laserBorder,
                zIndex: expandedCardId === member.id ? 20 : 1,
              }}
              transition={{
                borderColor: { duration: 6, repeat: Infinity, ease: "easeInOut" },
                boxShadow: { duration: 6, repeat: Infinity, ease: "easeInOut" },
              }}
            >
              {/* Chakra Energy Overlay */}
              <motion.div
                className="chakra-overlay"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

              {/* Animated Sparkles */}
              <motion.div
                className="absolute top-2 right-2"
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: Math.random() }}
              >
                ✨
              </motion.div>

              <div className="relative z-10 flex flex-col items-center" style={{ fontFamily: "Ghibli, sans-serif" }}>
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 rounded-full border-4 border-white/50 object-cover mb-6 shadow-xl"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: 360,
                    borderColor: "#FF00FF",
                  }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 200,
                    duration: 0.8,
                  }}
                />
                <h2 
                  className="text-3xl font-bold text-white"
                  style={{ fontFamily: "Ghibli, sans-serif" }}
                >
                  {member.name}
                </h2>
                <motion.p 
                  className="text-cyan-300 mb-4 font-semibold"
                  style={{ fontFamily: "Ghibli, sans-serif" }}
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  {member.role}
                </motion.p>
                <div className="flex space-x-6">
                  {member.socials.twitter && (
                    <motion.a
                      href={member.socials.twitter}
                      target="_blank"
                      className="text-white"
                      whileHover={{ 
                        scale: 1.5, 
                        rotate: [0, 360],
                        color: "#00FFFF",
                      }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaTwitter size={28} />
                    </motion.a>
                  )}
                  {member.socials.instagram && (
                    <motion.a
                      href={member.socials.instagram}
                      target="_blank"
                      className="text-white"
                      whileHover={{ 
                        scale: 1.5, 
                        rotate: [0, 360],
                        color: "#FF00FF",
                      }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaInstagram size={28} />
                    </motion.a>
                  )}
                  {member.socials.github && (
                    <motion.a
                      href={member.socials.github}
                      target="_blank"
                      className="text-white"
                      whileHover={{ 
                        scale: 1.5, 
                        rotate: [0, 360],
                        color: "#FFFF00",
                      }}
                      whileTap={{ scale: 0.8 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <FaGithub size={28} />
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;