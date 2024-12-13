import { z } from 'zod';

const registerSchema = z.object({
  name: z.string().min(1, 'Please enter your name!'),
  email: z.string().email('Please enter a valid email address!'),
  password: z.string().min(6, 'Must be at least 6 characters.'),
  passwordConfirm: z.string().min(6, 'Must be at least 6 characters.'),
  role: z.string({ required_error: 'Role is required!' }),
});

const updateProfileSchema = z.object({
  name: z.string(),
  email: z.string(),
  phone: z.string(),
  address: z.string(),
});

export const UserSchema = {
  registerSchema,
  updateProfileSchema,
};
