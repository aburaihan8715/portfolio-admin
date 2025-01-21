import { useAppSelector } from '@/redux/hooks';

const AdminDashboard = () => {
  const name = useAppSelector((state) => state?.auth?.user?.name);

  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <h1 className="text-center text-2xl font-semibold md:text-4xl">
          Welcome {name}
        </h1>

        <div className="mt-4 flex justify-center">
          <img
            className="h-[200px] w-[200px] rounded-full object-cover md:h-[400px] md:w-[400px]"
            src="https://cdn.pixabay.com/photo/2020/09/18/05/58/lights-5580916_640.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
