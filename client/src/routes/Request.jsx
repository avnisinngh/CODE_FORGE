import React, { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/ServerHelpers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Request = () => {
  const [itemName, setItemName] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [requesterName, setRequesterName] = useState("");
  const [requesterEmail, setRequesterEmail] = useState("");
  const [requesterPhone, setRequesterPhone] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRequestSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!itemName || !itemQuantity || !requesterName || !requesterEmail || !requesterPhone) {
      setError("All fields are required!");
      return;
    }

    const requestData = {
      Item_names: itemName,
      Item_quantity: itemQuantity,
      requester_name: requesterName,
      requester_email: requesterEmail,
      requester_phone: requesterPhone,
    };

    const response = await makeAuthenticatedPOSTRequest("/request/", requestData);

    if (response.err) {
      setError("Could not create request");
      return;
    }
    setSuccess("Request created successfully!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F28] flex items-center justify-center px-4 py-10 text-white">
      <motion.div className="w-full max-w-xl bg-[#11152F] p-10 rounded-2xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-extrabold text-center mb-2 glow-text">
          Food Request Form
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Submit a request for food items needed to help reduce food waste and support those in need.
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

        <form onSubmit={handleRequestSubmit} className="space-y-5">
          <InputField label="Item Name" value={itemName} setValue={setItemName} type="text" />
          <InputField label="Item Quantity" value={itemQuantity} setValue={setItemQuantity} type="number" />
          <InputField label="Requester Name" value={requesterName} setValue={setRequesterName} type="text" />
          <InputField label="Requester Email" value={requesterEmail} setValue={setRequesterEmail} type="email" />
          <InputField label="Requester Phone" value={requesterPhone} setValue={setRequesterPhone} type="text" />

          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#DADAFE] hover:bg-[#c4c4ff] text-[#0B0F28] font-bold py-3 rounded-xl transition-all"
          >
            Submit Request
          </motion.button>
        </form>
      </motion.div>

      <style>{`
        .inputBox {
          width: 100%;
          padding: 0.75rem 1rem;
          background-color: #161B3A;
          color: white;
          border-radius: 0.75rem;
          border: 1px solid #2c3053;
          outline: none;
          transition: all 0.3s ease;
        }
        .inputBox:focus {
          border-color: #aab0ff;
          box-shadow: 0 0 0 2px rgba(170, 176, 255, 0.2);
        }
        .glow-text {
          text-shadow: 0 0 8px #ffffffaa, 0 0 12px #ffffff77;
        }
      `}</style>
    </div>
  );
};

const InputField = ({ label, value, setValue, type }) => (
  <div>
    <label className="block text-gray-300 text-md font-medium mb-1">
      {label}:
    </label>
    <input
      type={type}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="inputBox"
      required
    />
  </div>
);

export default Request;
