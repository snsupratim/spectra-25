import { Navbar } from "@/components/navbar";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaGithub } from "react-icons/fa";
import { useState } from "react";

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

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Naruto Uzumaki",
    role: "Lead Developer",
    image: "https://res.cloudinary.com/dqievv927/image/upload/v1743086403/Vizu1/velye9g6dhk0zwtzlzxi.jpg",
    socials: {
      twitter: "https://twitter.com/naruto",
      instagram: "https://instagram.com/naruto",
      github: "https://github.com/naruto",
    },
  },
  {
    id: 2,
    name: "Sasuke Uchiha",
    role: "Senior Developer",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/sasuke",
      github: "https://github.com/sasuke",
    },
  },
  {
    id: 3,
    name: "Sakura Haruno",
    role: "UI/UX Designer",
    image: "https://via.placeholder.com/150",
    socials: {
      instagram: "https://instagram.com/sakura",
      github: "https://github.com/sakura",
    },
  },
  {
    id: 4,
    name: "Kakashi Hatake",
    role: "Project Manager",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/kakashi",
      github: "https://github.com/kakashi",
    },
  },
  {
    id: 5,
    name: "Itachi Uchiha",
    role: "CTO",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/itachi",
      instagram: "https://instagram.com/itachi",
    },
  },
  {
    id: 6,
    name: "Hinata Hyuga",
    role: "Frontend Developer",
    image: "https://via.placeholder.com/150",
    socials: {
      instagram: "https://instagram.com/hinata",
      github: "https://github.com/hinata",
    },
  },
  {
    id: 7,
    name: "Gaara",
    role: "Backend Developer",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/gaara",
      github: "https://github.com/gaara",
    },
  },
  {
    id: 8,
    name: "Rock Lee",
    role: "Graphic Designer",
    image: "https://via.placeholder.com/150",
    socials: {
      twitter: "https://twitter.com/rocklee",
      instagram: "https://instagram.com/rocklee",
    },
  },
];

type RoleFilter = "All Roles" | "Developer" | "Designer" | "Management";

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

const buttonVariants = {
  inactive: {
    scale: 1,
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    color: "#FFFFFF",
    borderColor: "rgba(255, 255, 255, 0.2)",
  },
  active: {
    scale: 1.05,
    backgroundColor: "rgba(233, 69, 96, 0.5)",
    color: "#FFFFFF",
    borderColor: "#E94560",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  },
  hover: {
    scale: 1.03,
    backgroundColor: "rgba(233, 69, 96, 0.3)",
    transition: {
      duration: 0.2
    }
  }
};

const roleColors: Record<RoleFilter, string> = {
  "Developer": "#E94560",    // Red for developers
  "Designer": "#60EFFF",     // Blue for designers
  "Management": "#00FF87",   // Green for management
  "All Roles": "#FFFFFF"     // Default white
};

const Team = () => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState<RoleFilter>("All Roles");

  const categorizeRole = (role: string): RoleFilter => {
    if (role.includes("Developer")) return "Developer";
    if (role.includes("Designer")) return "Designer";
    if (role === "Project Manager" || role === "CTO") return "Management";
    return "All Roles";
  };

  const filteredMembers = teamMembers.filter(member => 
    activeFilter === "All Roles" || categorizeRole(member.role) === activeFilter
  );

  const roleFilters: RoleFilter[] = [
    "All Roles",
    "Developer",
    "Designer",
    "Management"
  ];

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden bg-gradient-to-br from-[#0a001f] to-[#1a0044] pb-24">
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

      <div className="relative z-10 min-h-screen pt-24 px-8 sm:px-12 lg:px-16">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-12 glow-text"
          style={{ 
            fontFamily: "Ghibli-Bold, sans-serif",
            color: "#E94560",
            textShadow: "0 0 20px rgba(233, 69, 96, 0.8)"
          }}
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          Meet Our Team
        </motion.h1>

        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {roleFilters.map((filter) => (
            <motion.button
              key={filter}
              className={`px-6 py-2 rounded-full border-2 font-medium transition-all ${
                activeFilter === filter ? "border-[#E94560]" : "border-white/20"
              }`}
              variants={buttonVariants}
              initial="inactive"
              animate={activeFilter === filter ? "active" : "inactive"}
              whileHover="hover"
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="relative bg-gradient-to-br from-purple-900/20 to-blue-900/20 backdrop-blur-xl rounded-2xl p-6 overflow-hidden border-4"
              initial="offscreen"
              whileInView="onscreen"
              whileHover="hover"
              viewport={{ once: false, margin: "0px 0px -100px 0px" }}
              variants={cardVariants}
              custom={index}
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
              <motion.div
                className="chakra-overlay"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />

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
                  className="mb-2 font-semibold"
                  style={{ 
                    fontFamily: "Ghibli, sans-serif",
                    color: roleColors[categorizeRole(member.role)]
                  }}
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

        {filteredMembers.length === 0 && (
          <motion.div 
            className="col-span-full text-center py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-2xl text-white/80 mb-4">No team members found in this role</h3>
            <motion.button
              className="px-6 py-2 rounded-full bg-[#E94560] text-white font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter("All Roles")}
            >
              Show All Team Members
            </motion.button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Team;