import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@heroui/react";
import { Switch } from "@heroui/react";
import { useFormik } from "formik";
import { RegisterContext } from "../../Context/Register";

export default function Plan() {
  let navigate = useNavigate();
  let { setRegData, regData } = useContext(RegisterContext);
  const [isSelected, setIsSelected] = useState(true);
  const [selectedPlan, setSelectedPlan] = useState("arcade"); // Track selected plan

  const formik = useFormik({
    initialValues: {
      plan: "arcade",
      billingCycle: "monthly",
    },
    onSubmit: (values) => {
      console.log({ ...regData, ...values });
      setRegData({ ...regData, ...values });
      navigate("/adds");
    },
  });

  const handlePlanClick = (plan) => {
    setSelectedPlan(plan); // Update selected plan
    formik.setFieldValue("plan", plan); // Set plan value in formik
  };

  return (
    <div className="h-screen pt-10">
      <h1 className="font-title-font text-start text-main-blue text-[24px] font-bold">
        Select Your Plan
      </h1>
      <p className="font-main-font text-[16px] py-3 text-main-black">
        You have the option of monthly or yearly billing.
      </p>

      <form onSubmit={formik.handleSubmit}>
        <div className="flex pt-5 flex-wrap">
          <div
            onClick={() => handlePlanClick("arcade")}
            className="w-full ps-0 p-3 md:w-1/2 lg:w-1/3 cursor-pointer"
          >
            <div
              className={`inner p-5 rounded-lg transition-all ${
                selectedPlan === "arcade" ? "border-2 border-black" : "border-2 border-gray-200"
              }`}
            >
              <div className="w-[30px] h-[30px] bg-main-orange text-white flex justify-center items-center rounded-full">
                <i className="fa-solid fa-puzzle-piece"></i>
              </div>
              <p className="font-main-font font-bold text-[16px] py-3 text-main-black">
                Arcade
              </p>
              <p className="font-main-font text-[16px] py-3 text-main-black">
                $9/Month
              </p>
              <input
                type="radio"
                name="plan"
                value="arcade"
                checked={formik.values.plan === "arcade"}
                onChange={formik.handleChange}
                className="hidden"
              />
            </div>
          </div>

          <div
            onClick={() => handlePlanClick("advanced")}
            className="w-full p-3 md:w-1/2 lg:w-1/3 cursor-pointer"
          >
            <div
              className={`inner p-5 rounded-lg transition-all ${
                selectedPlan === "advanced" ? "border-2 border-black" : "border-2 border-gray-200"
              }`}
            >
              <div className="w-[30px] h-[30px] bg-main-pink text-white flex justify-center items-center rounded-full">
                <i className="fa-solid fa-gamepad"></i>
              </div>
              <p className="font-main-font font-bold text-[16px] py-3 text-main-black">
                Advanced
              </p>
              <p className="font-main-font text-[16px] py-3 text-main-black">
                $12/Month
              </p>
              <input
                type="radio"
                name="plan"
                value="advanced"
                checked={formik.values.plan === "advanced"}
                onChange={formik.handleChange}
                className="hidden"
              />
            </div>
          </div>

          <div
            onClick={() => handlePlanClick("pro")}
            className="w-full p-3 md:w-1/2 lg:w-1/3 cursor-pointer"
          >
            <div
              className={`inner p-5 rounded-lg transition-all ${
                selectedPlan === "pro" ? "border-2 border-black" : "border-2 border-gray-200"
              }`}
            >
              <div className="w-[30px] h-[30px] bg-main-blue text-white flex justify-center items-center rounded-full">
                <i className="fa-solid fa-dice"></i>
              </div>
              <p className="font-main-font font-bold text-[16px] py-3 text-main-black">
                Pro
              </p>
              <p className="font-main-font text-[16px] py-3 text-main-black">
                $15/Month
              </p>
              <input
                type="radio"
                name="plan"
                value="pro"
                checked={formik.values.plan === "pro"}
                onChange={formik.handleChange}
                className="hidden"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center py-5 items-center space-x-4">
          <span className="text-lg">Monthly</span>

          <Switch
            isSelected={isSelected}
            color={"#34495E"}
            onValueChange={(selected) => {
              setIsSelected(selected);
              formik.setFieldValue("billingCycle", selected ? "yearly" : "monthly"); 
            }}
            className="relative bg-main-white inline-flex items-center h-6 rounded-full w-14"
          >
            <span
              className="absolute w-6 h-6 bg-white rounded-full"
              style={{ display: "none" }}
            />
          </Switch>

          <span className="text-lg">Yearly</span>
        </div>

        <div className="flex justify-between items-center pt-16">
          <Button
            className="text-main-blue bg-transparent font-main-font text-[16px]"
            onPress={() => navigate("/")}
          >
            Go Back
          </Button>
          <Button
            className="bg-main-blue text-main-white font-main-font text-[16px]"
            type="submit"
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
