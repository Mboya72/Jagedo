"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";


const customerS2 = () => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const [formData, setFormData] = useState({
    country: "",
    city: "",
    postalCode: "",
    address: "",
  });
  

  return   <div className="min-h-screen bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4">
  <div className="flex flex-row justify-between bg-black/20 bg-gradient-to-r border-2 border-[#003B63] from-[#0097ff]/60 to-[#E31937]/50 px-40 py-20 rounded-2xl w-full h-[95vh] max-w-[95vw] shadow-lg">
    <div className="w-[700px] ">
      <img src="/jagedologo.png" alt="Logo" />
      <h1 className="text-5xl font-semibold text-[#003B63] mb-1 mt-[25%] underline decoration-dotted decoration-3 decoration-[#003B63]">
        Customer
      </h1>
     <p>Location</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
  <input
    type="text"
    name="country"
    value={formData.country}
    onChange={handleInputChange}
    placeholder="Country"
    className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
  />
  <input
    type="text"
    name="city"
    value={formData.city}
    onChange={handleInputChange}
    placeholder="City / Town"
    className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
  />
  <input
    type="text"
    name="postalCode"
    value={formData.postalCode}
    onChange={handleInputChange}
    placeholder="Postal Code"
    className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
  />
  <input
    type="text"
    name="address"
    value={formData.address}
    onChange={handleInputChange}
    placeholder="Street Address"
    className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
  />
</div>

      <div className="flex flex-row justify-between w-[700px] ">
        <Link
        href="/customersignup"
         className="mt-6 bg-[#0097FF] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#003B63] transition duration-300"
        >
        Previous
        </Link>
        <Link
      href="/customersS3"
      className="mt-6 bg-[#E31937] text-white font-semibold  py-2 px-4 rounded-md hover:bg-[#003B63] transition duration-300"
      >Next</Link> 
      </div>
    </div>
    <div className=" flex flex-col items-center w-[800px] h-full ">
      <img src="/customersignup.png" alt="" className="max-w-[800px] self-end " />
    </div>
  </div>
</div>;
};
export default customerS2;
