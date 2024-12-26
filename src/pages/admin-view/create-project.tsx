export default function CreateProject() {
  return (
    <div className="ml-24 flex-4">
      <h1 className="mb-4 text-2xl font-semibold">New Product</h1>
      <form className="mt-4">
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">Image</label>
          <input type="file" className="p-2 border rounded" />
        </div>
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">Title</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">
            Description
          </label>
          <input
            type="text"
            placeholder="description..."
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">Price</label>
          <input
            type="number"
            placeholder="100"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">Cost</label>
          <input
            type="number"
            placeholder="100"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">
            Categories
          </label>
          <input
            type="text"
            placeholder="jeans,skirts"
            className="p-2 border rounded"
          />
        </div>
        <div className="flex flex-col w-64 mb-4">
          <label className="mb-2 font-semibold text-gray-500">Stock</label>
          <select className="p-2 border rounded">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
        </div>
        <button className="px-4 py-2 mt-4 font-semibold text-white bg-blue-900 rounded cursor-pointer">
          Create
        </button>
      </form>
    </div>
  );
}
