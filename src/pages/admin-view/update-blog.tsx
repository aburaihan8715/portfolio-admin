import React, { useEffect, useMemo, useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';
import { useForm } from 'react-hook-form';
import { FaPlusSquare } from 'react-icons/fa';
import { toast } from 'sonner';
import { zodResolver } from '@hookform/resolvers/zod';
import { BlogSchema } from '@/schemas/blog.schema';
import {
  useGetSingleBlogQuery,
  useUpdateBlogMutation,
} from '@/redux/api/blogApi';
import LoadingWithOverlay from '@/components/common/loading-overlay';
import { useNavigate, useParams } from 'react-router';

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

const UpdateBlog = () => {
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const { id } = useParams();
  const { data: blogData, isLoading: isBlogLoading } =
    useGetSingleBlogQuery(id);
  const blog = useMemo(() => blogData?.data || {}, [blogData?.data]);

  const navigate = useNavigate();

  console.log('blog', blog);
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TBlogFormValues>({
    resolver: zodResolver(BlogSchema.createBlog),
    defaultValues: {
      title: blog?.title || '',
      overview: blog?.overview || '',
      content: blog?.content || '',
      category: blog?.category || '',
    },
  });

  const [updateBlogMutation, { isLoading: isBlogUpdateLoading }] =
    useUpdateBlogMutation();
  const onSubmit = async (data: TBlogFormValues) => {
    const toastId = toast.loading('loading...');
    try {
      const formData = new FormData();
      formData.append('data', JSON.stringify(data));
      if (file) {
        formData.append('file', file);
      }

      const blogData = {
        blogId: id,
        updatedData: formData,
      };

      await updateBlogMutation(blogData);
      toast.success('Blog updated successfully!', {
        id: toastId,
        duration: 2000,
      });
      navigate('/admin/all-blogs');
    } catch (error: any) {
      console.log(error);
      const message = error.data.message || 'Failed to update Blog';
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

  // Update form values when postData is loaded
  useEffect(() => {
    if (Object.keys(blog).length > 0) {
      const { title, overview, coverImage, category, content } = blog;
      setValue('title', title || '');
      setValue('overview', overview || '');
      setValue('category', category || '');
      setValue('content', content || '');
      setImagePreview(coverImage || '');
    }
  }, [blog, setValue]);

  return (
    <>
      {(isBlogLoading || isBlogUpdateLoading) && <LoadingWithOverlay />}
      <div className="w-full max-w-4xl p-6 mx-auto">
        <h1 className="mb-6 text-2xl font-bold text-gray-700">
          Update blog
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title Field */}
          <div className="flex items-center">
            <label
              className="w-1/6 text-sm font-medium text-gray-700"
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
              className="w-1/6 text-sm font-medium text-gray-600"
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
                <option value="">choose a category</option>
                <option value="frontend">frontend</option>
                <option value="backend">backend</option>
                <option value="mixed">mixed</option>
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
              className="w-1/6 text-sm font-medium text-gray-700"
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
          <div className="flex mb-4">
            <label className="w-1/6 text-sm font-medium text-gray-700">
              Cover Image
            </label>

            <div className="flex-1">
              <div className="w-full">
                <div className="p-2 border rounded-md">
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
                  className="flex items-center justify-center gap-2 py-2 mt-2 text-green-700 border border-gray-300 rounded cursor-pointer"
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
              className="w-1/6 text-sm font-medium text-gray-700"
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

export default UpdateBlog;
