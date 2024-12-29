"use client";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from "@/components/Navbar";
import Secondbar from "@/components/Secondbar";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import FilterComponent from "@/components/FilterComponent";

// Breadcrumbs Component
interface Breadcrumb {
  label: string;
  href: string;
}

const Breadcrumbs: React.FC<{ paths: Breadcrumb[] }> = ({ paths }) => {
  return (
    <nav className="bg-gray-100 py-2 px-4 rounded-md shadow-inner">
      <ol className="list-none flex items-center flex-wrap">
        {paths.length === 0 ? (
          <span className="text-gray-500">No breadcrumbs available</span>
        ) : (
          paths.map((path, index) => (
            <li key={index} className="inline-flex items-center">
              <Link href={path.href} className="text-gray-600 hover:text-blue-500 font-medium cursor-pointer">
                {path.label}
              </Link>
              {index < paths.length - 1 && (
                <span className="mx-2 text-gray-400">/</span>
              )}
            </li>
          ))
        )}
      </ol>
    </nav>
  );
};

// HomePage Component
interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  rating: number;
}

const HomePage = () => {
  const breadcrumbsPaths: Breadcrumb[] = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Electronics", href: "/shop/electronics" },
  ];

  const products: Product[] = [
    { id: 1, name: "Canon Camera EOS 900D", price: "$700.00", image: "/images/2.png", rating: 4 },
    { id: 2, name: "Canon Camera EOS 900D", price: "$700.00", image: "/images/7.png", rating: 5 },
    { id: 3, name: "GoPro HERO 9", price: "$500.00", image: "/images/1.png", rating: 4 },
    { id: 4, name: "Laptop", price: "$1,200.00", image: "/images/4.png", rating: 5 },
    { id: 5, name: "Apple Watch Series 8", price: "$399.00", image: "/images/5.png", rating: 3 },
    { id: 6, name: "Sony Headphones", price: "$299.00", image: "/images/12.png", rating: 4 },
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      <Secondbar />

      <div className="container mx-auto mt-6 px-6">
        <Breadcrumbs paths={breadcrumbsPaths} />
      </div>

      <div className="container mx-auto flex flex-col lg:flex-row mt-6 px-6 space-y-6 lg:space-y-0 lg:space-x-6">
        <aside className="bg-white shadow rounded-lg p-4 w-full lg:w-1/4">
          <FilterComponent onChange={(filters) => console.log(filters)} />
        </aside>

        <main className="flex-1">
          <div className="space-y-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow rounded-lg flex items-center p-4"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  width={128}
                  height={128}
                  className="object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-medium text-gray-700">{product.name}</h3>
                  <p className="text-lg font-bold text-blue-500">{product.price}</p>

                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex text-yellow-400">
                      {"★".repeat(product.rating)}
                    </div>
                    <span className="text-green-500 text-sm">Free Shipping</span>
                  </div>

                  <p className="text-sm text-gray-500 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <Link href={`/Order/${product.id}`}>
                    <button className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
};

export default HomePage;
