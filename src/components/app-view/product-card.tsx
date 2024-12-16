import { Link } from 'react-router';
import defaultProductImage from '@/assets/images/default_product.jpg';
import { IProduct } from '@/interface/product.interface';

const ProductCard = ({ product }: { product: IProduct }) => {
  const images = product?.images || [];
  const coverImage = images.length > 0 && images[0];
  return (
    <div className="group relative overflow-hidden rounded-lg bg-white shadow-md">
      <div className="aspect-[16/9]">
        {/* Set the aspect ratio here */}
        <img
          src={coverImage || defaultProductImage}
          alt="product"
          className="h-full w-full rounded object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Link
          to={`/product-details/${product?._id}`}
          className="rounded-md bg-green-900 px-4 py-2 text-sm font-medium text-white hover:bg-green-800"
        >
          See Details
        </Link>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {product?.name}
        </h3>
        <p className="mb-1 text-sm text-gray-600">
          Count: {product?.inventoryCount}
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Price: ${product?.price}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
