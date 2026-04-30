import Link from "next/link";
import bgBanner from "@/assets/bg-banner.svg";
import BannerImg from "@/assets/bannerRight.jpg";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgBanner.src})` }}
      className="bg-cover bg-center bg-no-repeat min-h-[80vh] w-full flex items-center"
    >
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10 py-24">
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold animate-pulse">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">Upgrade Your Skills Today</span> 🚀
          </h1>

          <p className="mt-4 text-lg text-gray-200">
            Learn from Industry Experts and build your future with modern
            skill-based courses.
          </p>

          <div className="mt-6 flex gap-4">
            <Link
              href="/courses"
              className="bg-white text-indigo-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition"
            >
              Browse Courses
            </Link>

            <Link
              href="/register"
              className="border border-white text-white  px-6 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition"
            >
              Get Started
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1">
          <Image
            src={BannerImg}
            alt="Banner-right-image"
            width={500}
            height={400}
            className="rounded-lg shadow-lg animate-pulse"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
