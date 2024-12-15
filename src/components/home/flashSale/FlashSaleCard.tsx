import { IProduct } from '@/interface/product.interface';
import ProductCard from '../products/ProductCard';

const FlashSaleCard = ({ product }: { product: IProduct }) => {
  return <ProductCard product={product} />;
};

export default FlashSaleCard;
