import { Card } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaStar } from 'react-icons/fa';

const CourseCards = ({course,isHighlighted}) => {
    // const isMiddle = index === 1;
    return (
        <Card
            className={`border rounded-lg  shadow-sm transition delay-200 cursor-pointer
            ${
            isHighlighted
                ? "scale-100 shadow-lg z-10 hover:scale-105 bg-gradient-to-b from-indigo-500/50 via-purple-400 to-blue-400/50 text-white"
                : "scale-95 opacity-90 hover:scale-105"
            }
        `}
          >
            <div>
                <Image
                    src={course?.image}
                    alt={course?.title}
                    // fill
                    // sizes='(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 33vw'
                    width={500}
                    height={400}
                    className="object-cover rounded-xl w-full h-60"
                    />
            </div>

            <div className="p-4">
              <h3 className="text-lg font-semibold">{course.title}</h3>

              <p className="text-sm text-gray-600">{course.instructor}</p>

              <p className="text-yellow-500 mt-1 font-semibold flex items-center gap-2"><FaStar className='' /> {course.rating}</p>

              <Link
                href={`/courses/${course.id}`}
                className="inline-block mt-3 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
              >
                View Details
              </Link>
            </div>
          </Card>
    );
};

export default CourseCards;