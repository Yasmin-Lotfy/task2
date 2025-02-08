import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function SideBar() {
  let navigate = useNavigate();
  const location = useLocation();

  return (
    <div className=" hidden text-[10px] md:text-[12px] lg:text-[16px] sm:block w-[30%]  font-main-font  bg-[url('/assets/bg-sidebar-desktop.png')] bg-cover bg-center rounded-2xl pt-6 h-screen text-white">
      <div className="flex flex-wrap   gap-8 justify-start font-title-font px-11  items-center pt-4">
        <div
          onClick={() => navigate("/")}
          className={`h-[30px] w-[30px] cursor-pointer border-2 border-white rounded-full flex justify-center items-center
             ${location.pathname == "/" ? "bg-main-white text-main-black  " : ""
          }`}
        >
          1
        </div>
        <div>
          <h6 className={`uppercase p-0 text-gray-400 ${location.pathname == "/" ? " text-main-black  " : ""}`}>step 1</h6>
          <p className="uppercase p-0">your info</p>
        </div>
      </div>
      <div className="flex flex-wrap  gap-8 justify-start font-title-font px-11  items-center pt-4">
        <div
          onClick={() => navigate("/plan")}
          className={`w-[30px]  h-[30px] cursor-pointer border-2 border-white rounded-full flex justify-center items-center ${
            location.pathname == "/plan"
              ? "bg-main-white text-main-black  "
              : ""
          }`}
        >
          2
        </div>
        <div>
          <h6 className={`uppercase p-0 text-gray-400 ${location.pathname == "/plan" ? " text-main-black  " : ""}`}>step 2</h6>
          <p className="uppercase p-0">select plan</p>
        </div>
      </div>
      <div className="flex flex-wrap  gap-8 justify-start font-title-font px-11  items-center pt-4">
        <div
          onClick={() => navigate("/adds")}
          className={`w-[30px]  h-[30px] cursor-pointer border-2 border-white rounded-full flex justify-center items-center ${
            location.pathname == "/adds"
              ? "bg-main-white text-main-black  "
              : ""
          }`}
        >
          3
        </div>
        <div>
          <h6 className={`uppercase p-0 text-gray-400 ${location.pathname == "/adds" ? " text-main-black  " : ""}`}>step 3</h6>
          <p className="uppercase p-0">adds-ons</p>
        </div>
      </div>
      <div className="flex flex-wrap  gap-8 justify-start font-title-font px-11  items-center pt-4">
        <div
          onClick={() => navigate("/summary")}
          className={`w-[30px]  h-[30px] cursor-pointer border-2 border-white rounded-full flex justify-center items-center ${
            location.pathname == "/summary"
              ? "bg-main-white text-main-black  "
              : ""
          }`}
        >
          4
        </div>
        <div>
          <h6 className={`uppercase p-0 text-gray-400 ${location.pathname == "/summary" ? " text-main-black  " : ""}`}>step 4</h6>
          <p className="uppercase p-0">summary</p>
        </div>
      </div>
    </div>
  );
}
