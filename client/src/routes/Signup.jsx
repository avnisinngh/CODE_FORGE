import React, { useState } from "react";
import { useCookies } from "react-cookie";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/ServerHelpers";

function Signup() {
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Contact, setContact] = useState("");
  const [Email, setEmail] = useState("");
  const [ConfirmEmail, setConfirmEmail] = useState("");
  const [password, setPassword] = useState("");
  const [AadharNumber, setAadharNumber] = useState("");
  const [role, setRole] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const signUp = async () => {
    if (Email !== ConfirmEmail) {
      alert("Email and confirm email fields must match. Please check again");
      return;
    }
    const data = { Name, Address, Contact, Email, password, AadharNumber, role };

    const response = await makeUnauthenticatedPOSTRequest("/auth/register", data);
    if (response && !response.err) {
      const token = response.token;
      const date = new Date();
      date.setDate(date.getDate() + 30);
      setCookie("token", token, { path: "/", expires: date });
      alert("Success");
      navigate("/");
    } else {
      alert("Failure");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0e27] flex flex-col items-center justify-center px-4 py-10 text-white">
      <div className="p-5 border-b border-white/10 w-full flex justify-center">
        <Icon icon="logos:food-donation" width="150" />
      </div>

      <div className="w-full max-w-xl bg-[#11152f] p-10 rounded-2xl shadow-lg border border-white/10 mt-10">
        <h2 className="text-4xl font-extrabold text-center text-white drop-shadow-md mb-4">
          <span className="text-[#e0e5ff] glow">Create Your Account</span>
        </h2>
        <p className="text-center text-gray-300 mb-8">
          Join us in donating surplus food and making a difference!
        </p>

        <div className="flex flex-col gap-4">
          {[
            { label: "Full Name", value: Name, setValue: setName },
            { label: "Address", value: Address, setValue: setAddress },
            { label: "Contact Number", value: Contact, setValue: setContact },
            { label: "Email Address", value: Email, setValue: setEmail },
            { label: "Confirm Email", value: ConfirmEmail, setValue: setConfirmEmail },
            { label: "Password", value: password, setValue: setPassword, type: "password" },
            { label: "Aadhar Number", value: AadharNumber, setValue: setAadharNumber },
          ].map((field, index) => (
            <div key={index} className="inputContainer">
              <input
                type={field.type || "text"}
                placeholder={field.label}
                value={field.value}
                onChange={(e) => field.setValue(e.target.value)}
                className="inputField"
              />
            </div>
          ))}

          {/* Fixed Role Dropdown Visibility Issue */}
          <div className="inputContainer">
            <select
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="inputField bg-[#0b0f2a] text-white appearance-none"
            >
              <option value="" className="bg-[#0b0f2a] text-white">Select Role</option>
              <option value="Restaurant" className="bg-[#0b0f2a] text-white">Restaurant</option>
              <option value="NGO" className="bg-[#0b0f2a] text-white">NGO</option>
              <option value="Individual" className="bg-[#0b0f2a] text-white">Individual</option>
            </select>
          </div>
        </div>

        <button
          className="w-full bg-[#d6d8ff] text-[#0a0e27] font-bold py-3 rounded-xl mt-8 transition-all hover:scale-[1.02] shadow-md hover:shadow-purple-300"
          onClick={signUp}
        >
          Create Account
        </button>

        <p className="text-sm text-center text-gray-400 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#90a0ff] underline hover:text-white">
            Login to Your Account
          </Link>
        </p>
      </div>

      <style>{`
        .inputContainer {
          background-color: #0b0f2a;
          border-radius: 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 12px 15px;
          display: flex;
          align-items: center;
          transition: all 0.2s ease-in-out;
        }

        .inputField {
          width: 100%;
          background: transparent;
          outline: none;
          border: none;
          color: white;
          font-size: 16px;
        }

        .inputContainer:focus-within {
          border-color: rgba(144, 160, 255, 0.8);
          box-shadow: 0px 0px 10px rgba(144, 160, 255, 0.3);
        }

        .glow {
          text-shadow: 0 0 10px #cdd6ff, 0 0 20px #cdd6ff;
        }
      `}</style>
    </div>
  );
}

export default Signup;
