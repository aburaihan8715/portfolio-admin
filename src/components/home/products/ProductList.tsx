import { useState } from 'react';
import FilterBar from './FilterBar';
import ProductCard from './ProductCard';
import { useDebouncedCallback } from 'use-debounce';

const ProductList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterByMinCapacity, setFilterByMinCapacity] = useState('');
  const [filterByMaxPrice, setFilterByMaxPrice] = useState('');
  const [sortByPrice, setSortByPrice] = useState('');

  const searchDebounce = useDebouncedCallback((value) => {
    setSearchQuery(value);
  }, 1000);
  const minCapacityDebounce = useDebouncedCallback((value) => {
    setFilterByMinCapacity(value);
  }, 1000);
  const maxPriceDebounce = useDebouncedCallback((value) => {
    setFilterByMaxPrice(value);
  }, 1000);

  const handleClearFilter = () => {
    setSearchQuery('');
    setFilterByMinCapacity('');
    setFilterByMaxPrice('');
    setSortByPrice('');
  };

  console.log(searchQuery);
  console.log(filterByMinCapacity);
  console.log(filterByMaxPrice);

  return (
    <section>
      <div className="w-full px-2 mx-auto max-w-7xl sm:px-2 md:px-5 lg:px-10">
        <h4>All Products</h4>
        <FilterBar
          searchDebounce={searchDebounce}
          minCapacityDebounce={minCapacityDebounce}
          maxPriceDebounce={maxPriceDebounce}
          setSortByPrice={setSortByPrice}
          handleClearFilter={handleClearFilter}
          sortByPrice={sortByPrice}
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default ProductList;
