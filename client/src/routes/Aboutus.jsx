// routes/AboutUs.jsx
import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-[#0a0f2c] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-7xl bg-[#111735] rounded-lg shadow-lg p-8 md:p-16">
        <h1 className="text-4xl font-bold text-center mb-6 drop-shadow-[0_0_5px_#e0e0ff]">
          About Nourish Connect
        </h1>
        <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
          Bridging the gap between surplus and scarcity — we connect those with extra food to those who need it most.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Our Mission */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#e0e0ff]">🌍 Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              Every year, tons of food go to waste while millions sleep hungry. At <strong>Nourish Connect</strong>, we're changing that. 
              We act as a digital bridge — enabling individuals, restaurants, and businesses to share their surplus food with NGOs and communities in need.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our goal is simple: <em>no food should go to waste, and no person should go hungry.</em> With technology and compassion, we strive to build a sustainable future where food connects us all.
            </p>
          </div>

          {/* Right: Why Choose Us */}
          <div className="space-y-5">
            <h2 className="text-2xl font-semibold text-[#e0e0ff]">✨ Why Choose Us?</h2>
            <ul className="space-y-3 text-gray-300 pl-5 list-disc">
              <li>📦 Effortless Food Donation in Just a Few Clicks</li>
              <li>🤝 Strong Partnerships with Verified NGOs</li>
              <li>📍 Real-Time Tracking for Pickup & Delivery</li>
              <li>🌱 Promotes Sustainability & Reduces Food Waste</li>
              <li>💡 Transparent, Secure & Tech-Driven Platform</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
