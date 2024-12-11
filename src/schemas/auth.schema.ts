import { z } from 'zod';

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
  currentPassword: z
    .string()
    .min(8, 'Current password must be at least 8 characters long'),
  newPassword: z
    .string()
    .min(8, 'New password must be at least 8 characters long'),
});

const registerSchema = z.object({
  username: z.string().min(1, 'Please enter your name!'),
  email: z.string().email('Please enter a valid email address!'),
  password: z.string().min(6, 'Must be at least 6 characters.'),
});

const resetPasswordSchema = z.object({
  newPassword: z
    .string()
    .min(8, 'Password must be at least 8 characters long'),
});

const userSettingsSchema = z.object({
  username: z
    .string()
    .min(2, 'Username must be at least 2 characters long'),
  email: z.string().email('Invalid email address'),
});

export const AuthSchema = {
  forgetPasswordSchema,
  loginSchema,
  passwordChangeSchema,
  registerSchema,
  resetPasswordSchema,
  userSettingsSchema,
};
