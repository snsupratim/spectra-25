import { useState } from "react";
import { Brain, Puzzle, Award, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface EventRound {
  title: string;
  icon: JSX.Element;
  time: string;
  description: string;
  image: string;
  furtherDetails: string;
}

const EventPage = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [popupVisible, setPopupVisible] = useState(false);
  const [selectedRound, setSelectedRound] = useState<EventRound | null>(null);

  const eventRounds: EventRound[] = [
    {
      title: "Round 1: Screening",
      icon: <Brain className="h-6 w-6 sm:h-8 sm:w-8 text-[#F2C14E]" />,
      time: "25 minutes",
      description: "30 questions (Quiz, Riddles, Aptitude, GK/GS). Screening of 15-20 teams.",
      image: "/img/tech1.avif",
      furtherDetails: "Detailed description of Round 1..."
    },
    {
      title: "Round 2: Problem Solving",
      icon: <Puzzle className="h-6 w-6 sm:h-8 sm:w-8 text-[#F2C14E]" />,
      time: "1 hour 15 minutes",
      description: "Problem-solving questions with limited internet access.",
      image: "/img/tech2.avif",
      furtherDetails: "Detailed description of Round 2..."
    },
    {
      title: "Round 3: Riddle Quest",
      icon: <Award className="h-6 w-6 sm:h-8 sm:w-8 text-[#F2C14E]" />,
      time: "45 minutes",
      description: "Riddle-solving with storylines for each team.",
      image: "/img/tech3.avif",
      furtherDetails: "Detailed description of Round 3..."
    }
  ];

  const handleCardFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
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
    <section className="relative min-h-screen bg-[#0F1B3B] px-4 py-8 sm:px-6 sm:py-12 text-[#E8E5D4]">
      {/* Background elements */}
      <div className="fixed inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjRjhGNUU0Ij48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjcsNTksMTExLDAuMDcpIiB4PSIwIiB5PSIwIj48L3JlY3Q+Cjwvc3ZnPg==')] opacity-40 -z-10"></div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.h2
          className="font-orbitron mb-6 sm:mb-8 pt-12 sm:pt-16 text-center text-3xl sm:text-4xl md:text-5xl font-bold uppercase text-[#F2C14E]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Event Rounds
        </motion.h2>

        <div className="space-y-8 sm:space-y-10 md:space-y-14">
          {eventRounds.map((round, index) => (
            <div
              key={round.title}
              className={`flex flex-col items-center gap-4 sm:gap-6 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              {/* Image container */}
              <motion.div 
                className="relative w-full flex-1"
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(242, 193, 78, 0)",
                    "0 0 0 4px rgba(242, 193, 78, 0.5)",
                    "0 0 0 0px rgba(242, 193, 78, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 rounded-lg bg-[#1B3B6F]/60 backdrop-blur-sm" />
                <img
                  src={round.image}
                  alt={round.title}
                  className="relative z-10 h-48 sm:h-56 md:h-64 lg:h-72 w-full rounded-lg object-cover border border-[#6A9365]/40"
                />
              </motion.div>

              {/* Card */}
              <motion.div
                className="relative flex w-full flex-1 cursor-pointer"
                onClick={() => handleCardFlip(index)}
                whileHover={{ scale: 1.05 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0px rgba(242, 193, 78, 0)",
                    "0 0 0 4px rgba(242, 193, 78, 0.5)",
                    "0 0 0 0px rgba(242, 193, 78, 0)"
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                style={{ height: '16rem', minHeight: '16rem' }}
              >
                <AnimatePresence mode="wait">
                  {!flippedCards.includes(index) ? (
                    <motion.div
                      key="front"
                      className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl p-4 sm:p-6"
                      initial={{ rotateY: 0 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: 90 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: "linear-gradient(145deg, #1B3B6F, #0F2557)",
                        border: "1px solid rgba(106, 147, 101, 0.3)"
                      }}
                    >
                      <div className="text-[#F2C14E]">{round.icon}</div>
                      <div 
                        className="mt-3 sm:mt-4 px-3 sm:px-4 py-2 sm:py-3 rounded-lg w-full"
                        style={{
                          background: "rgba(242, 193, 78, 0.2)",
                          backdropFilter: "blur(8px)",
                          border: "1px solid rgba(242, 193, 78, 0.3)"
                        }}
                      >
                        <h3 className="font-orbitron text-center text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#F8F5E4]">
                          {round.title}
                        </h3>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="back"
                      className="absolute inset-0 flex flex-col justify-between rounded-2xl p-4 sm:p-6"
                      initial={{ rotateY: 90 }}
                      animate={{ rotateY: 0 }}
                      exit={{ rotateY: 0 }}
                      transition={{ duration: 0.3 }}
                      style={{
                        background: "linear-gradient(145deg, #1B3B6F, #0F2557)",
                        border: "1px solid rgba(106, 147, 101, 0.3)"
                      }}
                    >
                      <div>
                        <div 
                          className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg mb-3 sm:mb-4 w-full"
                          style={{
                            background: "rgba(242, 193, 78, 0.2)",
                            backdropFilter: "blur(8px)",
                            border: "1px solid rgba(242, 193, 78, 0.3)"
                          }}
                        >
                          <h3 className="font-orbitron text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#F8F5E4]">
                            {round.title}
                          </h3>
                        </div>
                        <div className="flex items-center justify-center gap-3 sm:gap-4 text-[#F2A1A1]">
                          <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#F2A1A1]" />
                          <span className="text-xs sm:text-sm md:text-base">{round.time}</span>
                        </div>
                        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-[#F8F5E4]">
                          {round.description}
                        </p>
                      </div>
                      <motion.button
                        className="w-full rounded-full bg-gradient-to-r from-[#F2C14E] to-[#F2A1A1] px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#1B3B6F] transition-all duration-300 hover:scale-105 md:w-auto"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 15px rgba(242, 161, 161, 0.6)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleShowMore(index);
                        }}
                      >
                        Show More
                      </motion.button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {popupVisible && selectedRound && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#1B3B6F]/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative flex w-full max-w-2xl flex-col rounded-2xl p-4 sm:p-6 md:p-8"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                boxShadow: [
                  "0 0 0 0px rgba(242, 193, 78, 0)",
                  "0 0 0 4px rgba(242, 193, 78, 0.5)",
                  "0 0 0 0px rgba(242, 193, 78, 0)"
                ]
              }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ 
                type: "spring", 
                damping: 20, 
                stiffness: 300,
                boxShadow: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }
              }}
              style={{
                background: "rgba(27, 59, 111, 0.92)",
                backdropFilter: "blur(8px)",
                border: "2px solid rgba(242, 193, 78, 0.5)"
              }}
            >
              <div className="flex items-start justify-between">
                <div>
                  <div 
                    className="px-3 sm:px-4 py-2 sm:py-3 rounded-lg md:px-6"
                    style={{
                      background: "rgba(242, 193, 78, 0.3)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(242, 193, 78, 0.5)"
                    }}
                  >
                    <h3 className="font-orbitron text-lg sm:text-xl md:text-2xl font-bold uppercase text-[#F2C14E]">
                      {selectedRound.title}
                    </h3>
                  </div>
                  <div className="mt-1 sm:mt-2 flex items-center gap-2 text-[#F2A1A1]">
                    <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-[#F2A1A1]" />
                    <span className="text-xs sm:text-sm md:text-base">{selectedRound.time}</span>
                  </div>
                </div>
              </div>

              <div className="mt-3 sm:mt-4 max-h-[60vh] overflow-y-auto md:mt-6">
                <p className="text-xs sm:text-sm md:text-base text-[#F8F5E4]">
                  {selectedRound.furtherDetails}
                </p>
              </div>

              <motion.button
                className="mt-3 sm:mt-4 self-end rounded-full bg-gradient-to-r from-[#F2C14E] to-[#F2A1A1] px-3 sm:px-4 py-2 text-xs sm:text-sm font-bold text-[#1B3B6F] transition-all hover:scale-105 md:mt-6"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 15px rgba(242, 161, 161, 0.6)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={handleClosePopup}
              >
                Close
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default EventPage;