import { useState } from "react";
import { Brain, Puzzle, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";

// Tech Images
import tech1 from "/public/img/tech1.avif"; // Replace with your image paths
import tech2 from "/public/img/tech2.avif";
import tech3 from "/public/img/tech3.avif";

const EventPage = () => {
  const [flippedCards, setFlippedCards] = useState([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRound, setSelectedRound] = useState(null);

  const eventRounds = [
    {
      title: "Round 1: Screening",
      icon: <Brain className="h-8 w-8" />,
      time: "25 minutes",
      description:
        "30 questions (Quiz, Riddles, Aptitude, GK/GS). Screening of 15-20 teams.",
      image: tech1,
      furtherDetails:
        "This round tests your general knowledge, logical reasoning, and problem-solving skills. Be prepared for a mix of multiple-choice and open-ended questions. The top 15-20 teams will proceed to the next round.",
    },
    {
      title: "Round 2: Problem Solving",
      icon: <Puzzle className="h-8 w-8" />,
      time: "1 hour 15 minutes",
      description:
        "Problem-solving questions. Internet access allowed for only one-fourth of the total time. Strict prohibition of AI or malpractices.",
      image: tech2,
      furtherDetails:
        "In this round, you will face complex problem-solving challenges. You are allowed limited internet access to research solutions. Any use of AI tools or unfair practices will lead to disqualification.",
    },
    {
      title: "Round 3: Riddle Quest",
      icon: <Award className="h-8 w-8" />,
      time: "45 minutes",
      description: "Riddle-solving with storylines for each team.",
      image: tech3,
      furtherDetails:
        "This round is all about creativity and quick thinking. Each team will be given a storyline with embedded riddles. Solve them within the time limit to score points.",
    },
  ];

  const handleCardFlip = (index) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleShowMore = (index) => {
    setSelectedRound(eventRounds[index]);
    setPopupVisible(true);
  };

  const handleClosePopup = () => {
    setPopupVisible(false);
    setSelectedRound(null);
  };

  return (
    <section
      id="event"
      className="relative min-h-screen bg-[#001d35] px-4 py-20"
    >
      {/* Event Rounds Section */}
      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        {/* Event Heading */}
        <motion.h2
          className="font-orbitron mb-12 pt-24 text-center text-5xl font-bold uppercase text-[#E94560] md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textShadow: "0 0 20px rgba(233, 69, 96, 0.8)" }}
        >
          Event Rounds
        </motion.h2>

        {/* Rounds Cards */}
        <div className="space-y-16">
          {eventRounds.map((round, index) => (
            <div
              key={round.title}
              className={`flex ${
                index === 2
                  ? "flex-col items-center"
                  : index === 0
                    ? "flex-row"
                    : "flex-row-reverse"
              } items-center justify-center gap-8`}
            >
              {/* Tech Image with Neon Moving Boundary */}
              <div className="relative w-full max-w-[400px] flex-1">
                <div
                  className="absolute inset-0 rounded-lg"
                  style={{
                    boxShadow: "0 0 20px rgba(233, 69, 96, 0.8)",
                    animation: "neon-glow 2s ease-in-out infinite alternate",
                  }}
                />
                <img
                  src={round.image}
                  alt={round.title}
                  className="relative z-10 h-[250px] w-full rounded-lg object-cover"
                />
              </div>

              {/* Round Card */}
              <motion.div
                className={`relative z-20 flex min-h-[200px] w-full max-w-[400px] flex-1 flex-col items-center justify-center rounded-2xl border border-white/20 bg-[#E94560]/20 p-6 backdrop-blur-lg transition-all duration-200 hover:bg-[#E94560]/30 hover:shadow-[0_0_20px_rgba(233,69,96,0.5)]`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                onHoverStart={() => handleCardFlip(index)}
              >
                {/* Front of the Card (Initially Visible) */}
                {!flippedCards.includes(index) && (
                  <motion.div
                    className="flex h-full w-full flex-col items-center justify-center p-6"
                    initial={{ rotateY: 0 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="text-[#E94560]">{round.icon}</div>
                    <h3 className="font-orbitron mt-4 text-center text-2xl font-bold uppercase text-[#E94560]">
                      {round.title}
                    </h3>
                  </motion.div>
                )}

                {/* Back of the Card (Revealed on Hover) */}
                {flippedCards.includes(index) && (
                  <motion.div
                    className="w-full space-y-4 p-6 text-center"
                    initial={{ rotateY: 180 }}
                    animate={{ rotateY: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h3 className="font-orbitron text-2xl font-bold uppercase text-[#E94560]">
                      {round.title}
                    </h3>
                    <div className="flex items-center justify-center gap-4 text-gray-300">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span className="font-general">{round.time}</span>
                      </div>
                    </div>
                    <p className="break-words font-circular-web leading-relaxed text-gray-200">
                      {round.description}
                    </p>
                    {/* Show More Button */}
                    <motion.button
                      className="mt-4 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF] px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-105"
                      style={{
                        boxShadow: "0 0 10px rgba(0, 255, 135, 0.8)",
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShowMore(index)}
                    >
                      Show More
                    </motion.button>
                  </motion.div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Pop-up Card */}
      {popupVisible && selectedRound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            className="relative flex max-h-[80vh] min-h-[300px] w-full max-w-2xl flex-col overflow-y-auto rounded-2xl border border-white/20 bg-[#E94560]/20 p-8 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-orbitron mb-4 text-2xl font-bold uppercase text-[#E94560]">
              {selectedRound.title}
            </h3>
            <div className="mb-6 flex items-center gap-4 text-gray-300">
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span className="font-general">{selectedRound.time}</span>
              </div>
            </div>
            <p className="mb-6 break-words font-circular-web leading-relaxed text-gray-200">
              {selectedRound.furtherDetails}
            </p>
            {/* Close Button */}
            <motion.button
              className="mt-4 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF] px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-105"
              style={{
                boxShadow: "0 0 10px rgba(0, 255, 135, 0.8)",
              }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClosePopup}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}

      {/* Neon Glow Animation */}
      <style jsx>{`
        @keyframes neon-glow {
          0% {
            box-shadow: 0 0 10px rgba(233, 69, 96, 0.8);
          }
          100% {
            box-shadow: 0 0 20px rgba(233, 69, 96, 1);
          }
        }
      `}</style>
    </section>
  );
};

export default EventPage;
