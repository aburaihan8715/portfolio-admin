import CategoryList from '@/components/home/category/CategoryList';
import FlashSaleList from '@/components/home/flashSale/FlashSaleList';
import ProductList from '@/components/home/products/ProductList';
import { useGetAllProductsQuery } from '@/redux/api/productApi';

const HomePage = () => {
  const { data } = useGetAllProductsQuery({});
  const products = data?.data?.result || [];
  console.log(products);
  return (
    <>
      <CategoryList />
      <FlashSaleList />
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
