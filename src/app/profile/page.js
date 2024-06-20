import React from "react";
import Image from "next/image";
import { FaEarthAfrica } from "react-icons/fa6";
import { IoSchool } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { AiFillPlusCircle } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaCamera } from "react-icons/fa6";
import { BsFillTelephoneFill, BsStar } from "react-icons/bs";
import { RiEditCircleFill } from "react-icons/ri";

const page = () => {
  return (
    <div className="profile">
      <div className="profile_header bg-[#999999] w-[1100px] h-[70vh] mx-auto mt-1 relative">
        <div className="header-info flex gap-3 items-center w-1/2 h-1/2.5 absolute bottom-3 left-8">
          <div className="rounded-full w-[200px] h-[200px] relative">
            <Image src="https://placehold.co/600x400.png" alt="Profile Pic" width={100} height={100} className="w-full h-full rounded-full" />
            <div className="absolute right-2 bottom-6 bg-[#333333] p-2 rounded-full">
              <FaCamera className="text-white" />
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-white font-semibold">Korik Anton</h2>
            <div className="stars mt-1 flex gap-4">
              <BsStar className="text-[#6A6A6A] text-2xl" fill="yellow" />
              <BsStar className="text-[#6A6A6A] text-2xl" fill="yellow" />
              <BsStar className="text-[#6A6A6A] text-2xl" />
              <BsStar className="text-[#6A6A6A] text-2xl" />
              <BsStar className="text-[#6A6A6A] text-2xl" />
            </div>
          </div>
        </div>
        <div className="bg-white flex items-center gap-2 absolute right-8 top-8 p-2 rounded text-[0.85rem]">
          <FaCamera />
          Edit Cover
        </div>
      </div>
      <div className="profile-info w-[1100px] mx-auto border-2 border-gray-400 mt-3 mb-8 rounded-xl p-3">
        <p className="text-center text-[2rem]">Complete Your Profile</p>
        <div className="profile-info_container mt-4 flex">
          <div className="profile-info_container-left w-1/3 border-r-2 border-[#666666]">
            <ul className="p-3">
              <li className="bg-[#674ea7] mb-1 p-2 rounded-lg text-white">Review</li>
              <li className="mb-1 p-2">Your Language</li>
              <li className="mb-1 p-2">Education</li>
              <li className="mb-1 p-2">Contact Information</li>
              <li className="mb-1 p-2">Your Interest and Hobbies</li>
              <li className="mb-1 p-2">Places of Residence</li>
              <li className="mb-1 p-2">Your Characterstics</li>
            </ul>
          </div>
          <div className="profile-info_container-right px-2 w-2/3">
            <ul>
              <li className="mb-1 p-2 flex items-center gap-4">
                <FaEarthAfrica className="text-xl text-[#666666]" />
                Mother Tongue: English
              </li>
              <li className="mb-1 p-2 flex items-center gap-4">
                <IoSchool className="text-xl text-[#666666]" />
                Student: Balsamiq University School
                <RiEditCircleFill className="text-xl text-[#666666] ml-auto" />
              </li>
              <li className="mb-1 p-2 flex items-center gap-4">
                <FaHome className="text-xl text-[#666666]" />
                Live: Los Angeles, California
                <RiEditCircleFill className="text-xl text-[#666666] ml-auto" />
              </li>
              <li className="mb-1 p-2 flex items-center gap-4 text-[#674ea7]">
                <AiFillPlusCircle className="text-xl" />
                Born: Add Hometown
              </li>
              <li className="mb-1 p-2 flex items-center gap-4">
                <BsFillTelephoneFill className="text-xl text-[#666666]" /> 000-000-0000
              </li>
              <li className="mb-1 p-2 flex items-center gap-4 text-blue-600">
                <FaLinkedin className="text-xl text-[#666666]" />
                linkedin.com/korik_anton
              </li>
              <li className="mb-1 p-2 flex items-center gap-4 text-blue-600">
                <FaFacebookF className="text-xl text-[#666666]" />
                facebook.com/korik_anton
              </li>
              <li className="mb-1 p-2 flex items-center gap-4 text-blue-600">
                <FaGithub className="text-xl text-[#666666]" />
                github.com/korik_anton
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto w-1/5 flex mt-8 mb-16">
          <button className="border-2 border-[#66646C] bg-[#674EA7] p-2 text-white font-medium flex-1">Save and Continue</button>
        </div>
      </div>
    </div>
  );
};

export default page;
