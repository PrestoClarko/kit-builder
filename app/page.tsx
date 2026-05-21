import { products } from "@/data/products";
export default function Home() {
const categories = [...new Set(products.map(p => p.category))];
  return (
    <div className="h-screen flex flex-col">

      {/* Top Bar */}
      <div className="h-16 border-b flex items-center px-6 font-bold">
        Kit Builder
      </div>

      {/* Main Area */}
      <div className="flex flex-1">

        {/* Left Sidebar */}
<div className="w-64 border-r p-4">
  <p className="font-semibold mb-4">Categories</p>

  <ul className="space-y-2 text-sm">
    {categories.map((cat) => (
      <li key={cat} className="capitalize text-gray-700 hover:text-black cursor-pointer">
        {cat}
      </li>
    ))}
  </ul>
</div>

        {/* Center Preview */}
<div className="flex-1 p-6 bg-gray-50 overflow-auto">
  <p className="font-semibold mb-4">Products</p>

  <div className="grid grid-cols-2 gap-4">
    {products.map((product) => (
      <div
        key={product.id}
        className="bg-white p-4 rounded-lg border hover:shadow cursor-pointer"
      >
        <p className="font-medium text-sm">{product.name}</p>
        <p className="text-xs text-gray-500 capitalize">
          {product.category}
        </p>
      </div>
    ))}
  </div>
</div>

        {/* Right Panel */}
        <div className="w-80 border-l p-4">
          <p className="font-semibold mb-4">Selected Items</p>
          <div className="text-sm text-gray-500">
            Nothing selected yet
          </div>
        </div>

      </div>

      {/* Bottom AI Bar */}
      <div className="h-16 border-t flex items-center px-4">
        <input
          className="w-full border rounded px-3 py-2 text-sm"
          placeholder="Describe your fit... (e.g. 'black streetwear outfit')"
        />
      </div>

    </div>
  );
}
