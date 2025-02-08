import React, { useContext, useEffect, useState } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { RegisterContext } from "../../Context/Register";

export default function Summary() {
  let navigate = useNavigate();
  let { setRegData, regData } = useContext(RegisterContext);

  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedPlan, setSelectedPlan] = useState(regData.plan); // Track selected plan

  function handlePrice(value) {
    if (value === "arcade") {
      return 9;
    } else if (value === "pro") {
      return 15;
    } else if (value === "advanced") {
      return 12;
    }
    return 0; 
  }

  function calculateTotalPrice() {
    let total = handlePrice(regData.plan); // Start with the price of the plan
    if (regData.addOns) {
      Object.values(regData.addOns).forEach(value => {
        total += value; 
      });
    }
    return total;
  }

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
    setRegData({ ...regData, plan }); // Update plan in context
    setShowModal(false); // Close the modal after selection
    console.log(regData, "all data");
  };

  function changePlan() {
    setShowModal(true); // Show the modal
  }

  useEffect(() => {
    console.log(regData);
  }, []);

  return (
    <>
      <div className="h-screen pt-10">
        <h1 className="font-title-font text-start text-main-blue text-[24px] font-bold">
          Finishing Up
        </h1>
        <p className="font-main-font text-[16px] py-3 text-main-black">
          Double-Check everything looks ok before confirming.
        </p>
        <div className="mx-auto border-2 font-main-font border-gray-300 rounded-lg ">
          <div className="flex p-5 justify-between items-start">
            <div>
              <p className="text-main-blue capitalize font-bold text-[16px]">
                {regData.plan} (Monthly)
              </p>
              <button
                onClick={changePlan}
                className="text-main-blue font-bold text-[16px] underline"
              >
                Change
              </button>
            </div>
            <p className="text-main-blue font-bold text-[16px]">
              +${handlePrice(regData.plan)}/mo
            </p>
          </div>

          {regData.addOns &&
            Object.entries(regData.addOns).map(([key, value]) => (
              <div key={key} className="flex px-5 py-2 justify-between items-start">
                <p className="text-main-black capitalize text-[16px]">{key}</p>
                <p className="text-main-blue font-bold text-[16px]">
                  +${value}/mo
                </p>
              </div>
            ))}

          <div className="flex px-5 py-5 justify-between items-start">
            <p className="text-main-black capitalize text-[16px]">
              Total Per Month
            </p>
            <p className="text-main-blue font-bold text-[20px]">
              +${calculateTotalPrice()}/mo
            </p>
          </div>
        </div>

        {/* Modal for selecting a new plan */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-5 rounded-lg shadow-lg w-80">
              <h2 className="font-bold text-main-blue text-lg">Choose Your Plan</h2>
              <div className="py-3">
                <button
                  className="w-full py-2 text-center bg-main-orange text-white rounded-lg mb-3"
                  onClick={() => handlePlanChange("arcade")}
                >
                  Arcade - $9/mo
                </button>
                <button
                  className="w-full py-2 text-center bg-main-pink text-white rounded-lg mb-3"
                  onClick={() => handlePlanChange("advanced")}
                >
                  Advanced - $12/mo
                </button>
                <button
                  className="w-full py-2 text-center bg-main-blue text-white rounded-lg"
                  onClick={() => handlePlanChange("pro")}
                >
                  Pro - $15/mo
                </button>
              </div>
              <button
                className="w-full py-2 text-center bg-gray-300 rounded-lg mt-3"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="flex justify-between items-center pt-16">
          <Button
            className="text-main-blue bg-transparent font-main-font text-[16px]"
            onPress={() => {
              navigate("/adds");
            }}
          >
            Go Back
          </Button>
          <Button
            className="bg-main-blue text-main-white font-main-font text-[16px]"
            onPress={() => {
              navigate("/finish");
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </>
  );
}
