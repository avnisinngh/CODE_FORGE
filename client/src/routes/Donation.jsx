import { useState } from "react";
import { makeAuthenticatedPOSTRequest } from "../utils/ServerHelpers";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Donation = () => {
  const [Item_names, setItemName] = useState("");
  const [Item_quantity, setItemQuantity] = useState("");
  const [Item_pics, setItemPic] = useState("");
  const [donor_name, setDonorName] = useState("");
  const [donor_email, setDonorEmail] = useState("");
  const [donor_phone, setDonorPhone] = useState("");
  const [donor_address, setDonorAddress] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const submitDonation = async (e) => {
    e.preventDefault();
    const data = {
      Item_names,
      Item_quantity,
      Item_pics,
      donor_name,
      donor_email,
      donor_phone,
    };

    const response = await makeAuthenticatedPOSTRequest("/donate/", data);
    if (response.err) {
      setError("Could not create donation");
      return;
    }
    setSuccess("Donation created successfully!");
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F28] flex items-center justify-center px-4 py-10 text-white">
      <motion.div className="w-full max-w-xl bg-[#11152F] p-10 rounded-2xl shadow-lg border border-white/10">
        <h2 className="text-3xl font-extrabold text-center mb-2 glow-text">
          Donation Form
        </h2>
        <p className="text-center text-gray-400 mb-6">
          Help someone in need by donating surplus food items.
        </p>

        {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-sm text-center mb-4">{success}</p>}

        <form onSubmit={submitDonation} className="space-y-5">
          <InputField label="Item Name" value={Item_names} setValue={setItemName} type="text" />
          <InputField label="Item Quantity" value={Item_quantity} setValue={setItemQuantity} type="number" />
          <div>
            <label className="block text-white-700 text-lg font-medium">Item Image:</label>
            <input 
              type="file" 
              accept="image/*" 
              onChange={(e) => setItemPic(e.target.files[0])} 
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg shadow-md text-white"
              required 
            />
          </div>
          <InputField label="Donor Name" value={donor_name} setValue={setDonorName} type="text" />
          <InputField label="Donor Email" value={donor_email} setValue={setDonorEmail} type="email" />
          <InputField label="Donor Phone" value={donor_phone} setValue={setDonorPhone} type="text" />
          <InputField label="Donor Address" value={donor_address} setValue={setDonorAddress} type="text" />
          <motion.button
            type="submit"
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#DADAFE] hover:bg-[#c4c4ff] text-[#0B0F28] font-bold py-3 rounded-xl transition-all"
          >
            Donate Now
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

export default Donation;
