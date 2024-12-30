const SendQuote = () => {
  return (
    <div
      className="w-[1180px] h-[420px] relative rounded-md mx-auto bg-custom-image-3 sm:bg-contain sm:block hidden"
    >
      {/* Overlay Container */}
      <div className="absolute inset-0 flex items-center justify-between p-10 flex-col sm:flex-row">
        {/* Left Section - Text */}
        <div className="text-white space-y-4 max-w-lg text-center sm:text-left">
          <h1 className="text-3xl font-bold leading-snug">
            An Easy Way to Send Requests to All Suppliers
          </h1>
          <p className="text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Vestibulum a diam ante. Sed malesuada turpis eget ligula hendrerit, <br />
            non volutpat nulla vehicula.
          </p>
        </div>

        {/* Right Section - White Form Box (Hidden on mobile) */}
        <div className="bg-white p-6 rounded-md shadow-lg max-w-md w-full">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Quote to Suppliers
          </h2>

          {/* Form Fields */}
          <div className="space-y-4">
            {/* Item Input */}
            <div>
              <label htmlFor="item" className="text-sm text-gray-700">
                What item do you need?
              </label>
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
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  id="quantity"
                  placeholder="Quantity"
                  className="w-full h-10 p-2 mt-2 border border-gray-300 rounded-md"
                />
              </div>
              <div className="flex-1">
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
    </div>
  );
};

export default SendQuote;
