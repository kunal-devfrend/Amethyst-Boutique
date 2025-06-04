"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`px-6 py-3 rounded-md text-base font-semibold ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default function Hero3() {
  const content = {
    title: "",
    subtitle: "Where Elegance Meets Style",
    description:
      "Experience premium hair and beauty services tailored for modern women. Our stylists specialize in cuts, color, and care — in a serene and chic environment.",
    background_url: "https://wallpaperaccess.com/full/2090318.jpg",
    center_image:
      "https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/8288d42e-bdcd-40d4-b286-4a56280e8d61/WELCOME+%282000+x+400+px%29+%2819%29.png?format=1000w",
    underline_image:
      "https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/e2e5beac-7a7b-4a94-b105-c60401c26dfd/Untitled+design+%2882%29.png?format=1000w",
    cta_text: "Book Your Appointment",
    cta_link: "/booking",
  };

  const {
    title,
    subtitle,
    description,
    background_url,
    center_image,
    underline_image,
    cta_text,
    cta_link,
  } = content;

  return (
    <section className="relative w-full min-h-screen py-20 px-6 md:px-12 overflow-hidden flex items-center justify-start">
      {/* Background */}
      {background_url && (
        <div className="absolute inset-0 z-0">
          <Image
            src={background_url}
            alt="Background"
            fill
            sizes="100vw"
            className="object-cover w-full h-full brightness-100"
            priority
          />
          <div className="absolute inset-0 bg-purple-900/30" /> {/* Subtle purple overlay */}
        </div>
      )}

      <div className="relative z-10 max-w-3xl text-left pl-6 md:pl-12">
        {/* Images with Overlap */}
        <div className="relative inline-block mb-10">
          {center_image && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={center_image}
                alt="Welcome Banner"
                width={1000}
                height={200}
                className="ml-0"
              />
            </motion.div>
          )}

          {underline_image && (
            <motion.div
              className="absolute left-0 bottom-0 translate-y-1/2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Image
                src={underline_image}
                alt="Underline"
                width={250}
                height={20}
                className="ml-0"
              />
            </motion.div>
          )}
        </div>

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-purple-900 mb-4">
            {title}
          </h1>
          <h2 className="text-xl md:text-2xl text-white mb-4">{subtitle}</h2>
          <p className="text-base md:text-lg text-white mb-8 max-w-2xl">
            {description}
          </p>

          {cta_text && cta_link && (
            <Link href={cta_link}>
              <Button className="bg-purple-800 text-white hover:bg-purple-900 transition shadow-md">
                {cta_text}
              </Button>
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}
