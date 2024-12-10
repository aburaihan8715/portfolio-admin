import CategoryList from '@/components/home/category/CategoryList';
import FlashSaleList from '@/components/home/flashSale/FlashSaleList';
import ProductList from '@/components/home/products/ProductList';

const HomePage = () => {
  return (
    <>
      <CategoryList />
      <FlashSaleList />
      <ProductList />
    </>
  );
};

export default HomePage;
