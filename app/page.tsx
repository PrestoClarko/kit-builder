export default function Home() {
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
            <li>Hoodies</li>
            <li>Pants</li>
            <li>Hats</li>
            <li>Shoes</li>
          </ul>
        </div>

        {/* Center Preview */}
        <div className="flex-1 flex items-center justify-center bg-gray-50">
          <div className="text-gray-400">
            3D Preview Area (coming soon)
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
