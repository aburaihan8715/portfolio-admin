import CategoryList from '@/components/app-view/category-list';
import FlashSaleList from '@/components/app-view/flash-sale-list';
import ProductList from '@/components/app-view/product-list';
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
