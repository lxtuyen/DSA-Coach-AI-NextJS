import { Play } from "lucide-react";

const ResultEmpty = () => {
  return (
    <div className="px-6 py-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 bg-[#1a1f2e] rounded-full flex items-center justify-center">
        <Play className="w-6 h-6 text-gray-500" />
      </div>
      <p className="text-sm text-gray-500">
        You must run your code first
      </p>
    </div>
  );
};

export default ResultEmpty;
