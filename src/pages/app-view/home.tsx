import CategoryList from '@/components/app-view/category-list';
import FlashSaleList from '@/components/app-view/flash-sale-list';
import ProductList from '@/components/app-view/product-list';
import { useGetAllProductsQuery } from '@/redux/api/productApi';
import { useLocation } from 'react-router';

const HomePage = () => {
  const { data } = useGetAllProductsQuery({});
  const products = data?.data?.result || [];
  const location = useLocation();
  console.log(location.pathname);

  return (
    <>
      <CategoryList />
      <FlashSaleList />
      <ProductList products={products} />
    </>
  );
};

export default HomePage;
