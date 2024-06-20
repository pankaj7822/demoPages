import React from "react";

const page = () => {
  return (
    <div className="new-account h-screen flex justify-center items-center bg-[#EEEEEE]">
      <div className="container w-[1000px] flex">
        <div className="container-left flex-1 pt-[90px] pl-7">
          <h1 className="text-[2.5rem] font-semibold text-[#af43f7]">Romtos Career Path</h1>
          <h3 className="mt-2 text-[1.75rem]/[2.5rem] font-medium">
            Freelancers, Performers, <br />
            Employees
          </h3>
          <p className="mt-4 text-[1.5rem]">
            Connect with clients,
            <br /> customers, employees and <br />
            the world around them with <br />
            Romtos Career Path
          </p>
        </div>
        <div className="container-right flex-1 px-10">
          <p className="text-center mb-4">
            <span className="font-semibold">Create an account</span> to increase your
            <br /> knowledge and find high paying jobs
          </p>
          <form className="bg-white flex flex-col items-center gap-y-[20px] p-3 rounded-[25px] border-2">
            <input type="text" placeholder="Email or Phone Number" className="w-full border-2 rounded-[20px] p-2" />
            <input type="text" placeholder="Password" className="w-full border-2 rounded-[20px] p-2" />
            <button className="w-full bg-[#009E0F] text-white p-2 border-2 border-black">Create a new account</button>
            <hr className="w-full mt-12" />
            <button className="bg-[#AF43F7] text-white p-2 border-2 border-black w-1/2 mb-6">Already have an account</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
