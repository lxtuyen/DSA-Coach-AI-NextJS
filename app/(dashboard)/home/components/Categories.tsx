interface CategoriesProps {
  categories: { name: string; count: number }[];
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Categories = ({ categories, selectedCategory, setSelectedCategory }: CategoriesProps) => {
  return (
    <div className="flex gap-2 overflow-x-auto pb-2">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2.5 backdrop-blur-lg rounded-xl text-sm whitespace-nowrap transition-all border flex items-center gap-2 shrink-0 ${selectedCategory === null
            ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-lg shadow-purple-200"
            : "bg-white/80 border-gray-200 hover:bg-white hover:shadow-md"
          }`}
      >
        <span className="font-medium">All</span>
        <span
          className={`text-xs px-2 py-0.5 rounded-full font-semibold ${selectedCategory === null
              ? "bg-white/20 text-white"
              : "bg-purple-100 text-purple-700"
            }`}
        >
          {categories.reduce((sum, cat) => sum + cat.count, 0)}
        </span>
      </button>
      {categories.map((cat) => (
        <button
          key={cat.name}
          onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
          className={`px-4 py-2.5 backdrop-blur-lg rounded-xl text-sm whitespace-nowrap transition-all border flex items-center gap-2 shrink-0 ${selectedCategory === cat.name
              ? "bg-linear-to-r from-purple-600 to-indigo-600 text-white border-transparent shadow-lg shadow-purple-200"
              : "bg-white/80 border-gray-200 hover:bg-white hover:shadow-md"
            }`}
        >
          <span className={`font-medium ${selectedCategory === cat.name ? "text-white" : "text-gray-700"}`}>
            {cat.name}
          </span>
          <span
            className={`text-xs px-2 py-0.5 rounded-full font-semibold ${selectedCategory === cat.name
                ? "bg-white/20 text-white"
                : "bg-purple-100 text-purple-700"
              }`}
          >
            {cat.count}
          </span>
        </button>
      ))}
    </div>
  );
};

export default Categories;