import React, { useContext } from "react";
import { RegisterContext } from "../../Context/Register";

export default function Finish() {
  let { regData } = useContext(RegisterContext);
  return (
    <div className="flex h-screen flex-col text-center justify-center items-center">
      <div className="w-[60px] h-[60px]  flex justify-center items-center rounded-full bg-main-pink text-main-white ">
        <div className="w-[30px] h-[30px] flex justify-center items-center  rounded-full bg-main-white text-main-white ">
          <i className="fa-solid fa-check  text-main-pink"></i>
        </div>
      </div>
      <div className="sm:px-1 md:px-10 ">
        <p className="text-[24px] pt-5 font-bold font-title-font text-main-blue">
          Thank You!
        </p>
        <p className="text-[16px] pt-5 font-main-font text-main-black">
          Thanks
          <span className="font-bold">{regData.name ? regData.name : ""}</span>{" "}
          for confirming your subscription <span className="font-bold">{regData.plan? regData.plan :""}</span> <span className="font-bold">{regData.billingCycle? regData.billingCycle :""}</span>! We hope you have fun using our
          platform. If you ever need support, please feel free to email us at
          <span className="font-bold"> yasmin.lotfy11@gmail.com</span>
        </p>
      </div>
    </div>
  );
}
