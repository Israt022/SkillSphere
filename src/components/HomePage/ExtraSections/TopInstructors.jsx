import Image from "next/image";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    expertise: "Web Development",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1758875569897-5e214ccc4e17?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW5zdHJ1Y3RvciUyMGltYWdlJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    id: 2,
    name: "Sarah Khan",
    expertise: "UI/UX Design",
    rating: 4.9,
    image: "https://plus.unsplash.com/premium_photo-1661678444361-9df32f1e25a4?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5zdHJ1Y3RvciUyMGltYWdlJTIwd29tYW58ZW58MHx8MHx8fDA%3D",
  },
  {
    id: 3,
    name: "Michael Lee",
    expertise: "Digital Marketing",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1583692331501-5339b76cbf1e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlJTIwbWFufGVufDB8fDB8fHww",
  },
  {
    id: 4,
    name: "Ayesha Rahman",
    expertise: "Data Science",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1580894732930-0babd100d356?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluc3RydWN0b3IlMjBpbWFnZSUyMHdvbWFufGVufDB8fDB8fHww",
  },
];

const TopInstructors = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-3">
        🏆 Top Instructors
      </h2>

      <p className="text-center text-gray-500 mb-10">
        Learn from industry experts who are passionate about teaching and guiding students.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">

        {instructors.map((ins) => (
          <div
            key={ins.id}
            className="border rounded-xl p-5 text-center shadow-sm hover:shadow-lg hover:scale-105 transition duration-300"
          >
            <div className="w-28 h-28 mx-auto relative">
                <Image
                    src={ins.image}
                    alt={ins.name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>

            <h3 className="mt-4 text-lg font-semibold">
              {ins.name}
            </h3>

            <p className="text-sm text-gray-500">
              {ins.expertise}
            </p>

            <p className="text-yellow-500 mt-2">
              ⭐ {ins.rating}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default TopInstructors;