import React from "react";
import Register from "../../components/register/Register";
import RegesterImg from "../../components/register/RegesterImg";

export default function RegesterPage() {
  return (
    <div className="flex w-full">
      <Register />

      <div className="hidden md:block ">
        <RegesterImg />
      </div>
    </div>
  );
}
