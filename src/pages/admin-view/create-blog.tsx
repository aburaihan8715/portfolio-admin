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
  } = useForm<TPostFormValues>();

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

    console.log('Form submitted:', formData);
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

  return (
    <div className="mx-auto w-full max-w-4xl bg-white p-6 text-gray-600">
      <h1 className="mb-5 text-xl font-semibold md:text-2xl">
        Create blog
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Title Field */}
        <div className="flex items-center">
          <label className="w-1/6 font-medium" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register('title', { required: 'Title is required' })}
            className={`block flex-1 border ${
              errors.title ? 'border-red-500' : 'border-green-300'
            } rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300`}
          />
          {/* {errors.title && (
            <p className="text-xs text-red-500">{errors.title.message}</p>
          )} */}
        </div>

        {/* Category Field */}
        <div className="flex items-center">
          <label className="w-1/6 font-medium" htmlFor="category">
            Category
          </label>
          <select
            id="category"
            {...register('category', { required: 'Category is required' })}
            className={`block flex-1 border ${
              errors.category ? 'border-red-500' : 'border-green-300'
            } rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300`}
          >
            <option value="">Select a category</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Flowers">Flowers</option>
            <option value="Landscaping">Landscaping</option>
            <option value="Others">Others</option>
          </select>
          {/* {errors.category && (
            <p className="text-xs text-red-500">
              {errors.category.message}
            </p>
          )} */}
        </div>

        {/* Description Field */}
        <div className="flex items-start">
          <label className="w-1/6 font-medium" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            {...register('description', {
              required: 'Description is required',
            })}
            rows={3}
            className={`block flex-1 border ${
              errors.description ? 'border-red-500' : 'border-green-300'
            } rounded-md p-2 focus:outline-none focus:ring focus:ring-green-300`}
          />
          {/* {errors.description && (
            <p className="text-xs text-red-500">
              {errors.description.message}
            </p>
          )} */}
        </div>

        {/* Image Upload Field */}
        <div className="flex items-start">
          <label className="w-1/6 font-medium">Image</label>
          <div className="flex-1">
            {imagePreview ? (
              <img
                src={imagePreview}
                alt="Preview"
                className="mb-2 h-[150px] w-full rounded object-cover"
              />
            ) : (
              <img
                src="https://dummyimage.com/600x400"
                alt="Default Preview"
                className="mb-2 h-[150px] w-full rounded object-cover"
              />
            )}
            <input
              type="file"
              accept="image/*"
              id="photo"
              onChange={handleImageChange}
              className="hidden"
            />
            <label
              htmlFor="photo"
              className="mt-2 flex cursor-pointer items-center justify-center gap-2 rounded border border-green-300 py-2 text-green-700"
            >
              <FaPlusSquare />
              <span>Upload Image</span>
            </label>
          </div>
        </div>

        {/* Content Field */}
        <div className="flex items-start">
          <label className="mt-2 w-1/6 font-medium" htmlFor="content">
            Content
          </label>
          <ReactQuill
            placeholder="Write your content..."
            theme="snow"
            value={watch('content') || ''}
            onChange={(content) =>
              setValue('content', content, { shouldValidate: true })
            }
            modules={modules}
            formats={formats}
            className="flex-1 rounded-md border border-green-300"
          />
          {/* {errors.content && (
            <p className="text-xs text-red-500">
              {errors.content.message}
            </p>
          )} */}
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="w-[150px] rounded-md bg-gray-400 py-2 text-white transition duration-300 hover:bg-gray-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateBlog;
