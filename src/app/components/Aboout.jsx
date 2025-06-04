"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const content = {
  title: "Where Elegance Meets Style",
  subtitle: "Amethyst Boutique — Your Hair, Our Passion",
  description:
    "At Amethyst Boutique, we believe your hair is your crown. Our expert stylists specialize in creating personalized looks that enhance your natural beauty and express your unique style. From precision cuts and vibrant color treatments to luxurious styling, every service is crafted with care and artistry. Step into our boutique for a pampering experience that leaves you feeling radiant and confident.",
  image_url:
    "https://thehairboutique.salon/wp-content/uploads/2022/01/home-image-1.jpeg",
  cta_text: "Discover Our Signature Services",
  cta_link: "/services",
};

const items = [
  {
    id: "value-1",
    title: "Master Stylists",
    description:
      "Our talented team stays ahead of trends, delivering expert cuts, colors, and treatments tailored just for you.",
    icon: "✂️",
  },
  {
    id: "value-2",
    title: "Luxurious Experience",
    description:
      "Enjoy a relaxing and stylish environment with premium products designed to nourish and protect your hair.",
    icon: "💆‍♀️",
  },
  {
    id: "value-3",
    title: "Happy Clients",
    description:
      "Join our community of clients who trust us to keep their hair healthy, vibrant, and beautifully styled.",
    icon: "🌟",
  },
];

export default function About2() {
  const {
    title,
    subtitle,
    description,
    image_url,
    cta_text,
    cta_link,
  } = content;

  const [showFullDesc, setShowFullDesc] = useState(false);
  const maxDescLength = 250;
  const isLongDesc = description && description.length > maxDescLength;

  const toggleDesc = () => setShowFullDesc((prev) => !prev);

  return (
    <section
      id="about"
      className="w-full bg-[#F3E8FF] text-[#4B3F72] py-12 px-6 md:px-20 flex flex-col items-center"
    >
      <motion.div
        className="max-w-7xl w-full flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        {/* Left: Text */}
        <div className="flex-1 w-full max-w-lg text-left">
          {title && (
            <h1 className="text-4xl md:text-5xl font-extrabold leading-snug mb-4 font-serif">
              {title}
            </h1>
          )}
          {subtitle && (
            <h2 className="text-xl md:text-2xl font-medium text-[#7C6BAE] mb-6">
              {subtitle}
            </h2>
          )}
          {description && (
            <p className="text-[#6B5F8B] text-base md:text-lg mb-8 leading-relaxed">
              {isLongDesc && !showFullDesc
                ? description.slice(0, maxDescLength) + "..."
                : description}
              {isLongDesc && (
                <button
                  onClick={toggleDesc}
                  className="ml-2 text-[#957DD6] underline hover:text-[#6C56A3] transition"
                  aria-label={showFullDesc ? "Read less" : "Read more"}
                >
                  {showFullDesc ? "Read less" : "Read more"}
                </button>
              )}
            </p>
          )}

          {cta_text && cta_link && (
            <Link href={cta_link}>
              <Button
                variant="default"
                size="lg"
                className="bg-[#957DD6] text-white hover:bg-[#6C56A3] transition px-8 py-4"
              >
                {cta_text}
              </Button>
            </Link>
          )}
        </div>

        {/* Right: Image */}
        {image_url && (
          <div className="flex-1 w-full h-full max-h-[650px] min-h-[500px] relative overflow-hidden rounded-3xl shadow-lg">
            <Image
              src={image_url}
              alt="Amethyst Boutique Hair Salon"
              fill
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        )}
      </motion.div>

      {/* Items section below */}
      {items && items.length > 0 && (
        <motion.div
          className="mt-20 max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.5 }}
        >
          {items.map(({ id, title, description, icon }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-8 flex flex-col items-center text-[#4B3F72] shadow-md hover:shadow-lg transition"
            >
              <div className="text-7xl mb-5">{icon}</div>
              <h3 className="text-2xl font-semibold mb-3">{title}</h3>
              <p className="text-[#6B5F8B] text-lg">{description}</p>
            </div>
          ))}
        </motion.div>
      )}
    </section>
  );
}
