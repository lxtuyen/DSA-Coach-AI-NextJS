const ResultRunning = () => {
  return (
    <div className="px-6 py-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1f2e] rounded-full flex items-center justify-center">
        <div className="w-6 h-6 border-2 border-cyan-500 border-t-transparent rounded-full animate-spin" />
      </div>

      <p className="text-sm text-gray-400">Running tests...</p>
      <p className="text-xs text-gray-600 mt-2">
        Executing test cases
      </p>
    </div>
  );
};

export default ResultRunning;
