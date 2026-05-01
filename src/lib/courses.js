export const getCourses = async (search) =>{
    const res = await fetch("https://skill-sphere-kohl.vercel.app/courses.json");
    // const res = await fetch("http://localhost:3000/courses.json");
    const courses = await res.json();

    if(!search) return courses;
    return courses.filter(course =>
        course.title.toLowerCase().includes(search.toLowerCase())
    );
}