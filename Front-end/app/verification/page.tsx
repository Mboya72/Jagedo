"use client";
import { useState } from "react";
import Link from "next/link";

const CustomerS4 = () => {
  const [verificationCode, setVerificationCode] = useState("");
  const [usePhone, setUsePhone] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleCodeChange = (e) => {
    setVerificationCode(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const toggleMethod = () => {
    setUsePhone(!usePhone);
    setVerificationCode("");
  };

  return (
    <div className="min-h-screen bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4">
      <div className="flex flex-row justify-between bg-black/20 bg-gradient-to-r border-2 border-[#003B63] from-[#0097ff]/60 to-[#E31937]/50 px-40 py-20 rounded-2xl w-full h-[95vh] max-w-[95vw] shadow-lg">
        <div className="w-[700px]">
          <img src="/jagedologo.png" alt="Logo" />
          <h1 className="text-5xl font-semibold text-[#003B63] mb-1 mt-[25%] underline decoration-dotted decoration-3 decoration-[#003B63]">
            Verification
          </h1>

          <p className="mt-6">
            Enter the verification code sent to your {usePhone ? "phone" : "email"}.
          </p>

          {usePhone && (
            <input
              type="text"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handlePhoneChange}
              placeholder="Enter Phone Number"
              className="mt-4 block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
            />
          )}

          <input
            type="text"
            name="verificationCode"
            value={verificationCode}
            onChange={handleCodeChange}
            placeholder="Verification Code"
            className="mt-4 block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
          />

          <button
            onClick={toggleMethod}
            className="mt-4 text-sm text-blue-600 hover:underline"
          >
            {usePhone ? "Use Email Instead" : "Use Phone Instead"}
          </button>

          <div className="flex flex-row justify-between w-[700px] mt-6">
            <Link
              href="/customerS3"
              className="bg-[#0097FF] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#003B63] transition duration-300"
            >
              Previous
            </Link>
            <button
              className="bg-[#E31937] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#003B63] transition duration-300"
            >
              Verify
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center w-[800px] h-full">
          <img src="/customersignup.png" alt="Verification" className="max-w-[800px] self-end" />
        </div>
      </div>
    </div>
  );
};

export default CustomerS4;
