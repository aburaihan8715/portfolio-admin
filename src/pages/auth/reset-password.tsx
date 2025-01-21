import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FaEye, FaEyeSlash } from 'react-icons/fa';

import { Button } from '@/components/ui/button';
import SubHeading from '@/components/common/sub-heading';
import { Link, useSearchParams } from 'react-router';
import LoadingWithOverlay from '@/components/common/loading-overlay';
import { toast } from 'sonner';
import { useResetPasswordMutation } from '@/redux/api/userApi';
import { UserSchema } from '@/schemas/user.schema';

type TResetPasswordFormValues = {
  newPassword: string;
};

const ResetPasswordPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [searchParams] = useSearchParams();
  const email = searchParams.get('email');
  const token = searchParams.get('token');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TResetPasswordFormValues>({
    resolver: zodResolver(UserSchema.resetPasswordSchema),
  });

  const [resetPasswordMutation, { isLoading }] =
    useResetPasswordMutation();

  const onSubmit = async (data: TResetPasswordFormValues) => {
    const toastId = toast.loading('loading...');
    try {
      const passwordData = {
        email,
        token,
        newPassword: data.newPassword,
      };

      await resetPasswordMutation(passwordData).unwrap();
      toast.success('Password reset success!', {
        id: toastId,
        duration: 2000,
      });
    } catch (error: any) {
      console.log(error);
      const message = error.data.message || 'Failed to reset password!';
      toast.error(message, { id: toastId, duration: 2000 });
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isLoading && <LoadingWithOverlay />}
      <div className="flex min-h-screen items-center justify-center bg-gray-100 md:mt-0">
        <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
          <div>
            <SubHeading subHeading="Reset Password" />
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-4 space-y-6"
          >
            {/* New Password Input */}
            <div className="relative flex flex-col">
              <label
                htmlFor="new-password"
                className="text-sm font-medium text-gray-700"
              >
                New Password
              </label>
              <input
                id="new-password"
                type={showPassword ? 'text' : 'password'}
                {...register('newPassword')}
                className={`mt-1 block w-full rounded-md border p-2 focus:outline-none focus:ring-2 ${
                  errors.newPassword
                    ? 'border-red-500 focus:ring-red-500'
                    : 'border-gray-300 focus:ring-green-500'
                }`}
                placeholder="Enter new password"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-3 top-9 text-gray-600 focus:outline-none"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
              {errors.newPassword && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.newPassword?.message}
                </p>
              )}
            </div>

            {/* Reset Password Button */}
            <div>
              <Button className="w-full" type="submit">
                Reset Password
              </Button>
            </div>
          </form>

          <div className="mt-4 text-center">
            <Link
              to="/"
              className="hover:text-primary text-sm text-gray-600 hover:underline"
            >
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordPage;
