import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { FiFilter } from "react-icons/fi";
import { FaShoppingCart as ShoppingCart, FaUser as User } from "react-icons/fa"; // Adjust imports as needed

export function Sidebar() {
  return (
    <aside className="w-72 p-6 bg-white shadow-md rounded-lg">
      <div className="flex items-center gap-2 mb-6">
        <FiFilter size={20} className="text-blue-500" />
        <h2 className="text-xl font-bold text-gray-800">Filters</h2>
      </div>
      <div className="space-y-8">
        {/* Category Filter */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Category</h3>
          <div className="space-y-3">
            <div className="flex items-center hover:text-blue-500 transition">
              <Checkbox id="category-electronics" />
              <label
                htmlFor="category-electronics"
                className="ml-3 text-sm text-gray-600 cursor-pointer"
              >
                Electronics
              </label>
            </div>
            <div className="flex items-center hover:text-blue-500 transition">
              <Checkbox id="category-furniture" />
              <label
                htmlFor="category-furniture"
                className="ml-3 text-sm text-gray-600 cursor-pointer"
              >
                Furniture
              </label>
            </div>
            {/* Add more categories as needed */}
          </div>
        </div>

        {/* Price Range Slider */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Price Range</h3>
          <div>
            <Slider
              defaultValue={[0, 1000]}
              min={0}
              max={1000}
              step={10}
              className="text-blue-500"
            />
            <div className="flex justify-between mt-3 text-gray-600 text-sm">
              <span>$0</span>
              <span>$1000</span>
            </div>
          </div>
        </div>

        {/* Brand Filter */}
        <div>
          <h3 className="font-semibold text-gray-700 mb-3">Brand</h3>
          <div className="space-y-3">
            <div className="flex items-center hover:text-blue-500 transition">
              <Checkbox id="brand-apple" />
              <label
                htmlFor="brand-apple"
                className="ml-3 text-sm text-gray-600 cursor-pointer"
              >
                Apple
              </label>
            </div>
            <div className="flex items-center hover:text-blue-500 transition">
              <Checkbox id="brand-samsung" />
              <label
                htmlFor="brand-samsung"
                className="ml-3 text-sm text-gray-600 cursor-pointer"
              >
                Samsung
              </label>
            </div>
            {/* Add more brands as needed */}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex flex-col space-y-4">
        <button className="flex items-center justify-start bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition ease-in-out duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <ShoppingCart className="mr-3 text-lg" />
          <span className="text-sm font-medium">My Cart</span>
        </button>
        <button className="flex items-center justify-start bg-blue-600 text-white px-5 py-3 rounded-lg hover:bg-blue-700 transition ease-in-out duration-300 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500">
          <User className="mr-3 text-lg" />
          <span className="text-sm font-medium">User Account</span>
        </button>
      </div>
    </aside>
  );
}
