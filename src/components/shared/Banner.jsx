"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import bgBanner from "@/assets/bg-banner.svg";
import BannerImg from "@/assets/bannerRight.jpg";
import Link from "next/link";

const Banner = () => {
  return (
    <div
      className="min-h-[80vh] flex items-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgBanner.src})`,
      }}
    >
      {/* overlay */}
      <div className="w-full bg-black/60 py-36">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">

          {/* Left Content */}
          <div className="flex-1 text-center md:text-left space-y-5">

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold text-white"
            >
              𝓢𝓴𝓲𝓵𝓵𝓢𝓹𝓱𝓮𝓻𝓮
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-gray-200 text-lg"
            >
              Upgrade Your Skills Today 🚀 
              Learn from industry experts and become job-ready.
            </motion.p>

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/courses"
                className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-full font-semibold transition"
              >
                Explore Courses
              </Link>
            </motion.div>

          </div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 flex justify-center"
          >
            <Image
              src={BannerImg}
              alt="banner image"
              width={500}
              height={400}
              className="rounded-xl shadow-xl"
            />
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Banner;