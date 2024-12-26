import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import SubHeading from '@/components/common/sub-heading';
import { Link } from 'react-router';

import LoadingWithOverlay from '@/components/common/loading-overlay';
import { toast } from 'sonner';
import { useForgetPasswordMutation } from '@/redux/api/userApi';
import { UserSchema } from '@/schemas/user.schema';

type TForgetPasswordFormValues = {
  email: string;
};

const ForgetPasswordPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TForgetPasswordFormValues>({
    resolver: zodResolver(UserSchema.forgetPasswordSchema),
  });

  const [forgetPasswordMutation, { isLoading }] =
    useForgetPasswordMutation();
  const onSubmit = async (data: TForgetPasswordFormValues) => {
    const toastId = toast.loading('loading...');
    try {
      await forgetPasswordMutation(data).unwrap();
      toast.success('Please check your email!', {
        id: toastId,
        duration: 2000,
      });
    } catch (error: any) {
      console.log(error);
      const message =
        error.data.message || 'Failed to forget password action!';
      toast.error(message, { id: toastId, duration: 2000 });
    }
  };

  return (
    <>
      {isLoading && <LoadingWithOverlay />}
      <div className="mt-[80px] flex h-screen items-center justify-center bg-gray-100 md:mt-0">
        <div className="w-full max-w-md p-2 bg-white rounded-lg shadow-md md:p-8">
          <div>
            <SubHeading subHeading="Forget Password" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 space-y-4"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  errors.email
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-500'
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="">
              <Button className="w-full" type="submit">
                Send Password Reset Link
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-primary hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPasswordPage;
