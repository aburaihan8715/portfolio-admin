import { LuShoppingBasket } from 'react-icons/lu';

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-primary text-2xl">
        <LuShoppingBasket />
      </p>
      <p className="font-semibold text-gray-700 text-2xl bg-gradient-to-r from-blue-700 via-orange-600 to-blue-500 bg-clip-text text-transparent">
        EasyBuy
      </p>
    </div>
  );
};

export default BrandLogo;
