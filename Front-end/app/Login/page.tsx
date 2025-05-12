"use client";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4">
      <div className="flex flex-row bg-black/20 bg-gradient-to-r border-2 border-[#003B63] from-[#0097ff]/60 to-[#E31937]/50 px-40 py-20 rounded-2xl w-full h-[95vh] max-w-[95vw] shadow-lg">
        <div className="w-[900px]">
        <h1 className="text-5xl font-semibold text-[#003B63] mb-1 mt-[20%] underline decoration-dotted decoration-3 decoration-[#003B63]">
  Login
</h1>
          <Link href="/Signup" className=" text-lg ">
            Don’t have an account?{" "}
            <span className="text-[#E31937] hover:text-red-950 ">Signup</span>
          </Link>{" "}
          <p className="text-lg text-white">
            By logging in, you agree to our{" "}
            <Link href="#" className="text-[#003B63]  hover:text-[#E31937]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-[#003B63] hover:text-[#E31937]">
              Privacy Policy
            </Link>
          </p>
          <form className="flex flex-col gap-14 w-[500px] mt-15 ">
            <input
              type="email"
              placeholder="Email"
              className="py-2 px-4 rounded-lg bg-[#003B63]/50 text-white placeholder-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="py-2 px-4 rounded-lg bg-[#003B63]/50 text-white placeholder-white"
            />
          </form>
          <div className="flex flex-col gap-10 w-[500px] mt-10 ">
            <Link href="#" className="hover:text-[#E31937]">
              Forgot Password?
            </Link>
            <button
              type="submit"
              className="bg-[#F83B4F] hover:bg-red-800 w-[80px] self-end text-white font-medium py-2 rounded-lg transition"
            >
              Login
            </button>
          </div>
        </div>
        <div>
          <img src="/login.png" alt="" />
        </div>
      </div>
    </div>
  );
}
