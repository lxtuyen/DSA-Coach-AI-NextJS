const DailyStreak = () => {
    return (
        <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg p-5 mb-4">
              <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                🔥 Daily Streak
              </h3>
              <div className="text-center mb-4">
                <div className="text-4xl font-bold bg-linear-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-sm text-gray-600">days in a row</div>
              </div>
              <div className="grid grid-cols-7 gap-2">
                {['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((day, i) => (
                  <div key={i} className="text-center">
                    <div className="text-xs text-gray-500 mb-1">{day}</div>
                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center text-xs font-bold ${
                      i < 3 ? 'bg-linear-to-br from-orange-400 to-red-400 text-white' : 'bg-gray-100 text-gray-400'
                    }`}>
                      {i + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
    );
};

export default DailyStreak;