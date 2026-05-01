import CourseCards from '@/components/cards/CourseCards';
import SearchFieldSection from '@/components/cards/SearchFieldSection';
import NoCourses from '@/components/NoCourses';
import { getCourses } from '@/lib/courses';
import React from 'react';

const Courses = async({searchParams}) => {
    const sp = await searchParams;
    const courses = await getCourses(sp.search);
    // console.log("Search ",sp);
    // console.log("Courses ",courses);
    return (
        <div className='container mx-auto pt-20'>
            <h1 className="text-4xl text-center my-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                All Courses
            </h1>
            <SearchFieldSection />
            
                { 
                    courses.length === 0 ? (<NoCourses/>)
                    : (
                    <div className="grid lg:grid-cols-3 gap-6 items-center">
                        {courses.map((course) => (
                            <CourseCards key={course?.id} course={course} />
                        ))}
                    </div>
                    )
                }
            
        </div>
    );
};

export default Courses;