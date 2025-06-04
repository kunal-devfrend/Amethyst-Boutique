"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const services = [
  {
    title: "Hair Styling & Blowouts",
    description:
      "From bouncy blowouts to elegant updos, our expert stylists create looks that turn heads and boost confidence.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/fff2c178-34f1-4183-af52-7977d9426d44/1amethystb-81.jpg?format=1500w",
  },
  {
    title: "Color & Highlights",
    description:
      "Whether you’re going bold or just brightening things up, we offer personalized color services using premium products.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/8ce3fd5d-570d-4f3c-ac36-9e24df552aee/IMG_3601.jpg?format=500w",
  },
  {
    title: "Luxury Treatments",
    description:
      "Treat your hair to nourishing deep-conditioning rituals, keratin smoothing, or rejuvenating scalp therapy.",
    image:
      "https://images.squarespace-cdn.com/content/v1/65133096b0601610ce025f7d/a06b8e9e-4532-4c91-bd82-8eaf0d7fa8ae/AmethystBoutiqueJelena4.jpg?format=1500w",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 px-6 md:px-20">
      {/* Background Image with Blur and Light Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://png.pngtree.com/back_origin_pic/03/89/68/6e017bae989cad77922fd8260fda6e83.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="blur-sm brightness-90"
        />
        <div className="absolute inset-0  bg-opacity-30 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-14 font-serif text-purple-800"
        >
          Our Signature Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              className="bg-purple-50/70 border border-purple-200 rounded-xl shadow-xl overflow-hidden backdrop-blur-md hover:scale-105 transition-transform"
            >
              <div className="h-56 w-full relative">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-xl"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-purple-800">
                  {service.title}
                </h3>
                <p className="text-base text-purple-700">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
