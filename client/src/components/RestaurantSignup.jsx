import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import api from "../utils/api";
import { motion } from "framer-motion";

const RestaurantSignup = () => {
  const [organizationName, setOrganizationName] = useState("");
  const [organizationType, setOrganizationType] = useState("");
  const [organizationAddress, setOrganizationAddress] = useState("");
  const [organizationContact, setOrganizationContact] = useState("");
  const [organizationEmail, setOrganizationEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [error, setError] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await api.post("/resturent/signup", {
        Organization_Name: organizationName,
        Organization_Type: organizationType,
        Organization_Address: organizationAddress,
        Organization_Contact: organizationContact,
        Organization_Email: organizationEmail,
        password,
        GST_Number: gstNumber,
      });

      const token = response.data.token;
      localStorage.setItem("token", token);
      navigate("/restaurant-login");
    } catch (error) {
      setError("Signup failed. Please check your details and try again.");
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-xl mx-auto my-10 bg-gradient-to-r from-green-300 to-green-500 p-8 rounded-xl shadow-lg"
    >
      <h2 className="text-3xl font-bold text-center text-white mb-6">Restaurant Signup</h2>

      {error && (
        <div className="bg-red-100 text-red-600 text-center p-2 mb-4 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSignup} className="space-y-5">
        {[
          { label: "Organization Name", value: organizationName, setValue: setOrganizationName },
          { label: "Organization Type", value: organizationType, setValue: setOrganizationType },
          { label: "Address", value: organizationAddress, setValue: setOrganizationAddress },
          { label: "Contact Number", type: "number", value: organizationContact, setValue: setOrganizationContact },
          { label: "Email", type: "email", value: organizationEmail, setValue: setOrganizationEmail },
          { label: "Password", type: "password", value: password, setValue: setPassword },
          { label: "GST Number", type: "number", value: gstNumber, setValue: setGstNumber },
        ].map((field, i) => (
          <div key={i}>
            <label className="block text-white font-medium mb-1">
              {field.label}
            </label>
            <input
              type={field.type || "text"}
              value={field.value}
              onChange={(e) => field.setValue(e.target.value)}
              required
              className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
          </div>
        ))}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          type="submit"
          className="w-full bg-green-700 hover:bg-green-800 text-white py-2 rounded-md font-semibold transition duration-300"
        >
          Sign Up
        </motion.button>
      </form>
    </motion.div>
  );
};

export default RestaurantSignup;
