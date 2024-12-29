import Image from "next/image";
function Footer() {
  return (
    <div className="w-full mx-auto mt-6 bg-gray-100 p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {/* Column 1: Logo, Text, Image */}
        <div className="flex flex-col items-start mb-3 mt-8">
          <Image
            src="/logo.png"
            alt="Logo"
            width={200} // Adjusted to match the actual image dimensions
            height={100}
            priority // Optionally load the image eagerly
          />
          <p className="text-sm mt-1 mb-1">Best information about the company</p>
          <p className="text-sm mt-1 mb-1">Gies here lorem ipsum is</p>
          <Image
            src="/icon.png" // Replace with your 200x32 image
            alt="Footer Image"
            width={200} // Adjusted to match the actual image dimensions
            height={32}
            className="w-[200px] h-[32px] mt-5"
          />
        </div>

        {/* Column 2 - 6: Images */}
        <div className="flex items-center justify-center">
          <Image
            src="/about.png" // Replace with your image
            alt="Image 1"
            width={81} // Adjusted to match the actual image dimensions
            height={137}
            className="w-[81px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/partnership.png" // Replace with your image
            alt="Image 2"
            width={90} // Adjusted to match the actual image dimensions
            height={137}
            className="w-[90px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/info.png" // Replace with your image
            alt="Image 3"
            width={108} // Adjusted to match the actual image dimensions
            height={137}
            className="w-[108px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/user.png" // Replace with your image
            alt="Image 4"
            width={78} // Adjusted to match the actual image dimensions
            height={137}
            className="w-[78px] h-[137px] object-cover max-w-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <Image
            src="/app.png" // Replace with your image
            alt="Image 5"
            width={124} // Adjusted to match the actual image dimensions
            height={129}
            className="w-[124px] h-[129px] object-cover max-w-full"
          />
        </div>
      </div>

      {/* Footer Line */}
      <div className="mt-4 border-t border-gray-300 text-center pt-4">
        <p className="text-sm text-gray-500">© 2024 Developed by Syeda Aliza Masood.</p>
      </div>
    </div>
  );
}

export default Footer;
