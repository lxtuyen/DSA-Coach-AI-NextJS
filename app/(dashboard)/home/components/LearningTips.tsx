const LearningTips = () => {
    return (
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                💡 AI Tips
              </h3>
              <div className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Master the basics:</strong> Focus on understanding array operations before moving to complex data structures.
                  </p>
                </div>
                <div className="p-3 bg-purple-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Practice daily:</strong> Consistency is key. Try to solve at least 1 problem every day.
                  </p>
                </div>
                <div className="p-3 bg-green-50 rounded-xl">
                  <p className="text-sm text-gray-700">
                    <strong>Time yourself:</strong> Set a timer to simulate interview conditions.
                  </p>
                </div>
              </div>
            </div>
    );
};

export default LearningTips;