import Image from 'next/image';

function SubscribeSection() {
  return (
    <div className="w-full sm:w-[650px] md:w-[900px] lg:w-[1350px] h-auto mx-auto mt-6 bg-gray-300 p-4 flex flex-col justify-center items-center">
      {/* Heading Text */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2 text-center">
        Subscribe to our newsletter
      </h2>

      {/* Subheading Text */}
      <p className="text-sm sm:text-lg text-gray-600 mb-4 text-center">
        Get daily news on upcoming offers from many suppliers all over the world.
      </p>

      {/* Search Bar and Subscribe Button */}
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Email Input */}
        <div className="relative w-full sm:w-auto">
          <input
            type="email"
            placeholder="Email"
            className="w-full sm:w-[350px] h-[40px] pl-10 pr-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {/* Email Icon */}
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
            <Image
              src="/email.png" // Ensure this file is in the /public directory
              alt="Email Icon"
              width={20} // Adjust width as necessary
              height={20} // Adjust height as necessary
            />
          </div>
        </div>

        {/* Subscribe Button */}
        <button className="w-full sm:w-auto px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">
          Subscribe
        </button>
      </div>
    </div>
  );
}

export default SubscribeSection;
