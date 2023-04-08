import React from "react";
import regimg from "../../asets/Capture.PNG";

export default function RegesterImg() {
  return (
    <div className="w-8/12 mx-auto  h-screen">
      <div className="flex justify-end items-center mt-5 space-x-5">
        <p>Already have an account ?</p>
        <button className="bg-blue-800 py-[.35rem] px-6 text-white rounded-full ">
          Login
        </button>
      </div>
      <div className="flex flex-col items-center ">
        <div className="text-center mt-20">
          <h1 className="text-5xl font-bold mb-5">
            Start managing <span className="text-blue-600">free</span> now !
          </h1>
          <p className="text-lg w-10/12 mx-auto">
            this app is a 100% free online Academey management software for a
            lifetime with no limitations.
          </p>
        </div>
        <div className="">
          <img className="" src={regimg} alt="" />
        </div>
      </div>
    </div>
  );
}
