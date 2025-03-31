import React from 'react';

const Features = () => {
  return (
    <div className="w-screen min-h-screen bg-[#0a0f2c] text-white flex items-center justify-center">
      <div className="w-full h-full bg-[#111735] px-6 md:px-12 lg:px-24 py-16 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-4 drop-shadow-[0_0_5px_#e0e0ff]">
            Why Nourish Connect?
          </h1>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            We believe no food should go to waste while people go hungry. Nourish Connect bridges the gap between surplus and scarcity — and here's how we make it happen.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#1c2442] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#e0e0ff] mb-2">🤝 NGO Partnerships</h3>
              <p className="text-gray-300">
                Verified NGOs are onboarded to receive real-time updates on surplus food donations and can quickly respond to local needs.
              </p>
            </div>

            <div className="bg-[#1c2442] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#e0e0ff] mb-2">🍱 Easy Donation Process</h3>
              <p className="text-gray-300">
                Restaurants, homes, and events can list surplus food with just a few clicks — making it effortless to contribute.
              </p>
            </div>

            <div className="bg-[#1c2442] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#e0e0ff] mb-2">📍 Smart Location Matching</h3>
              <p className="text-gray-300">
                We match donations with NGOs and individuals based on proximity, ensuring food reaches the right people in time.
              </p>
            </div>

            <div className="bg-[#1c2442] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#e0e0ff] mb-2">📊 Transparent Tracking</h3>
              <p className="text-gray-300">
                Every donation is logged and tracked, building trust and letting donors see the real-world impact of their kindness.
              </p>
            </div>

            <div className="bg-[#1c2442] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#e0e0ff] mb-2">🚀 Fast & Responsive Platform</h3>
              <p className="text-gray-300">
                Built with modern technology for speed, reliability, and ease — accessible on both desktop and mobile devices.
              </p>
            </div>

            <div className="bg-[#1c2442] p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-[#e0e0ff] mb-2">🌍 Social Impact Driven</h3>
              <p className="text-gray-300">
                Every action you take on our platform directly helps reduce hunger, minimize waste, and uplift communities in need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
