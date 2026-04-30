// 'use client'

import { getCourses } from "@/lib/courses";
import { Card } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaChalkboardTeacher, FaStar } from "react-icons/fa";
import { HiOutlineClock } from "react-icons/hi";
import { SiLevelsdotfyi } from "react-icons/si";
import { TbCategory } from "react-icons/tb";

// import { useParams } from 'next/navigation';

const CourseDetails = async({params}) => {
    const {id} = await params;
    const courses = await getCourses();
    const course = courses.find(c => c.id == id)
    console.log(course,'COurse id');
    return (
        <div className='container mx-auto pt-30 pb-10'>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                {/* Detail section */}
                <div className="lg:col-span-4 h-full">
                    <Card className="shadow-sm px-6 space-y-2 py-5">
                        <h3 className="text-2xl font-semibold my-5">Course Details</h3>
                        <hr className="border-0 h-[2px] bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-400 " />
                        <p>
                            Description : <span className="text-xl text-gray-700">{course.description}</span>
                        </p>
                        <div className="space-y-4">
                            
                            <p className="text-lg flex gap-2">
                                Instructor : <span className="font-bold flex items-center gap-2"><FaChalkboardTeacher className="text-indigo-500" />{course.instructor}</span>
                            </p>
                            <p className="text-lg flex gap-2">
                                Category : <span className="font-bold flex items-center gap-2"><TbCategory className="text-indigo-500" /> {course.category}</span>
                            </p>
                            <p className="text-lg flex gap-2">
                                Duration : <span className="font-bold flex items-center gap-2"><HiOutlineClock className="text-indigo-500" /> {course.duration}</span>
                            </p>
                            <p className="text-lg flex gap-2">
                                Level : <span className="font-bold flex items-center gap-2"><SiLevelsdotfyi className="text-indigo-500" />{course.level}</span> 
                            </p>
                            <p className="flex text-lg gap-2">
                                Rating : <span className="flex items-center gap-2 text-yellow-500 font-bold"><FaStar/> {course.rating}</span>
                            </p>
                        </div>

                        <Link
                            href={`/courses/${course.id}`}
                            className="inline-block mt-3 text-white px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-400 text-center"
                        >
                            Enroll Now
                        </Link>
                    </Card>
                </div>
                {/* Image section */}
                <div className="lg:col-span-8">
                    <Card className="shadow-sm p-15">
                        <h1 className="text-4xl font-semibold my-2">
                            {course.title}
                        </h1>
                        <Image
                            src={course?.image}
                            alt={course?.title}
                            // fill
                            // sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
                            width={500}
                            height={400}
                            className="object-cover rounded-xl w-full h-60vh"
                            />
                    </Card>
                </div>
                
            </div>
        </div>
    );
};

export default CourseDetails;