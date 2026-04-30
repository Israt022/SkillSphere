import CourseCards from '@/components/cards/CourseCards';
import { getCourses } from '@/lib/courses';
import React from 'react';

const Courses = async() => {
    const courses = await getCourses();
    // console.log("Courses ",courses);
    return (
        <div className='container mx-auto pt-20'>
            <h1 className="text-4xl text-center my-2 font-bold bg-gradient-to-r from-indigo-500 via-purple-400 to-blue-400 text-transparent bg-clip-text">
                All Courses
            </h1>
            <div className="grid lg:grid-cols-3 gap-6 items-center">
                {courses.map((course,index) => (
                    <CourseCards
                        key={course.id} 
                        course={course} 
                        // isHighlighted={index === 1}
                    />))}
            </div>
        </div>
    );
};

export default Courses;