interface CategoriesProps {
    categories: { name: string; count: number }[];
}

const Categories = ({ categories }: CategoriesProps) => {
    return (
        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              className="px-4 py-2 bg-white/80 backdrop-blur-lg rounded-xl text-sm whitespace-nowrap hover:bg-white hover:shadow-md transition-all border border-gray-200 flex items-center gap-2"
            >
              <span className="font-medium text-gray-700">{cat.name}</span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full font-semibold">
                {cat.count}
              </span>
            </button>
          ))}
        </div>
    );
};

export default Categories;