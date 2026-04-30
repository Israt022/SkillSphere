import { getCourses } from "@/lib/courses";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CourseCards from "../cards/CourseCards";

const PopularCourses = async () => {
  const courses = await getCourses()
  const topCourses = courses.sort((a, b) => b.rating - a.rating).slice(0, 3);

//   console.log("Top Courser ->", topCourses);
  return (
    <div className="w-8/12 lg:w-7xl mx-auto mt-10">
      <h1 className="text-4xl text-center my-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
        Popular Courses
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Discover our highest-rated courses designed to boost your skills and
        career growth.
      </p>

      {/* Card Section */}
      <div className="grid lg:grid-cols-3 gap-6 items-center">
        {topCourses.map((course,index) => (
            <CourseCards 
                key={course.id} 
                course={course} 
                isHighlighted={index === 1}
            />))}
      </div>
    </div>
  );
};

export default PopularCourses;

{/* <div
            key={course.id}
            className={`border rounded-lg  shadow-sm transition 
        ${index === 1 ? "scale-100 shadow-lg z-10 hover:scale-105" : "scale-95 opacity-90 hover:scale-105"}
      `}
          ></div> */}