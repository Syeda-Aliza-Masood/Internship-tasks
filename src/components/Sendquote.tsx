
const SendQuote = () => {
    return (
      <div className="w-[1180px] h-[420px] relative rounded-md mx-auto">
        {/* Left Section - Background Image */}
        <div
          className="w-full h-full bg-cover bg-center rounded-md"
          style={{ backgroundImage: 'url("/22.png")' }} // Ensure the image is placed in the `/public` folder
        >
          {/* Text Section on Top of Background */}
          <div className="absolute top-1/4 left-10 text-white space-y-4">
            {/* Heading */}
            <h1 className="text-3xl font-bold">An Easy Way to Send</h1>
            {/* Subheading */}
            <h1 className="text-3xl font-bold">Requests to All Suppliers</h1>
            {/* Lorem Ipsum Text */}
            <p className="text-sm mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
              Vestibulum a diam ante. Sed malesuada turpis eget ligula hendrerit, <br />
              non volutpat nulla vehicula.
            </p>
          </div>
        </div>
  
        {/* Right Section - White Box with Space from Right */}
        <div className="absolute top-1/2 right-3 transform -translate-y-1/2 w-full sm:w-3/4 md:w-2/5 lg:w-2/5 bg-white p-4 rounded-md shadow-lg">
          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
            Send Quote to Suppliers
          </h2>
  
          {/* Form Fields */}
          <div className="space-y-4">
            {/* Item Input */}
            <div>
              <label htmlFor="item" className="text-sm sm:text-base text-gray-700">What item do you need?</label>
              <input
                type="text"
                id="item"
                placeholder="Type item name"
                className="w-full h-10 p-2 mt-2 border border-gray-300 rounded-md"
              />
            </div>
  
            {/* Details Input */}
            <div>
              <textarea
                id="details"
                placeholder="Type more details"
                className="w-full h-20 p-2 mt-2 border border-gray-300 rounded-md"
              ></textarea>
            </div>
  
            {/* Quantity and Units */}
            <div className="flex flex-wrap sm:flex-nowrap space-x-0 sm:space-x-4 items-center">
              <div className="w-full sm:w-1/2">
                <input
                  type="number"
                  id="quantity"
                  placeholder="Quantity"
                  className="w-full h-10 p-2 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="w-full sm:w-1/2">
                <select
                  id="units"
                  className="w-full h-10 p-2 mt-2 border border-gray-300 rounded-md"
                >
                  <option value="pcs">Pcs</option>
                  <option value="kg">Kg</option>
                  <option value="box">Box</option>
                </select>
              </div>
            </div>
  
            {/* Send Inquiry Button */}
            <button className="w-full py-2 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600">
              Send Inquiry
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default SendQuote;
  