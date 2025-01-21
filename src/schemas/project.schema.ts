import { z } from 'zod';

const createProject = z.object({
  name: z
    .string()
    .min(3, 'Project name must be at least 3 characters long'),
  type: z
    .string()
    .min(3, 'Project type must be at least 3 characters long'),
  coverImage: z.string().optional(),
  overview: z
    .string()
    .min(10, 'Overview must be at least 10 characters long'),
  techStack: z
    .string()
    .min(1, 'Tech stack is required')
    .transform((value) => value.split(',').map((tech) => tech.trim())),
  links: z
    .string()
    .min(1, 'Links are required')
    .transform((value) => value.split(',').map((link) => link.trim())),
});

const updateProject = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  coverImage: z.string().optional(),
  overview: z.string().optional(),
  techStack: z
    .string()
    .transform((value) => value.split(',').map((tech) => tech.trim()))
    .optional(),
  links: z
    .string()
    .transform((value) => value.split(',').map((link) => link.trim()))
    .optional(),
});

export const ProjectSchema = {
  createProject,
  updateProject,
};
