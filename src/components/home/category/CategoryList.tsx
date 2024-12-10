import CategoryCard from './CategoryCard';

const CategoryList = () => {
  return (
    <section className="mt-10">
      <div className="w-full px-2 mx-auto max-w-7xl sm:px-2 md:px-5 lg:px-10">
        <h4>Category</h4>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
          <CategoryCard />
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
