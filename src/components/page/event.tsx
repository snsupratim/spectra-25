import { useState } from "react";
import { Brain, Puzzle, Award, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { JSX } from "react";

// Tech Images
import tech1 from "/public/img/tech1.avif";
import tech2 from "/public/img/tech2.avif";
import tech3 from "/public/img/tech3.avif";

interface EventRound {
  title: string;
  icon: JSX.Element;
  time: string;
  description: string;
  image: string; // If using imported images, change to `image: any;`
  furtherDetails: string;
}

const EventPage = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [popupVisible, setPopupVisible] = useState<boolean>(false);
  const [selectedRound, setSelectedRound] = useState<EventRound | null>(null);

  const eventRounds: EventRound[] = [
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

  const handleCardFlip = (index: number) => {
    if (!flippedCards.includes(index)) {
      setFlippedCards([...flippedCards, index]);
    }
  };

  const handleShowMore = (index: number) => {
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
      <div className="relative z-10 mx-auto max-w-7xl space-y-16">
        <motion.h2
          className="font-orbitron mb-12 pt-24 text-center text-5xl font-bold uppercase text-[#E94560] md:text-6xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ textShadow: "0 0 20px rgba(233, 69, 96, 0.8)" }}
        >
          Event Rounds
        </motion.h2>

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

              <motion.div
                className="relative z-20 flex min-h-[200px] w-full max-w-[400px] flex-1 flex-col items-center justify-center rounded-2xl border border-white/20 bg-[#E94560]/20 p-6 backdrop-blur-lg transition-all duration-200 hover:bg-[#E94560]/30 hover:shadow-[0_0_20px_rgba(233,69,96,0.5)]"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.2 }}
                whileHover={{ scale: 1.1 }}
                onMouseEnter={() => handleCardFlip(index)}
              >
                {!flippedCards.includes(index) && (
                  <div className="flex h-full w-full flex-col items-center justify-center p-6">
                    <div className="text-[#E94560]">{round.icon}</div>
                    <h3 className="font-orbitron mt-4 text-center text-2xl font-bold uppercase text-[#E94560]">
                      {round.title}
                    </h3>
                  </div>
                )}

                {flippedCards.includes(index) && (
                  <div className="w-full space-y-4 p-6 text-center">
                    <h3 className="font-orbitron text-2xl font-bold uppercase text-[#E94560]">
                      {round.title}
                    </h3>
                    <div className="flex items-center justify-center gap-4 text-gray-300">
                      <Clock className="h-4 w-4" />
                      <span className="font-general">{round.time}</span>
                    </div>
                    <p className="font-circular-web text-gray-200">
                      {round.description}
                    </p>
                    <motion.button
                      className="mt-4 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF] px-4 py-2 text-sm font-bold transition-all duration-300 hover:scale-105"
                      style={{ boxShadow: "0 0 10px rgba(0, 255, 135, 0.8)" }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleShowMore(index)}
                    >
                      Show More
                    </motion.button>
                  </div>
                )}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {popupVisible && selectedRound && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <motion.div
            className="relative flex w-full max-w-2xl flex-col rounded-2xl border border-white/20 bg-[#E94560]/20 p-8 backdrop-blur-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="font-orbitron text-2xl font-bold uppercase text-[#E94560]">
              {selectedRound.title}
            </h3>
            <p className="font-circular-web text-gray-200">
              {selectedRound.furtherDetails}
            </p>
            <motion.button
              className="mt-4 rounded-full bg-gradient-to-r from-[#00FF87] to-[#60EFFF] px-4 py-2 text-sm font-bold"
              onClick={handleClosePopup}
            >
              Close
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default EventPage;
