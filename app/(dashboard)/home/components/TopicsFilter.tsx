interface TopicsFilterProps {
  topics: { name: string; icon: string }[];
  selectedTopic: string;
  setSelectedTopic: (topic: string) => void;
}

export default function TopicsFilter({
  topics,
  selectedTopic,
  setSelectedTopic,
}: TopicsFilterProps) {
  return (
    <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-lg mb-6">
      <div className="flex items-center gap-3 p-4 border-b border-gray-200 overflow-x-auto">
        {topics.map((topic) => (
          <button
            key={topic.name}
            onClick={() => setSelectedTopic(topic.name)}
            className={`px-5 py-2.5 rounded-xl text-sm whitespace-nowrap transition-all font-medium ${
              selectedTopic === topic.name
                ? "bg-linear-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="mr-2">{topic.icon}</span>
            {topic.name}
          </button>
        ))}
      </div>
    </div>
  );
}
