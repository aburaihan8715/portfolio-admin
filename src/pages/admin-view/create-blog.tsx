import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import { FaPlusSquare } from 'react-icons/fa';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { BlogSchema } from '@/schemas/blog.schema';
import { useCreateBlogMutation } from '@/redux/api/blogApi';
import LoadingWithOverlay from '@/components/common/loading-overlay';

type TBlogFormValues = {
  title: string;
  overview: string;
  coverImage?: File;
  content: string;
  category: string;
};

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { font: [] }],
    [{ list: 'ordered' }, { list: 'bullet' }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ align: [] }],
    [{ indent: '-1' }, { indent: '+1' }],
    [{ color: [] }, { background: [] }],
    ['link', 'image', 'code-block'],
    ['clean'],
  ],
};

const formats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
  'align',
  'color',
  'background',
  'code-block',
];

const CreateBlog = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    watch,
    formState: { errors },
  } = useForm<TBlogFormValues>({
    resolver: zodResolver(BlogSchema.createBlog),
  });

  const [createBlogMutation, { isLoading }] = useCreateBlogMutation();
  const onSubmit = async (data: TBlogFormValues) => {
    const toastId = toast.loading('loading...');
    try {
      const formData = new FormData();
      formData.append('data', JSON.stringify(data));
      if (file) {
        formData.append('file', file);
      }

      await createBlogMutation(formData);
      toast.success('Blog created successfully!', {
        id: toastId,
        duration: 2000,
      });
      reset();
      setImagePreview(null);
    } catch (error: any) {
      console.log(error);
      const message = error.data.message || 'Failed to create Blog';
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
        <h1 className="mb-6 text-2xl font-bold text-gray-700">
          Create blog
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title Field */}
          <div className="flex items-center">
            <label
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
              htmlFor="title"
            >
              Title
            </label>

            <div className="flex-1">
              <input
                placeholder="Blog title"
                type="text"
                id="title"
                {...register('title', { required: 'Title is required' })}
                className={`${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
              />
              {errors.title && (
                <p className="text-xs text-red-500">
                  {errors.title.message}
                </p>
              )}
            </div>
          </div>

          {/* Category Field */}
          <div className="flex items-center">
            <label
              className="hidden w-1/6 text-sm font-medium text-gray-600 md:block"
              htmlFor="category"
            >
              Category
            </label>

            <div className="flex-1">
              <select
                id="category"
                {...register('category', {
                  required: 'Category is required',
                })}
                className={`${
                  errors.category ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
              >
                <option value="">Choose a category</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="mixed">Mixed</option>
              </select>
              {errors.category && (
                <p className="text-xs text-red-500">
                  {errors.category.message}
                </p>
              )}
            </div>
          </div>

          {/* Description Field */}
          <div className="flex items-start">
            <label
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
              htmlFor="overview"
            >
              Overview
            </label>

            <div className="flex-1">
              <textarea
                placeholder="Overview"
                id="overview"
                {...register('overview', {
                  required: 'Overview is required',
                })}
                rows={3}
                className={`${
                  errors.overview ? 'border-red-500' : 'border-gray-300'
                } w-full rounded-md border px-4 py-2 focus:outline-none focus:ring focus:ring-gray-300`}
              />
              {errors.overview && (
                <p className="text-xs text-red-500">
                  {errors.overview.message}
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

          {/* Content Field */}
          <div className="flex items-start">
            <label
              className="hidden w-1/6 text-sm font-medium text-gray-700 md:block"
              htmlFor="content"
            >
              Content
            </label>
            <div className="flex-1">
              <ReactQuill
                placeholder="Write your content..."
                theme="snow"
                value={watch('content') || ''}
                onChange={(content) =>
                  setValue('content', content, { shouldValidate: true })
                }
                modules={modules}
                formats={formats}
              />
              {errors.content && (
                <p className="text-xs text-red-500">
                  {errors.content.message}
                </p>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="w-[200px] rounded-md bg-gray-400 py-2 text-white transition duration-300 hover:bg-gray-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
