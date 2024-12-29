"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Secondbar from "@/components/Secondbar";
import Subscribe from "@/components/Subscribe";
import Footer from "@/components/Footer";
import { StarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type Product = {
  id: number;
  name: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  gallery: string[];
  specifications: { label: string; value: string }[];
  description: string;
  warranty: string;
};

const products: Record<number, Product> = {
  1: {
    id: 1,
    name: "Canon Camera EOS 900D",
    price: "$700.00",
    rating: 4,
    reviews: 23,
    image: "/images/2.png",
    gallery: ["/images/2.png", "/images/7.png", "/images/1.png", "/images/4.png"],
    specifications: [
      { label: "Brand", value: "Canon" },
      { label: "Model", value: "EOS 900D" },
      { label: "Sensor Type", value: "CMOS" },
      { label: "Resolution", value: "24.2 MP" },
      { label: "LCD Screen", value: "3.0 inch Vari-angle Touch Screen" },
      { label: "Video Resolution", value: "Full HD 1080p" },
      { label: "Connectivity", value: "Wi-Fi, NFC, Bluetooth" },
      { label: "Battery Life", value: "Up to 600 shots" },
    ],
    description: "Professional-grade DSLR camera with advanced features for both photography and videography.",
    warranty: "2 years manufacturer warranty",
  },
  2: {
    id: 2,
    name: "GoPro HERO 9",
    price: "$500.00",
    rating: 4,
    reviews: 18,
    image: "/images/1.png",
    gallery: ["/images/1.png", "/images/7.png", "/images/4.png", "/images/2.png"],
    specifications: [
      { label: "Brand", value: "GoPro" },
      { label: "Model", value: "HERO 9" },
      { label: "Resolution", value: "5K" },
      { label: "LCD Screen", value: "2.27 inch Touch Screen" },
      { label: "Waterproof", value: "Up to 10 meters" },
      { label: "Connectivity", value: "Wi-Fi, Bluetooth" },
      { label: "Battery Life", value: "Up to 2 hours" },
    ],
    description: "Capture your adventures in stunning 5K resolution with the GoPro HERO 9.",
    warranty: "1 year manufacturer warranty",
  },
  3: {
    id: 3,
    name: "Nikon D5600 DSLR",
    price: "$650.00",
    rating: 5,
    reviews: 12,
    image: "/images/3.png",
    gallery: ["/images/3.png", "/images/6.png", "/images/2.png", "/images/1.png"],
    specifications: [
      { label: "Brand", value: "Nikon" },
      { label: "Model", value: "D5600" },
      { label: "Sensor Type", value: "APS-C CMOS" },
      { label: "Resolution", value: "24.2 MP" },
      { label: "ISO Range", value: "100-25600" },
      { label: "Connectivity", value: "Wi-Fi, NFC, Bluetooth" },
      { label: "Battery Life", value: "Up to 970 shots" },
    ],
    description: "Compact DSLR camera with exceptional image quality and creative tools.",
    warranty: "2 years manufacturer warranty",
  },
  4: {
    id: 4,
    name: "Sony Alpha a6400",
    price: "$900.00",
    rating: 4,
    reviews: 30,
    image: "/images/4.png",
    gallery: ["/images/4.png", "/images/3.png", "/images/1.png", "/images/6.png"],
    specifications: [
      { label: "Brand", value: "Sony" },
      { label: "Model", value: "Alpha a6400" },
      { label: "Sensor Type", value: "APS-C CMOS" },
      { label: "Resolution", value: "24.2 MP" },
      { label: "Video Resolution", value: "4K UHD" },
      { label: "LCD Screen", value: "3.0 inch Touch Screen" },
      { label: "Battery Life", value: "Up to 410 shots" },
    ],
    description: "High-performance mirrorless camera perfect for both photography and vlogging.",
    warranty: "2 years manufacturer warranty",
  },
  5: {
    id: 5,
    name: "DJI Osmo Pocket 2",
    price: "$350.00",
    rating: 5,
    reviews: 10,
    image: "/images/5.png",
    gallery: ["/images/5.png", "/images/7.png", "/images/3.png", "/images/6.png"],
    specifications: [
      { label: "Brand", value: "DJI" },
      { label: "Model", value: "Osmo Pocket 2" },
      { label: "Camera Type", value: "Handheld Gimbal" },
      { label: "Resolution", value: "4K" },
      { label: "LCD Screen", value: "1.08 inch Touch Screen" },
      { label: "Battery Life", value: "140 minutes" },
    ],
    description: "Compact handheld camera with stabilization for professional-quality videos.",
    warranty: "1 year manufacturer warranty",
  },
  6: {
    id: 6,
    name: "Fujifilm X-T30 II",
    price: "$1,100.00",
    rating: 4,
    reviews: 15,
    image: "/images/6.png",
    gallery: ["/images/6.png", "/images/4.png", "/images/3.png", "/images/7.png"],
    specifications: [
      { label: "Brand", value: "Fujifilm" },
      { label: "Model", value: "X-T30 II" },
      { label: "Sensor Type", value: "APS-C X-Trans CMOS" },
      { label: "Resolution", value: "26.1 MP" },
      { label: "Video Resolution", value: "4K UHD" },
      { label: "Connectivity", value: "Wi-Fi, Bluetooth" },
      { label: "Battery Life", value: "Up to 380 shots" },
    ],
    description: "Stylish and compact mirrorless camera with outstanding performance.",
    warranty: "2 years manufacturer warranty",
  },
};


const Breadcrumbs = ({ product }: { product: Product }) => (
  <nav className="bg-gray-100 py-2 px-4 rounded-md shadow-inner" aria-label="Breadcrumb">
    <ol className="list-none flex items-center flex-wrap">
      <li className="inline-flex items-center">
        <Link href="/" className="text-gray-600 hover:text-blue-500 font-medium">
          Home
        </Link>
        <span className="mx-2 text-gray-400">/</span>
      </li>
      <li className="inline-flex items-center">
        <Link href="/Order" className="text-gray-600 hover:text-blue-500 font-medium">
          Order
        </Link>
        <span className="mx-2 text-gray-400">/</span>
      </li>
      <li className="inline-flex items-center">
        <span className="text-gray-800 font-medium">{product.name}</span>
      </li>
    </ol>
  </nav>
);

export default function ProductDetail() {
  const params = useParams();
  const productId = typeof params.id === "string" ? parseInt(params.id, 10) : null;

  const product = productId ? products[productId] : null;

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Product not found</h1>
          <p className="mt-2 text-gray-600">The product you are looking for does not exist.</p>
          <Link href="/Order">
            <Button className="mt-4">Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Secondbar />

      <div className="container mx-auto px-4 py-8">
        <Breadcrumbs product={product} />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
              <Image src={product.image} alt={product.name} fill className="object-cover" priority />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((image, i) => (
                <div key={i} className="aspect-square relative overflow-hidden rounded-lg bg-gray-100">
                  <Image src={image} alt={`${product.name} view ${i + 1}`} fill className="object-cover" />
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
            <div className="mt-4 flex items-center">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon
                    key={i}
                    className={`h-5 w-5 ${i < product.rating ? "fill-current" : "stroke-current opacity-25"}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">({product.reviews} reviews)</span>
            </div>

            <div className="text-3xl font-bold text-blue-500">{product.price}</div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Specifications</h3>
              <dl className="mt-4 space-y-4">
                {product.specifications.map((spec, index) => (
                  <div key={index} className="grid grid-cols-3 gap-4 py-3 border-b border-gray-100">
                    <dt className="text-sm font-medium text-gray-500">{spec.label}</dt>
                    <dd className="text-sm text-gray-900 col-span-2">{spec.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Description</h3>
              <p className="mt-4 text-sm text-gray-600">{product.description}</p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-lg font-medium text-gray-900">Warranty</h3>
              <p className="mt-4 text-sm text-gray-600">{product.warranty}</p>
            </div>

            <Link href="/MyCart">
              <Button className="w-full bg-blue-600 text-white rounded-md hover:bg-blue-700 py-5">
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <Subscribe />
      <Footer />
    </div>
  );
}
