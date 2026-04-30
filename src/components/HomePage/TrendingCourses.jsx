"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";

import { Autoplay } from "swiper/modules";
import Image from "next/image";

const TrendingCourses = ({ courses }) => {
  return (
    <div className="max-w-7xl mx-auto py-10">

      <h2 className="text-3xl font-bold text-center mb-6">
         Trending Courses
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        speed={800}  
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
      >
        {courses.map((course) => (
          <SwiperSlide key={course.id}>
            <div className="border p-4 rounded-xl shadow bg-white">

              <div className="w-full h-52 relative rounded-lg overflow-hidden">
                <Image
                  src={course?.image}
                  alt={course?.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="font-bold mt-3">{course?.title}</h3>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  );
};

export default TrendingCourses;