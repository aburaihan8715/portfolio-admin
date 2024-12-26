import { FaArtstation } from 'react-icons/fa';

const BrandLogo = () => {
  return (
    <div className="flex items-center gap-2">
      <p className="text-xl text-primary">
        <FaArtstation />
      </p>
      <p className="text-2xl font-semibold text-transparent text-gray-700 bg-gradient-to-r from-orange-600 via-green-700 to-fuchsia-700 bg-clip-text">
        Admin Panel
      </p>
    </div>
  );
};

export default BrandLogo;
