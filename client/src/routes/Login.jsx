import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { Link, useNavigate } from "react-router-dom";
import { makeUnauthenticatedPOSTRequest } from "../utils/ServerHelpers";
import { useCookies } from "react-cookie";

const Login = () => {
  const [Email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();

  const login = async () => {
    const data = {Email, password};
    const response = await makeUnauthenticatedPOSTRequest(
        "/auth/login",
        data
    );
    if (response && !response.err) {
        const token = response.token;
        const date = new Date();
        date.setDate(date.getDate() + 30);
        setCookie("token", token, {path: "/", expires: date});
        alert("Success");
        navigate("/");
    } else {
        alert("Failure");
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0B0F28] flex flex-col items-center justify-center px-4 py-10 text-white">
      <div className="p-5 w-full flex justify-center">
        <Icon icon="logos:food-donation" width="150" />
      </div>

      <div className="w-full max-w-md bg-[#11152F] p-10 rounded-2xl shadow-lg border border-white/10 mt-4">
        <h2 className="text-3xl font-extrabold text-center text-white mb-2 glow-text">
          Login to Your Account
        </h2>
        <p className="text-center text-gray-400 mb-8">
          Continue donating surplus food and help those in need.
        </p>

        <input
          type="email"
          placeholder="Email address"
          className="inputBox mb-4"
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="inputBox mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-[#DADAFE] hover:bg-[#c4c4ff] text-[#0B0F28] font-bold py-3 rounded-xl transition-all"
          onClick={(e) => {
            e.preventDefault();
            login();
          }}
        >
          Log In
        </button>

        <div className="w-full border-t border-white/10 my-6"></div>

        <p className="text-center text-gray-400 mb-2">Don't have an account?</p>
        <Link
          to="/signup"
          className="block text-center border border-white/20 text-white hover:bg-white/10 font-semibold py-3 rounded-xl transition-all"
        >
          Sign Up for Food Donation
        </Link>
      </div>

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

export default Login;
