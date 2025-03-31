import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-[#0a0f2c] text-white flex items-center justify-center">
      <div className="w-full h-full bg-[#111735] px-6 md:px-12 py-12 md:py-16 lg:px-24 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-center drop-shadow-[0_0_5px_#e0e0ff]">
            Get in Touch With Us
          </h1>
          <p className="text-center text-gray-300 mb-10 max-w-3xl mx-auto">
            Whether you're an NGO, restaurant, or individual — if you have surplus food or need help, we'd love to hear from you. Let's work together to eliminate food waste and feed the hungry.
          </p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Contact Form */}
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-md bg-[#1c2442] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e0e0ff]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-md bg-[#1c2442] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#e0e0ff]"
              />
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 rounded-md bg-[#1c2442] text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-[#e0e0ff]"
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-[#e0e0ff] text-[#0a0f2c] font-semibold py-2 rounded-md hover:bg-transparent hover:text-white border-2 border-[#e0e0ff] transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Contact Info */}
            <div className="grid gap-6">
              <div className="bg-[#1c2442] p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#e0e0ff] mb-1">📧 Email</h3>
                <p className="text-gray-300">support@nourishconnect.org</p>
              </div>
              <div className="bg-[#1c2442] p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#e0e0ff] mb-1">📞 Phone</h3>
                <p className="text-gray-300">+91 9876543210</p>
              </div>
              <div className="bg-[#1c2442] p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#e0e0ff] mb-1">📍 Location</h3>
                <p className="text-gray-300">New Delhi, India</p>
              </div>
              <div className="bg-[#1c2442] p-5 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-[#e0e0ff] mb-1">🕒 Working Hours</h3>
                <p className="text-gray-300">Mon - Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
