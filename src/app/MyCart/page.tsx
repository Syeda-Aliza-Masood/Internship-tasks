"use client"

import Image from 'next/image'
import Link from 'next/link'
import { MinusIcon, PlusIcon, TrashIcon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { useRouter } from 'next/navigation'
import Navbar from "@/components/Navbar"
import Subscribe from "@/components/Subscribe"
import Footer from "@/components/Footer"

// Mock cart data
const cartItems = [
  {
    id: 1,
    name: "Canon Camera EOS 900D",
    price: 700.00,
    quantity: 1,
    image: "/images/2.png",
    size: 5.5 ,
    color: "Red"
  },
  
]

const savedItems = [
  {
    id: 1,
    name: "Tablet Pro Max",
    price: 99.50,
    image: "/images/1.png"
  },
  {
    id: 2,
    name: "Smartphone 14",
    price: 99.50,
    image: "/images/3.png"
  },
  {
    id: 3,
    name: "Smartwatch Series 5",
    price: 99.50,
    image: "/images/5.png"
  },
  {
    id: 4,
    name: "Laptop Pro",
    price: 99.50,
    image: "/images/Laptop.png"
  }
]

export default function CartPage() {
  const router = useRouter()
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const discount = 24.00
  const total = subtotal - discount

  const handleCheckout = () => {
    router.push('/checkout')
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-semibold mb-6">My cart ({cartItems.length})</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-lg shadow">
              {cartItems.map((item, index) => (
                <div key={item.id} className="p-6">
                  <div className="flex gap-6">
                    <div className="relative w-24 h-24">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500">Size: {item.size}</p>
                      <p className="text-sm text-gray-500">Color: {item.color}</p>
                      <div className="mt-4 flex items-center gap-4">
                        <div className="flex items-center border rounded-md">
                          <button className="p-2 hover:bg-gray-100">
                            <MinusIcon className="h-4 w-4" />
                          </button>
                          <span className="px-4 py-2">{item.quantity}</span>
                          <button className="p-2 hover:bg-gray-100">
                            <PlusIcon className="h-4 w-4" />
                          </button>
                        </div>
                        <button className="text-red-500 hover:text-red-600">
                          <TrashIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">${item.price.toFixed(2)}</p>
                    </div>
                  </div>
                  {index < cartItems.length - 1 && (
                    <Separator className="mt-6" />
                  )}
                </div>
              ))}
            </div>

            {/* Saved For Later */}
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Saved for later</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {savedItems.map((item) => (
                  <div key={item.id} className="bg-white rounded-lg shadow p-4">
                    <div className="relative aspect-square mb-2">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <h3 className="font-medium text-sm">{item.name}</h3>
                    <p className="text-sm text-gray-500">${item.price.toFixed(2)}</p>
                    <Button variant="outline" size="sm" className="w-full mt-2">
                      Move to cart
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-4">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              
              {/* Coupon Code */}
              <div className="flex gap-2 mb-4">
                <Input placeholder="Have a coupon?" />
                <Button variant="outline">Apply</Button>
              </div>

              {/* Summary Details */}
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-600">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                className="w-full bg-blue-500 hover:bg-blue-700 text-white"
                onClick={handleCheckout}
              >
                Checkout
              </Button>

              {/* Payment Methods */}
              <div className="mt-4 flex justify-center gap-2">
                <Image src="/images/payment.jpg" alt="Visa" width={400} height={20} />
              </div>

             
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

