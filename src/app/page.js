import PopularCourses from "@/components/HomePage/PopularCourses";
import Banner from "@/components/shared/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Banner/>
        <PopularCourses/>
      </main>
    </div>
  );
}
