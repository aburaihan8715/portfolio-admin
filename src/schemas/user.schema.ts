import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(1, 'Please enter your name!'),
  email: z.string().email('Please enter a valid email address!'),
  password: z.string().min(6, 'Must be at least 6 characters.'),
  passwordConfirm: z.string().min(6, 'Must be at least 6 characters.'),
});

const updateProfileSchema = z.object({
  name: z.string(),
});

const forgetPasswordSchema = z.object({
  email: z.string().email('Invalid email address'),
});

const loginSchema = z.object({
  email: z
    .string()
    .email('Invalid email address')
    .min(1, { message: 'Email is required' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' })
    .min(1, { message: 'Password is required' }),
});

const passwordChangeSchema = z.object({
  oldPassword: z
    .string()
    .min(8, 'Old password must be at least 8 characters long'),
  newPassword: z
    .string()
    .min(8, 'New password must be at least 8 characters long'),
});

const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
});

export const UserSchema = {
  registerSchema,
  updateProfileSchema,
  forgetPasswordSchema,
  loginSchema,
  passwordChangeSchema,
  resetPasswordSchema,
};
