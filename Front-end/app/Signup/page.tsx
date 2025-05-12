import Link from "next/link";

const Signup = () => {
  return <main>
     <div className="min-h-screen bg-[url('/jagedoback2.png')] bg-cover bg-no-repeat flex items-center justify-center px-4">
      <div className="flex flex-col bg-black/20 bg-gradient-to-r border-2 border-[#003B63] from-[#0097ff]/60 to-[#E31937]/50 px-40 py-20 rounded-2xl w-full h-[95vh] max-w-[95vw] shadow-lg">
        <h1 className="text-5xl font-semibold text-[#003B63] mb-1  underline decoration-dotted decoration-3 decoration-[#003B63]">Signup</h1>
        <p>Already Have An Account?  Signup</p>
        <div>
        <div>Customer</div>
        <div>Fundi</div>
        <div>Professional</div>
        <div>Hardware</div>
        <div>Contractor</div>
        </div>
      </div>
    </div>
  </main>;
};
export default Signup;
