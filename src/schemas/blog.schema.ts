import { z } from 'zod';

const createBlog = z.object({
  title: z.string().min(3, 'Title must be at least 3 characters long'),
  coverImage: z.string().optional(),
  overview: z
    .string()
    .min(10, 'Overview must be at least 10 characters long'),
  content: z
    .string()
    .min(100, 'Content must be at least 100 characters long'),
  category: z
    .string()
    .min(3, 'Category must be at least 3 characters long'),
});

const updateBlog = z.object({
  title: z.string().optional(),
  coverImage: z.string().optional(),
  overview: z.string().optional(),
  content: z.string().optional(),
  category: z.string().optional(),
});

export const BlogSchema = {
  createBlog,
  updateBlog,
};
