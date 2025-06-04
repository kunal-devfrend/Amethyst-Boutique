"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

// === Testimonial Data ===
const testimonialData = {
  content: {
    title: "Testimonials",
    subtitle: "What Our Clients Are Saying",
    description:
      "Our salon guests leave with more than just great hair — they leave with confidence, smiles, and unforgettable experiences. Hear their stories.",
  },
  items: [
    {
      title: "Simran Kaur",
      subtitle: "Entrepreneur",
      description:
        "Every visit is such a treat! The ambiance, the stylists, everything feels personalized. I feel transformed every time.",
      image_url:
        "https://randomuser.me/api/portraits/women/32.jpg",
      rating: 5,
    },
    {
      title: "Meera Joshi",
      subtitle: "Photographer",
      description:
        "I travel a lot but always make time for my appointment here. They understand style, and I trust them completely.",
      image_url:
        "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 4,
    },
    {
      title: "Ritika Nair",
      subtitle: "Digital Marketer",
      description:
        "Amethyst Boutique is my go-to place for a pamper session. Their facials and spa treatments are the best!",
      image_url:
        "https://randomuser.me/api/portraits/women/55.jpg",
      rating: 5,
    },
  ],
};

// === Testimonials Component ===
export default function Testimonials() {
  const { content, items } = testimonialData;

  if (!content || !items || items.length === 0) return null;

  const { title, subtitle, description } = content;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const autoSlideInterval = useRef();

  useEffect(() => {
    startAutoSlide();
    return () => clearInterval(autoSlideInterval.current);
  }, []);

  const resetAutoSlide = () => {
    clearInterval(autoSlideInterval.current);
    startAutoSlide();
  };

  const startAutoSlide = () => {
    autoSlideInterval.current = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const prevSlide = () => {
    resetAutoSlide();
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    resetAutoSlide();
    setDirection(1);
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };

  const {
    title: userTitle,
    subtitle: userSubtitle,
    description: userDescription,
    image_url,
    rating,
  } = items[currentIndex];

  return (
    <section className="w-full bg-[#F3E8FF] text-gray-900 py-5 px-6 md:px-20 relative overflow-hidden select-none">
      {/* Header */}
      <motion.div
        className="max-w-4xl mx-auto text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        
        <h2 className="text-5xl font-extrabold text-[#6C56A3] mb-4">{title}</h2>
        <p className="text-gray-700 max-w-xl mx-auto">{description}</p>
      </motion.div>

      {/* Slider */}
      <div className="max-w-2xl mx-auto relative h-[360px] flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.25 },
            }}
            className="flex flex-col items-center text-center px-6 absolute top-0 left-0 right-0"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden mb-5 border-4 border-[#6C56A3] shadow-lg">
              <Image
                src={image_url}
                alt={userTitle}
                width={96}
                height={96}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>

            <p className="text-yellow-500 mb-3 text-lg tracking-wide">
              {"★".repeat(rating)}
              {"☆".repeat(5 - rating)}
            </p>

            <h3 className="text-2xl font-semibold text-[#6C56A3] mb-1">{userTitle}</h3>
            <p className="text-[#6C56A3] text-base mb-4">{userSubtitle}</p>
            <p className="text-gray-700 max-w-lg leading-relaxed">{userDescription}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <button
        aria-label="Previous testimonial"
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 cursor-pointer text-white bg-[#6C56A3] p-3 rounded-full hover:bg-white hover:text-[#6C56A3] transition shadow-lg"
      >
        <ArrowLeft size={24} />
      </button>
      <button
        aria-label="Next testimonial"
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 cursor-pointer text-white bg-[#6C56A3] p-3 rounded-full hover:bg-white hover:text-[#6C56A3] transition shadow-lg"
      >
        <ArrowRight size={24} />
      </button>
    </section>
  );
}