"use client";

import Navbar from "@/components/Navbar"
import Secondbar from "@/components/Secondbar"
import Footer from "@/components/Footer"
import Subscribe from "@/components/Subscribe"

export default function Message() {
    return (
        <div>
            {/* Render Navbar */}
            <Navbar />

            {/* Render Secondbar */}
            <Secondbar />

            <div>
                <section id="contact" className="min-h-screen bg-gradient-to-br from-blue-200 via-white to-blue-200 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="text-4xl font-bold text-center text-black mb-8">Contact Us</h2>

                        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
                            <form action="#" method="POST">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            placeholder="Your full name"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Your email address"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        placeholder="Your message"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        required
                                    ></textarea>
                                </div>

                                <div className="mt-6 text-center">
                                    <button
                                        type="submit"
                                        className="bg-blue-500 text-white py-3 px-8 rounded-lg hover:bg-blue-600 transition-all"
                                    >
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>

            {/* Render Subscribe */}
            <Subscribe />
            
            {/* Render Footer */}
            <Footer />
        </div>
    );
}
