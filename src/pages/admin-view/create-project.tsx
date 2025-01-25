import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { ProjectSchema } from '@/schemas/project.schema';
import { useCreateProjectMutation } from '@/redux/api/projectApi';
import LoadingWithOverlay from '@/components/common/loading-overlay';
import { toast } from 'sonner';
import { FaPlusSquare } from 'react-icons/fa';

// Define form input types

type TProjectFormValues = {
  name: string;
  type: string;
  overview: string;
  techStack: string;
  links: string;
};

const CreateProject: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<TProjectFormValues>({
    resolver: zodResolver(ProjectSchema.createProject),
  });

  const [createProjectMutation, { isLoading }] =
    useCreateProjectMutation();

  const onSubmit = async (data: TProjectFormValues) => {
    const toastId = toast.loading('loading...');
    try {
      const projectData = {
        ...data,
      };
      const formData = new FormData();
      formData.append('data', JSON.stringify(projectData));
      if (file) {
        formData.append('file', file);
      }

      await createProjectMutation(formData);
      toast.success('Project created successfully!', {
        id: toastId,
        duration: 2000,
      });
      reset();
      setImagePreview(null);
    } catch (error: any) {
      console.log(error);
      const message = error.data.message || 'Failed to create project';
      toast.error(message, { id: toastId, duration: 2000 });
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        toast.error('Please select a valid image file');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        toast.error('File size exceeds 5MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(file);
      setFile(file);
    }
  };

  return (
    <>
      {isLoading && <LoadingWithOverlay />}
      <div className="mx-auto w-full max-w-4xl md:p-6">
        <h2 className="mb-6 text-2xl font-bold text-gray-800">
          Create Project
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Project Name */}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="name"
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
            >
              Project Name
            </label>
            <div className="flex-1">
              <input
                type="text"
                id="name"
                placeholder="Enter project name"
                className={`${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
                {...register('name')}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>
          </div>

          {/* Project Type */}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="type"
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
            >
              Project Type
            </label>
            <div className="flex-1">
              <input
                type="text"
                id="type"
                placeholder="Enter project type"
                className={`${
                  errors.type ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
                {...register('type')}
              />
              {errors.type && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.type.message}
                </p>
              )}
            </div>
          </div>

          {/* Image Upload Field */}
          <div className="mb-4 flex">
            <label className="hidden w-1/6 text-sm font-medium text-gray-700 md:block">
              Cover Image
            </label>

            <div className="flex-1">
              <div className="w-full">
                <div className="rounded-md border p-2">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="h-[250px] w-full rounded object-cover"
                    />
                  ) : (
                    <img
                      src="https://dummyimage.com/600x400"
                      alt="Default Preview"
                      className="h-[250px] w-full rounded object-cover"
                    />
                  )}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  id="coverImage"
                  onChange={handleImageChange}
                  className="hidden"
                />
                <label
                  htmlFor="coverImage"
                  className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded border border-gray-300 py-2 text-green-700"
                >
                  <FaPlusSquare />
                  <span>Upload Image</span>
                </label>
              </div>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-4 flex">
            <label
              htmlFor="overview"
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
            >
              Overview
            </label>

            <div className="flex-1">
              <textarea
                id="overview"
                placeholder="Enter project overview"
                rows={4}
                className={`${
                  errors.overview ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
                {...register('overview')}
              ></textarea>
              {errors.overview && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.overview.message}
                </p>
              )}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="techStack"
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
            >
              Tech Stack
            </label>

            <div className="flex-1">
              <input
                type="text"
                id="techStack"
                placeholder="e.g., React, TypeScript, Tailwind"
                className={`${
                  errors.techStack ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
                {...register('techStack')}
              />
              {errors.techStack && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.techStack.message}
                </p>
              )}
            </div>
          </div>

          {/* Links */}
          <div className="mb-4 flex items-center">
            <label
              htmlFor="links"
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
            >
              Links
            </label>

            <div className="flex-1">
              <input
                type="text"
                id="links"
                placeholder="e.g., GitHub, Live Demo"
                className={`${
                  errors.links ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
                {...register('links')}
              />
              {errors.links && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.links.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="w-[200px] rounded-md bg-gray-400 py-2 text-white transition duration-300 hover:bg-gray-500 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateProject;
