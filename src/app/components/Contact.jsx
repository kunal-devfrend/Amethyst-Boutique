"use client";

import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-purple-50 text-purple-900 py-20 px-6 md:px-20 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 font-serif text-purple-800"
        >
          Get in Touch
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full p-3 border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
              ></textarea>
              <button
                type="submit"
                className="bg-purple-700 text-white px-6 py-3 rounded-md hover:bg-purple-800 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Map and Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <div className="w-full h-72 rounded-lg overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019139992265!2d-122.42067948468152!3d37.77492977975859!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c1c89e93f%3A0xdeb0cbabf92659a!2sHair%20Salon!5e0!3m2!1sen!2sin!4v1651418035196!5m2!1sen!2sin"
                width="100%"
                height="100%"
                allowFullScreen=""
                loading="lazy"
                className="border-0 w-full h-full"
              ></iframe>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-purple-800">
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
