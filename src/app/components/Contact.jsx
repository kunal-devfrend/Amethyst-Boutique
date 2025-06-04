"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-[#F3E8FF] text-gray-900 py-5 px-6 md:px-20 font-[Playfair Display]"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          
          <h2 className="text-5xl font-extrabold text-[#6C56A3] mb-4">
            Get in Touch
          </h2>
          <p className="text-gray-700 max-w-xl mx-auto">
            Whether it's a question, feedback, or booking a session — we'd love to hear from you.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <h3 className="text-2xl font-semibold text-[#6C56A3] mb-6">
              Send us a Message
            </h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-[#E0D4F7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C56A3]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-[#E0D4F7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C56A3]"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-[#E0D4F7] rounded-md focus:outline-none focus:ring-2 focus:ring-[#6C56A3]"
              ></textarea>
              <button
                type="submit"
                className="bg-[#6C56A3] text-white px-6 py-3 rounded-md hover:bg-white hover:text-[#6C56A3] border border-[#6C56A3] transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map & Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="w-full h-72 rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019139992265!2d-122.42067948468152!3d37.77492977975859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1c89e93f%3A0xdeb0cbabf92659a!2sHair%20Salon!5e0!3m2!1sen!2sin!4v1651418035196!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-[#6C56A3]">
              <h4 className="text-xl font-semibold mb-2">Amethyst Boutique Hair Salon</h4>
              <p>123 Blossom Street, Downtown City</p>
              <p className="mt-2">
                <strong>Phone:</strong> (123) 456-7890
              </p>
              <p>
                <strong>Email:</strong> hello@amethystsalon.com
              </p>
              <p>
                <strong>Hours:</strong> Mon–Sat: 10am – 7pm
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
