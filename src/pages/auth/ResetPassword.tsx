import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import LoadingWithOverlay from '@/components/ui/LoadingWithOverlay';
import { AuthSchema } from '@/schemas/auth.schema';
import { Button } from '@/components/ui/button';
import SubHeading from '@/components/ui/SubHeading';

type TResetPasswordFormValues = {
  newPassword: string;
};

const ResetPassword: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TResetPasswordFormValues>({
    resolver: zodResolver(AuthSchema.resetPasswordSchema),
  });

  const isPending = false;

  const onSubmit = (data: TResetPasswordFormValues) => {
    console.log(data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {isPending && <LoadingWithOverlay />}
      <div className="mt-[80px] flex min-h-screen items-center justify-center bg-gray-100 md:mt-0">
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
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
