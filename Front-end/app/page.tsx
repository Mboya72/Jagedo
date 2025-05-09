import localFont from "next/font/local";
import Link from "next/link";

const digital = localFont({
  src: "../public/fonts/digital-7.ttf",
  display: "swap",
});

export default function Home() {
  return (
    <main>
        <div className="bg-[url('/jagedoback.png')] bg-cover bg-no-repeat h-screen">
      <div className="flex items-center justify-between bg-white/10 backdrop-blur-[70px] h-13 px-8">
        <div className="text-[#0097ff] font-bold text-2xl">
          <h1>
            Ja<span className="text-[#E31937]">Gedo</span>
          </h1>
        </div>
        <div className="flex gap-12 text-white font-light text-md">
          <Link href="/Home">Home</Link>
          <Link href="/HowItWorks">How it works</Link>
          <Link href="/Services">Services</Link>
          <Link href="/Contact">Contact Us</Link>
        </div>
        <div className="flex gap-6 text-white font-extralight ">
          <Link className="bg-[#0061FE] px-2 rounded-full" href="/Login">
            Login
          </Link>
          <Link className="bg-[#E31937] px-2 rounded-full" href="/Register">
            Register
          </Link>
          <Link className="bg-[#0061FE] px-2 rounded-full" href="/Contact">
            Contact
          </Link>
        </div>
      </div>
      <div className="mt-60 ml-8">
        <div className="text-8xl md:text-7xl font-extrabold">
          <h1 className="text-[#0097ff] font-bold text-3xl">
            Ja<span className="text-[#E31937]">Gedo</span>
          </h1>
          <h2>
            Turning In Mind <span className="text-[#0097ff]">Blue</span>prints
          </h2>
          <h2>into Real Empires.</h2>
          <p className="font-extralight text-xl">
            Connect with trusted artisans, manage your workflow, and bring your
            vision to life — all in one platform.
          </p>
        </div>
        <div className="flex gap-12 text-black text-2xl mt-15">
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
          <Link href="/Hardware" className=" bg-[#0097ff] px-2 rounded-lg py-2">
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
        <div className="flex flex-col sm:flex-row mt-16 items-center justify-between pr-8">
          <div className=" flex flex-col rounded-2xl w-[150px] items-center justify-center text-[#003b63] bg-[#E5F1ED]">
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
    <div className="bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat h-screen">
    <h1 className="text-[#E31937] font-extrabold text-7xl">How It <span className="text-[#0097ff]">Works</span></h1>
    </div>
    </main>
  

  );
}
