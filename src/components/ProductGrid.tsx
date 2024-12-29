"use client"; // Marks this as a Client Component
import { useState } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from Next.js
import Image from "next/image"; // Import Next.js Image component

interface Product {
  id: number;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  specifications: string[]; // Changed to string[]
  relatedProducts: {
    id: number;
    name: string;
    image: string;
    price: number;
  }[];
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products = [] }) => {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter(); // Initialize the router

  const handleAddToCart = (product: Product) => {
    alert(`Added ${product.name} to the cart!`);
    router.push("/Mycart"); // Navigate to My Cart page using Next.js routing
  };

  const handleBuyNow = (product: Product) => {
    alert(`Proceeding to checkout for ${product.name}`);
  
  };

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true); // Open the modal with product details
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg hover:scale-105 transition-transform"
          >
            <div className="w-full h-36 flex items-center justify-center mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={144}
                height={144}
                className="object-contain rounded"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center">{product.name}</h3>
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-bold">${product.price.toFixed(2)}</span>
              <div className="flex items-center">
                <span className="w-5 h-5 text-yellow-400">⭐</span>
                <span className="ml-1">{product.rating}</span>
              </div>
            </div>
            <button
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
              onClick={() => handleViewDetails(product)} // Open modal on click
            >
              View Details
            </button>
          </div>
        ))}
      </div>

      {/* Product Details Modal */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-lg w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-2 right-2 text-gray-500"
            >
              X
            </button>

            <div className="flex gap-8">
              {/* Product Image */}
              <div className="w-full md:w-1/2">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  width={300}
                  height={300}
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              {/* Product Details */}
              <div className="w-full md:w-1/2">
                <h1 className="text-3xl font-bold">{selectedProduct.name}</h1>
                <p className="text-xl text-gray-600">${selectedProduct.price.toFixed(2)}</p>
                <p className="mt-4 text-gray-700">{selectedProduct.description}</p>
                <div className="mt-4">
                  <h3 className="font-semibold">Specifications</h3>
                  <p>{selectedProduct.specifications}</p>
                </div>
                <div className="mt-4">
                  <h3 className="font-semibold">Rating</h3>
                  <div className="flex items-center">
                    <span className="w-5 h-5 text-yellow-400">⭐</span>
                    <span className="ml-1">{selectedProduct.rating}</span>
                  </div>
                </div>

                {/* Add to Cart and Buy Now Buttons */}
                <div className="mt-6 flex gap-4">
                  <button
                    onClick={() => handleAddToCart(selectedProduct)}
                    className="bg-blue-500 text-white py-2 px-6 rounded hover:bg-blue-600"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleBuyNow(selectedProduct)}
                    className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>

            {/* Related Products */}
            <h2 className="text-2xl font-bold mt-12 mb-4">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {selectedProduct.relatedProducts && selectedProduct.relatedProducts.length > 0 ? (
                selectedProduct.relatedProducts.map((relatedProduct) => (
                  <div key={relatedProduct.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg">
                    <h3 className="text-lg font-semibold mt-2 text-center">{relatedProduct.name}</h3>
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors mt-2">
                      View Details
                    </button>
                  </div>
                ))
              ) : (
                <div>No related products available.</div> // Fallback message
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

