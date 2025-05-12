import Link from "next/link";

const Signup = () => {
  return (
    <main>
      <div className="min-h-screen bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4">
        <div className="flex flex-col justify-between bg-black/20 bg-gradient-to-r border-2 border-[#003B63] from-[#0097ff]/60 to-[#E31937]/50 px-40 py-20 rounded-2xl w-full h-[95vh] max-w-[95vw] shadow-lg">
          <div>
            <img src="/jagedologo.png" alt="" />
          </div>
          <div>
            <div className="mb-30">
              <h1 className="text-5xl font-semibold text-[#003B63]  underline decoration-dotted decoration-3 decoration-[#003B63]">
                Signup
              </h1>
              <Link href="/Login" className=" text-lg ">
                Already have an account?{" "}
                <span className="text-[#E31937] hover:text-red-950 ">
                  Login
                </span>
              </Link>{" "}
            </div>
            <div className="flex flex-wrap justify-between">
              <div className=" flex flex-col gap-30">
                <Link
                  href="/customersignup"
                  className="flex bg-[#E31937] text-[#003B63] text-7xl py-5 rounded-2xl px-2 w-fit items-center gap-4 hover:opacity-90 transition"
                >
                  Customer
                  <img src="/customer.png" alt="Customer Icon" />
                </Link>
                <Link
                  href="/hardwaresignup"
                  className="flex bg-[#E31937] text-[#003B63]  text-7xl py-5 rounded-2xl px-2 w-fit items-center gap-4 hover:opacity-90 transition "
                >
                  Hardware
                  <img src="/hardware.png" alt="" />
                </Link>
                              </div>
              <div className=" flex flex-col gap-30">
              <Link
                  href="/fundisignup"
                  className="flex bg-[#E31937] text-[#003B63]  text-7xl py-5 rounded-2xl px-2 w-fit items-center gap-4 hover:opacity-90 transition "
                >
                  Fundi
                  <img src="/fundi.png" alt="" />
                </Link>
               
              </div>
              <div className=" flex flex-col items-end gap-30">
              <Link
                  href="/professionalsignup"
                  className="flex bg-[#E31937] text-[#003B63]  text-7xl py-5 rounded-2xl px-2 w-fit items-center gap-4 hover:opacity-90 transition "
                >
                  Professional
                  <img src="/professional.png" alt="" />
                </Link>
                <Link
                  href="/contractorsignup"
                  className="flex bg-[#E31937] text-[#003B63]  text-7xl py-5 rounded-2xl px-2 w-fit items-center gap-4 hover:opacity-90 transition "
                >
                  Contractor
                  <img src="/contractor.png" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Signup;
