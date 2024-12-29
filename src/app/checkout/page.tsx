"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import Navbar from "@/components/Navbar"
import Subscribe from "@/components/Subscribe"
import Footer from "@/components/Footer"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "sonner"

export default function CheckoutPage() {
  const router = useRouter()
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderPlaced, setOrderPlaced] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000))

    // Show success toast message
    toast.success("Thanks for your order! We'll process it soon.", {
      duration: 3000,
    })

    // Mark order as placed and stop processing
    setOrderPlaced(true)
    setIsProcessing(false)

    // Redirect to home after 3 seconds
    setTimeout(() => {
      router.push('/')
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Include Navbar at the top */}
      <Navbar />

      <div className="container mx-auto px-4 py-5">
        <h1 className="text-3xl font-bold text-center mb-8">Checkout</h1>
        
        {orderPlaced ? (
          <div className="text-center text-green-600">
            <h2 className="text-xl font-bold">Thanks for your order!</h2>
            <p>Your order is being processed. You will be redirected shortly.</p>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 md:grid-cols-2">
                {/* Shipping Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                    <CardDescription>Enter your shipping details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="address">Address</Label>
                      <Input id="address" required />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input id="city" required />
                      </div>
                      <div>
                        <Label htmlFor="postalCode">Postal Code</Label>
                        <Input id="postalCode" required />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Payment Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Method</CardTitle>
                    <CardDescription>Select your payment method</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <RadioGroup defaultValue="card" className="space-y-4">
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="card" id="card" />
                        <Label htmlFor="card" className="flex-1">Credit/Debit Card</Label>
                        
                      </div>
                      <div className="flex items-center space-x-2 border rounded-lg p-4">
                        <RadioGroupItem value="paypal" id="paypal" />
                        <Label htmlFor="paypal">PayPal</Label>
                      </div>
                    </RadioGroup>

                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiry">Expiry Date</Label>
                          <Input id="expiry" placeholder="MM/YY" required />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input id="cvv" placeholder="123" required />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>$700.00</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-$24.00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>Free</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>$676.00</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 text-white hover:bg-blue-700" 
                    disabled={isProcessing}
                  >
                    {isProcessing ? "Processing..." : "Place Order"}
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </div>
        )}
      </div>

      {/* Include Subscribe section */}
      <Subscribe />

      {/* Include Footer at the bottom */}
      <Footer />
    </div>
  )
}
