import React from "react";

const page = () => {
  return (
    <div className="welcome h-screen flex justify-center">
      <div className="container pt-12 w-[400px] flex flex-col gap-7 text-center">
        <p className="font-semibold text-xl">Welcome, Korik Anton </p>
        <p className="font-semibold text-xl">Here you have access to training, certification and freelance labor relationships.</p>
        <p>Romtos makes the user experience in the world of learning, career achivements and relationships more convenient and accessible </p>
        <p>We will accompany your success throughout your career path</p>
        <button className="bg-[#674EA7] w-2/3 p-1 text-white font-semibold border-2 border-black mx-auto">Start your career path</button>
      </div>
    </div>
  );
};

export default page;
