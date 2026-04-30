export const getCourses = async () =>{
    const res = await fetch("https://skill-sphere-kohl.vercel.app/courses.json");
    // const res = await fetch("http://localhost:3000/courses.json");
    const courses = await res.json();
    return courses;
}