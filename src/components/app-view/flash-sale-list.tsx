import SubHeading from '@/components/ui/SubHeading';
import FlashSaleCard from './flash-sale-card';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import { IProduct } from '@/interface/product.interface';

const FlashSaleList = () => {
  const { data } = useGetAllProductsQuery({});
  const products: IProduct[] = data?.data?.result || [];
  return (
    <section className="mt-20">
      <div className="w-full px-2 mx-auto max-w-7xl sm:px-2 md:px-5 lg:px-10">
        <div className="mb-2">
          <SubHeading subHeading="Flash Sale" />
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-5">
          {products.map((product) => (
            <FlashSaleCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashSaleList;
