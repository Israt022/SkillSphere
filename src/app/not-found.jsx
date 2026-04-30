import Link from "next/link";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      {/* Big Error Code */}
      <h1 className="text-7xl font-bold text-indigo-600">404</h1>

      {/* Message */}
      <h2 className="mt-4 text-2xl font-semibold text-gray-800">
        Oops! Page not found
      </h2>

      <p className="mt-2 text-gray-500 max-w-md">
        The page you are looking for doesn’t exist or has been moved. Let’s get
        you back to learning something amazing 🚀
      </p>

      {/* Button */}
      <Link
        href="/"
        className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFound;
