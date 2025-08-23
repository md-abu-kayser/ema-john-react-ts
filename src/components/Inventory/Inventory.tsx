import React from "react";

const Inventory: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
        Inventory Management
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Inventory Cards */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
          <p className="text-gray-600">
            Manage your product categories and organize your inventory
            efficiently.
          </p>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors">
            Manage Categories
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Stock Levels</h2>
          <p className="text-gray-600">
            Monitor and update stock levels for all your products in real-time.
          </p>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors">
            View Stock
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
          <p className="text-gray-600">
            Add new products to your inventory with detailed information and
            images.
          </p>
          <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-primary-dark transition-colors">
            Add Product
          </button>
        </div>
      </div>

      {/* Inventory Table */}
      <div className="mt-12 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-semibold">Recent Inventory</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Product
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Category
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Stock
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Ultraboost Shoes
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Footwear</td>
                <td className="px-6 py-4 whitespace-nowrap">42 in stock</td>
                <td className="px-6 py-4 whitespace-nowrap">$120.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  Tiro Track Pants
                </td>
                <td className="px-6 py-4 whitespace-nowrap">Clothing</td>
                <td className="px-6 py-4 whitespace-nowrap">18 in stock</td>
                <td className="px-6 py-4 whitespace-nowrap">$65.00</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button className="text-blue-600 hover:text-blue-800 mr-3">
                    Edit
                  </button>
                  <button className="text-red-600 hover:text-red-800">
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Inventory;
