"use client";
import { useState } from "react";
import localFont from "next/font/local";
import Link from "next/link";

const digital = localFont({
  src: "../public/fonts/digital-7.ttf",
  display: "swap",
});

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      <div className="bg-[url('/jagedoback.png')] bg-cover bg-no-repeat min-h-screen pb-3">
        <div className="flex items-center justify-between bg-white/10 backdrop-blur-[70px] h-16 px-6 sm:px-20">
          <div className="text-[#0097ff] font-bold text-2xl">
            <h1>
              Ja<span className="text-[#E31937]">Gedo</span>
            </h1>
          </div>
          <div className="sm:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex gap-12 text-white font-light text-md">
            <Link href="#">Home</Link>
            <Link href="#how-it-works">How it works</Link>
            <Link href="#services">Services</Link>
            <Link href="#contact">Contact Us</Link>
          </div>
          <div className="hidden sm:flex gap-6 text-white font-extralight">
            <Link className="bg-[#0061FE] px-2 rounded-full" href="/Login">
              Login
            </Link>
            <Link className="bg-[#E31937] px-2 rounded-full" href="/Register">
              Register
            </Link>
            <Link className="bg-[#0061FE] px-2 rounded-full" href="#contact">
              Contact
            </Link>
          </div>
        </div>
        {menuOpen && (
          <div className="sm:hidden absolute top-16 left-0 w-full z-50 bg-black/60 text-white px-6 py-4 flex flex-col gap-4">
            <Link href="#" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="#how-it-works" onClick={() => setMenuOpen(false)}>
              How it works
            </Link>
            <Link href="#services" onClick={() => setMenuOpen(false)}>
              Services
            </Link>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              Contact Us
            </Link>
            <Link
              className="bg-[#0061FE] px-2 rounded-full"
              href="/Login"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              className="bg-[#E31937] px-2 rounded-full"
              href="/Register"
              onClick={() => setMenuOpen(false)}
            >
              Register
            </Link>
            <Link
              className="bg-[#0061FE] px-2 rounded-full"
              href="/Contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        )}
        <div id="home" className="mt-20 sm:mt-60 sm:ml-20 ml-3">
          <div className="text-6xl sm:text-5xl md:text-8xl font-extrabold">
            <h1 className="text-[#0097ff] font-bold text-3xl">
              Ja<span className="text-[#E31937]">Gedo</span>
            </h1>
            <h2>
              Turning In Mind <span className="text-[#0097ff]">Blue</span>prints
            </h2>
            <h2>into Real Empires.</h2>
            <p className="font-extralight text-xl">
              Connect with trusted artisans, manage your workflow, and bring
              your vision to life — all in one platform.
            </p>
          </div>
          <div className="flex flex-wrap gap-12 text-black text-2xl mt-15">
            <Link href="/Fundi" className=" bg-[#0097ff] px-2 rounded-lg py-2">
              {" "}
              Fundi{" "}
            </Link>
            <Link
              href="/Professional"
              className=" bg-[#0097ff] px-2 rounded-lg py-2"
            >
              Professional
            </Link>
            <Link
              href="/Hardware"
              className=" bg-[#0097ff] px-2 rounded-lg py-2"
            >
              {" "}
              Hardware
            </Link>
            <Link
              href="/Contractor"
              className=" bg-[#0097ff] px-2 rounded-lg py-2"
            >
              {" "}
              Contractor
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row mt-16 items-center sm:items-start justify-between pr-20 gap-y-8">
            <div className=" flex flex-col sm:mb-3 mb:3 rounded-2xl w-[150px] items-center justify-center text-[#003b63] bg-[#E5F1ED]">
              <img src="/project.png" alt="projects" width={78} height={78} />
              <h2 className={`${digital.className} text-4xl text-[#E31937]`}>
                10K+
              </h2>
              <h3 className="text-xl font-bold">Total Projects</h3>
            </div>
            <div className=" flex flex-col rounded-2xl w-[150px] items-center justify-center text-[#003b63] bg-[#E5F1ED]">
              <img src="/project.png" alt="projects" width={78} height={78} />
              <h2 className={`${digital.className} text-4xl text-[#E31937]`}>
                400+
              </h2>
              <h3 className="text-xl font-bold">Team Support</h3>
            </div>
            <div className=" flex flex-col rounded-2xl w-[150px] items-center justify-center text-[#003b63] bg-[#E5F1ED]">
              <img src="/project.png" alt="projects" width={78} height={78} />
              <h2 className={`${digital.className} text-4xl text-[#E31937]`}>
                9.5K+
              </h2>
              <h3 className="text-xl font-bold">Happy Clients</h3>
            </div>
            <div className=" flex flex-col rounded-2xl w-[150px] items-center justify-center text-[#003b63] bg-[#E5F1ED]">
              <img src="/project.png" alt="projects" width={78} height={78} />
              <h2 className={`${digital.className} text-4xl text-[#E31937]`}>
                2K+
              </h2>
              <h3 className="text-xl font-bold">Awarded</h3>
            </div>
          </div>
        </div>
      </div>
      <div
        id="how-it-works"
        className="bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat min-h-full "
      >
        <div className="mx-20">
          <h1 className="text-[#E31937] font-bold text-4xl sm:text-5xl md:text-6xl mb-8">
            How It <span className="text-[#0097ff]">Works</span>
          </h1>
          <div>
            <h2 className="text-3xl text-[#E31937]  font-bold mb-4 sm:mb-0">
              For Customers
            </h2>
            <div className="flex flex-wrap flex-col sm:flex-row gap-6 items-center justify-center">
              <img src="/setup.png" alt="setup" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/request.png" alt="request" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/pay.png" alt="pay" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/execution.png" alt="execution" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/review.png" alt="review" className="w-48" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl text-[#0097ff]  font-bold mb-4 sm:mb-0">
              For Builders
            </h2>
            <div className="flex flex-wrap flex-col sm:flex-row gap-6 items-center justify-center">
              <img src="/setup.png" alt="setup" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/request.png" alt="request" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/pay.png" alt="pay" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/execution.png" alt="execution" className="w-48" />
              <img
                src="/arrowred.png"
                alt="arrow"
                className="w-9 rotate-90 sm:rotate-0"
              />
              <img src="/review.png" alt="review" className="w-48" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="services"
        className="bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat min-h-full py-10"
      >
        <div className="mx-5 sm:mx-20">
          <h1 className="text-[#E31937] font-bold text-4xl sm:text-6xl mb-10">
            Services
          </h1>

          <div className="flex flex-wrap gap-6 justify-center">
            {/* Left Column */}
            <div className="flex flex-col gap-6">
              <div
                className="bg-[#0097FF] p-6 rounded-2xl w-full sm:w-[340px] h-[500px]"
                style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
              >
                <img src="/digital.png" alt="" />
                <h3
                  className="text-black text-7xl mt-10 font-extrabold"
                  style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                >
                  Digital & Creative Services
                </h3>
              </div>
              <div
                className="bg-[#E31937] p-6 rounded-2xl w-full sm:w-[340px] h-[340px]"
                style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
              >
                <img src="/Mechanical.png" alt="" />
                <h3
                  className="text-black text-5xl mt-5 font-extrabold"
                  style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                >
                  Mechanical, Electrical & Plumbing (MEP) Services
                </h3>
              </div>
            </div>

            {/* Center Column */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-6 justify-center">
                <div
                  className="bg-[#C026D3] p-6 rounded-2xl w-full sm:w-[480px] h-[350px]"
                  style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  <img src="interior.png" alt="" />
                  <h3
                    className="text-black text-7xl mt-4 font-extrabold"
                    style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                  >
                    Painting & Interior Design
                  </h3>
                </div>
                <div
                  className="bg-[#0EA5E9] p-6 rounded-2xl w-full sm:w-[480px] h-[350px]"
                  style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
                >
                  <img src="/Logistics.png" alt="" />
                  <h3
                    className="text-black text-6xl mt-5 font-extrabold"
                    style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                  >
                    Logistics & Material Supply
                  </h3>
                </div>
              </div>

              <div
                className="bg-[#F7C300] p-6 rounded-2xl w-full sm:w-[980px] h-[500px]"
                style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
              >
                <img src="/construction.png" alt="" className="h-[370px]" />
                <h3
                  className="text-black text-7xl font-extrabold"
                  style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                >
                  Construction & Building Services
                </h3>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-6">
              <div
                className="bg-[#F59E0B] p-6 rounded-2xl w-full sm:w-[340px] h-[350px]"
                style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
              >
                <img src="/home.png" alt="" />
                <h3
                  className="text-black text-4xl font-extrabold"
                  style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                >
                  Home Maintenance & Repairs
                </h3>
              </div>
              <div
                className="bg-[#DB2777] p-6 rounded-2xl w-full sm:w-[340px] h-[500px]"
                style={{ boxShadow: "-5px 5px 4px rgba(0, 0, 0, 0.5)" }}
              >
                <img src="/capentry.png" alt="" />
                <h3
                  className="text-black text-6xl font-extrabold"
                  style={{ textShadow: "-5px 4px 3px rgba(0, 0, 0, 0.5)" }}
                >
                  Carpentry & Woodwork
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
  id="contact"
  className="bg-[url('/jagedoback2.png')] text-[#E31937] bg-cover bg-no-repeat min-h-full px-4 sm:px-10 md:px-20 py-10"
>
  <div className="mb-10">
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold">Contact Us</h1>
    <p className="text-xl sm:text-2xl md:text-4xl">Phone: +254 768 647 160</p>
    <p className="text-xl sm:text-2xl md:text-4xl">Email: info@jagedo.co.ke</p>
  </div>

  <div className="flex flex-col lg:flex-row gap-8">
    {/* Message Form */}
    <div className="flex flex-col justify-evenly rounded-2xl p-4 text-white bg-[#0097ff] w-full lg:w-1/2 h-auto">
      <p className="text-xl sm:text-2xl text-[#003B63] md:text-3xl mb-4">
        Any Burning Question? Send Us a Message
      </p>
      <input
        type="text"
        placeholder="Name"
        className="placeholder:text-lg sm:placeholder:text-xl py-2 px-3 mb-3 rounded-lg placeholder:text-white bg-[#003B63]"
      />
      <input
        type="email"
        placeholder="Email"
        className="placeholder:text-lg sm:placeholder:text-xl py-2 px-3 mb-3 rounded-lg placeholder:text-white bg-[#003B63]"
      />
      <textarea
        placeholder="Message"
        className="placeholder:text-lg sm:placeholder:text-xl py-2 px-3 mb-3 rounded-lg h-24 sm:h-32 bg-[#003B63] placeholder:text-white resize-none"
      />
    </div>

    {/* Newsletter */}
    <div className="flex flex-col justify-center items-center bg-black/10 rounded-2xl w-full lg:w-1/2 h-[300px] p-4">
      <p className="text-2xl sm:text-3xl md:text-5xl text-center mb-4">
        Join Our Newsletter
      </p>
      <button
        type="submit"
        className="text-xl sm:text-2xl bg-gradient-to-r from-[#0097ff] to-[#E31937] text-white px-6 py-2 rounded-full"
      >
        Subscribe Now
      </button>
    </div>
  </div>
</div>

      <footer className="bg-black text-white py-10 px-5 sm:px-20">
        <div className="flex flex-col sm:flex-row justify-between gap-10">
          {/* Brand */}
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold text-[#0097ff]">
              Ja<span className="text-[#E31937]">Gedo</span>
            </h2>
            <p className="mt-2 text-sm max-w-xs">
              Turning In Mind Blueprints into Real Empires. Trusted platform for
              all your construction and professional needs.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="flex flex-col gap-1 text-sm">
              <li>
                <a href="#home" className="hover:text-[#0097ff]">
                  Home
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-[#0097ff]">
                  How it works
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#0097ff]">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#0097ff]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-sm">Email: support@jagedo.com</p>
            <p className="text-sm">Phone: +254 712 345 678</p>
            <p className="text-sm">Location: Nairobi, Kenya</p>
          </div>

          {/* Socials (you can link these to real icons later) */}
          <div className="flex flex-col">
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex gap-4 mt-1">
              <a href="#" className="hover:text-[#0097ff]">
                Facebook
              </a>
              <a href="#" className="hover:text-[#0097ff]">
                Instagram
              </a>
              <a href="#" className="hover:text-[#0097ff]">
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-4 text-center text-sm text-white/60">
          © {new Date().getFullYear()} JaGedo. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
