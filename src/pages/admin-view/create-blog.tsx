import React, { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import ReactQuill from 'react-quill';

import { useForm } from 'react-hook-form';
import { FaPlusSquare } from 'react-icons/fa';

type TPostFormValues = {
  title: string;
  description: string;
  category: string;
  content: string;
  image?: File;
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
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<TPostFormValues>({
    // resolver: zodResolver(PostSchemas.postValidationSchema),
  });

  const onSubmit = (data: TPostFormValues) => {
    const postData = {
      title: data.title,
      description: data.description,
      category: data.category,
      content: data.content,
    };

    const formData = new FormData();
    formData.append('data', JSON.stringify(postData));
    if (data.image) {
      formData.append('file', data.image);
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setValue('image', file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // if (!user) {
  //   return <LoadingSpinner />;
  // }

  return (
    <>
      {/* {isPending && <LoadingWithOverlay />} */}
      <div className="container mx-auto md:p-5">
        <h1 className="mb-5 text-xl font-bold text-green-700 md:text-2xl">
          Create a New Post
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Title Input */}
          <div>
            <label
              className="block mb-1 text-sm font-medium text-green-700"
              htmlFor="title"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              {...register('title')}
              className={`block w-full border ${
                errors.title ? 'border-red-500' : 'border-green-300'
              } rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300`}
            />
            {errors.title && (
              <p className="text-xs text-red-500">
                {errors.title.message}
              </p>
            )}
          </div>

          {/* Category Selection */}
          <div>
            <label
              className="block mb-1 text-sm font-medium text-green-700"
              htmlFor="category"
            >
              Category
            </label>
            <select
              id="category"
              {...register('category')}
              className={`block w-full border ${
                errors.category ? 'border-red-500' : 'border-green-300'
              } rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300`}
            >
              <option value="">Select a category</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Flowers">Flowers</option>
              <option value="Landscaping">Landscaping</option>
              <option value="Others">Others</option>
            </select>
            {errors.category && (
              <p className="text-xs text-red-500">
                {errors.category.message}
              </p>
            )}
          </div>

          {/* Description Input */}
          <div>
            <label
              className="block mb-1 text-sm font-medium text-green-700"
              htmlFor="description"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register('description')}
              rows={3}
              className={`block w-full border ${
                errors.description ? 'border-red-500' : 'border-green-300'
              } rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300`}
            />
            {errors.description && (
              <p className="text-xs text-red-500">
                {errors.description.message}
              </p>
            )}
          </div>

          {/* Image Input with Preview */}
          <div>
            {imagePreview ? (
              <div className="relative h-[150px] w-full md:h-[400px]">
                <img
                  src={imagePreview}
                  alt="User photo preview"
                  className="object-cover rounded"
                />
              </div>
            ) : (
              <div className="relative h-[150px] w-full md:h-[400px]">
                <img
                  src={'https://dummyimage.com/600x400'}
                  alt="User photo"
                  className="object-cover rounded"
                />
              </div>
            )}

            <input
              type="file"
              accept="image/*"
              id="photo"
              onChange={handleImageChange}
              className="hidden w-full text-sm text-gray-500 file:mr-4 file:rounded file:border-0 file:bg-green-50 file:px-4 file:py-2 file:text-green-700 hover:file:bg-green-100"
            />
            <label
              htmlFor="photo"
              className="flex items-center justify-center gap-2 py-2 mt-4 text-xl text-center text-green-700 border border-green-300 rounded cursor-pointer"
            >
              <div className="flex items-center gap-3">
                <FaPlusSquare />
                <span>Image</span>
              </div>
            </label>
          </div>

          {/* Quill Editor with Label */}
          <div className="relative">
            <label
              className="block mb-1 text-sm font-medium text-green-700"
              htmlFor="content"
            >
              Content
            </label>
            {/* Render ReactQuill only on client */}
            <ReactQuill
              placeholder="Write your advice..."
              theme="snow"
              value={watch('content') || ''}
              onChange={(content) =>
                setValue('content', content, { shouldValidate: true })
              }
              modules={modules}
              formats={formats}
              className="border border-green-300 rounded-md"
            />
            {errors.content && (
              <p className="text-xs text-red-500">
                {errors.content.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 text-white transition duration-200 bg-green-700 rounded-md hover:bg-green-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateBlog;
