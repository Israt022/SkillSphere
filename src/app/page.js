import LearningSection from "@/components/HomePage/ExtraSections/LearningSection";
import TopInstructors from "@/components/HomePage/ExtraSections/TopInstructors";
import PopularCourses from "@/components/HomePage/PopularCourses";
import TrendingCourses from "@/components/HomePage/TrendingCourses";
import Banner from "@/components/shared/Banner";
import { getCourses } from "@/lib/courses";
import Image from "next/image";

export default async function Home() {
  const courses = await getCourses()
  return (
    <div>
      <main>
        <Banner/>
        <PopularCourses/>
        <LearningSection/>
        <TopInstructors/>
        <TrendingCourses key={courses.id} courses={courses} />
      </main>
    </div>
  );
}
