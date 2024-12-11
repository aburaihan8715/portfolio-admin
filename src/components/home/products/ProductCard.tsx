import { Link } from 'react-router';
import defaultProductImage from '@/assets/images/default_product.jpg';
const ProductCard = () => {
  return (
    <div className="relative overflow-hidden bg-white rounded-lg shadow-md group">
      <img
        src={defaultProductImage}
        alt={`product`}
        className="object-cover w-full h-40 rounded"
      />

      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
        <Link
          to={`/room-details/123`}
          className="px-4 py-2 text-sm font-medium text-white bg-green-900 rounded-md hover:bg-green-800"
        >
          See Details
        </Link>
      </div>

      <div className="p-4">
        <h3 className="mb-2 text-xl font-semibold text-gray-800">
          {`Product name`}
        </h3>
        <p className="mb-1 text-sm text-gray-600">
          Capacity: {`25`} people
        </p>
        <p className="mb-4 text-sm text-gray-600">
          Price per slot: ${`26`}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
