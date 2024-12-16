import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

type TFilterBarProps = {
  searchDebounce: (query: string) => void;
  minCapacityDebounce: (query: number) => void;
  maxPriceDebounce: (query: number) => void;
  setSortByPrice: (query: string) => void;
  handleClearFilter: () => void;
  sortByPrice: string;
};

const FilterBar = ({
  searchDebounce,
  minCapacityDebounce,
  maxPriceDebounce,
  setSortByPrice,
  sortByPrice,
  handleClearFilter,
}: TFilterBarProps) => {
  return (
    <section>
      <div className="grid w-1/2 grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="">
          <Input
            type="search"
            name="search"
            id="search"
            onChange={(e) => searchDebounce(e.target.value)}
            placeholder="Search by room name..."
          />
        </div>

        <div className="">
          <Input
            onChange={(e) => maxPriceDebounce(Number(e.target.value))}
            type="number"
            name="price"
            id="price"
            placeholder="Max Price"
          />
        </div>

        <div className="f">
          <Input
            onChange={(e) => minCapacityDebounce(Number(e.target.value))}
            type="number"
            name="capacity"
            id="capacity"
            placeholder="Min Capacity"
          />
        </div>

        <div className="">
          <select
            onChange={(e) => setSortByPrice(e.target.value)}
            defaultValue={sortByPrice}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <option value="">Sort By Price</option>
            <option value="pricePerSlot">Price: Low to High</option>
            <option value="-pricePerSlot">Price: High to Low</option>
          </select>
        </div>

        <div>
          <Button onClick={handleClearFilter} className="w-full md:w-auto">
            Clear filter
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FilterBar;
