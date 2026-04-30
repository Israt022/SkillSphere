import { FaBookOpen, FaClock, FaLightbulb } from "react-icons/fa";

const LearningSection = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-3">Learning Tips</h2>

      <p className="text-center text-gray-500 mb-10">
        Boost your learning efficiency with proven study techniques and smart
        time management.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Card 1 */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <FaBookOpen className="text-indigo-500 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Active Learning</h3>
          <p className="text-gray-600 text-sm">
            Engage with the material by taking notes, asking questions, and
            practicing regularly instead of passive reading.
          </p>
        </div>

        {/* Card 2 */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <FaClock className="text-indigo-500 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Time Management</h3>
          <p className="text-gray-600 text-sm">
            Use techniques like Pomodoro (25 min focus + 5 min break) to stay
            productive and avoid burnout.
          </p>
        </div>

        {/* Card 3 */}
        <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
          <FaLightbulb className="text-indigo-500 text-3xl mb-4" />
          <h3 className="text-xl font-semibold mb-2">Consistency is Key</h3>
          <p className="text-gray-600 text-sm">
            Study a little every day instead of cramming. Small consistent
            efforts lead to long-term success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LearningSection;
