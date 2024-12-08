const categories = [
  { name: "Phones", icon: "📱" },
  { name: "Computers", icon: "💻" },
  { name: "SmartWatch", icon: "⌚" },
  { name: "Camera", icon: "📷" },
  { name: "HeadPhones", icon: "🎧" },
  { name: "Gaming", icon: "🎮" },
];

const CategoriesSection = () => {
  return (
    <section className="py-16 flex">
      <div className="max-w-7xl mx-auto px-4  tex-sm border">
        <h2 className="text-red-500 font-semibold text-lg">Categories</h2>
        <h3 className="text-3xl font-bold mb-8">Browse By Category</h3>
        <div className="flex gap-5 ">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center border border-gray-300 rounded-lg w-[200px] p-6 cursor-pointer hover:bg-red-500 transition-colors duration-300"
            >
              <span className="text-4xl group-hover:text-white mb-4">
                {category.icon}
              </span>
              <p className="text-lg font-medium group-hover:text-white">
                {category.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
