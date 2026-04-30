const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4">
      
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-indigo-600"></span>

      {/* Text */}
      <p className="text-gray-500 text-sm">
        Loading SkillSphere...
      </p>

    </div>
  );
};

export default Loading;