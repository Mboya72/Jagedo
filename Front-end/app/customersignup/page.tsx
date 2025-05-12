"use client";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import Link from "next/link";

const CustomerSignup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [genderOpen, setGenderOpen] = useState(false);
  const [selected, setSelected] = useState("Select Account Type");
  const [selectedGender, setSelectedGender] = useState("Select Gender");

  const [formData, setFormData] = useState({
    organizationName: "",
    email: "",
    contactPersonFirstName: "",
    contactPersonLastName: "",
    phoneNumber: "",
    gender: "",
    firstName: "",
    lastName: "",
  });

  const options = ["Individual", "Organization"];
  const genderOptions = ["Male", "Female"];

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    setSelectedGender("Select Gender");
    setGenderOpen(false);
    setFormData({
      organizationName: "",
      email: "",
      contactPersonFirstName: "",
      contactPersonLastName: "",
      phoneNumber: "",
      gender: "",
      firstName: "",
      lastName: "",
    });
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setGenderOpen(false);
    setFormData((prevData) => ({
      ...prevData,
      gender: gender.toLowerCase(),
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4">
      <div className="flex flex-row justify-between bg-black/20 bg-gradient-to-r border-2 border-[#003B63] from-[#0097ff]/60 to-[#E31937]/50 px-40 py-20 rounded-2xl w-full h-[95vh] max-w-[95vw] shadow-lg">
        <div className="w-[700px] ">
          <img src="/jagedologo.png" alt="Logo" />
          <h1 className="text-5xl font-semibold text-[#003B63] mb-1 mt-[25%] underline decoration-dotted decoration-3 decoration-[#003B63]">
            Customer
          </h1>
          <p>Personal Details</p>
          {/* Account Type and Gender Dropdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {/* Account Type */}
            <div className="relative mt-6">
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-left text-lg bg-black/20 flex justify-between items-center"
              >
                {selected}
                <FaChevronDown
                  className={`ml-2 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>
              {isOpen && (
                <ul className="absolute z-10 mt-2 w-full bg-white border text-[#E31937] border-gray-300 rounded-md shadow-md">
                  {options.map((option) => (
                    <li
                      key={option}
                      onClick={() => handleSelect(option)}
                      className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg"
                    >
                      {option}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Gender (only for Individual) */}
            {selected === "Individual" && (
              <div className="relative mt-6">
                <button
                  type="button"
                  onClick={() => setGenderOpen(!genderOpen)}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 text-left text-lg bg-black/20 flex justify-between items-center"
                >
                  {selectedGender}
                  <FaChevronDown
                    className={`ml-2 transition-transform duration-300 ${
                      genderOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>
                {genderOpen && (
                  <ul className="absolute z-10 mt-2 w-full bg-white border text-[#E31937] border-gray-300 rounded-md shadow-md">
                    {genderOptions.map((gender) => (
                      <li
                        key={gender}
                        onClick={() => handleGenderSelect(gender)}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-lg"
                      >
                        {gender}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>

          {/* Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
            {selected === "Organization" ? (
              <>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  placeholder="Organization Name"
                  className="block w-full px-4 py-2 border focus:outline-none bg-black/10 border-gray-300 rounded-md"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="contactPersonFirstName"
                  value={formData.contactPersonFirstName}
                  onChange={handleInputChange}
                  placeholder="Contact Person First Name"
                  className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="contactPersonLastName"
                  value={formData.contactPersonLastName}
                  onChange={handleInputChange}
                  placeholder="Contact Person Last Name"
                  className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="block w-full px-4 py-2 focus:outline-none border bg-black/10 border-gray-300 rounded-md"
                />
              </>
            ) : (
              <>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  className="block w-full px-4 py-2 border bg-black/10 focus:outline-none border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  className="block w-full px-4 py-2 border focus:outline-none bg-black/10 border-gray-300 rounded-md"
                />
                <input
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="block w-full px-4 py-2 border focus:outline-none bg-black/10 border-gray-300 rounded-md"
                />
              </>
            )}
          </div>
          <div className="flex flex-col w-[700px] ">
            <Link
          href="/customersS2"
          className="mt-6 bg-[#E31937] text-white font-semibold self-end py-2 px-4 rounded-md hover:bg-[#003B63] transition duration-300"
          >Next</Link> 
          </div>
        </div>
        <div className=" flex flex-col items-center w-[800px] h-full ">
          <img src="/customersignup.png" alt="" className="max-w-[800px] self-end " />
        </div>
      </div>
    </div>
  );
};

export default CustomerSignup;
