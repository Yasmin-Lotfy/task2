import React, { useContext } from "react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik"; // Import useFormik
import { RegisterContext } from "../../Context/Register";

export default function Adds() {
  let navigate = useNavigate();
  let { setRegData, regData } = useContext(RegisterContext);

  // Initial values for the checkboxes
  const initialValues = {
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
  };

  // Formik hook to handle the form logic
  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      // Prepare add-ons data by checking each checkbox
      const selectedAddons = {};

      if (values.onlineService) {
        selectedAddons.onlineService = 1; // Send 1 for online service
      }

      if (values.largerStorage) {
        selectedAddons.largerStorage = 2; // Send 2 for larger storage
      }

      if (values.customizableProfile) {
        selectedAddons.customizableProfile = 2; // Send 2 for customizable profile
      }

      // Update the context with selected add-ons data
      setRegData({ ...regData, addOns: selectedAddons });

      // Log the data (you can remove it or send it somewhere)
      console.log(regData);
      navigate("/summary");
    },
  });

  return (
    <div className="h-screen pt-10">
      <h1 className="font-title-font text-start text-main-blue text-[24px] font-bold">
        Pick Add-ons
      </h1>
      <p className="font-main-font text-[16px] py-3 text-main-black">
        Add-ons help enhance your gaming experience.
      </p>

      <form onSubmit={formik.handleSubmit}>
        {/* Online Services */}
        <div className="mx-auto border-2 py-6 my-1 px-6 font-main-font border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-6 justify-center items-center">
              <input
                type="checkbox"
                id="onlineService"
                className="checkbox-input"
                name="onlineService"
                checked={formik.values.onlineService}
                onChange={formik.handleChange}
              />
              <div>
                <p className="text-main-blue font-bold">Online Services</p>
                <p>Access to Multiplayer Games</p>
              </div>
            </div>
            <p className="text-main-blue font-bold">+$1/mo</p>
          </div>
        </div>

        {/* Larger Storage */}
        <div className="mx-auto border-2 py-6 my-1 px-6 font-main-font border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-6 justify-center items-center">
              <input
                type="checkbox"
                id="largerStorage"
                name="largerStorage"
                className="checkbox-input"
                checked={formik.values.largerStorage}
                onChange={formik.handleChange}
              />
              <div>
                <p className="text-main-blue font-bold">Larger Storage</p>
                <p>Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-main-blue font-bold">+$2/mo</p>
          </div>
        </div>

        {/* Customizable Profile */}
        <div className="mx-auto border-2 py-6 my-1 px-6 font-main-font border-gray-300 rounded-lg">
          <div className="flex justify-between items-center">
            <div className="flex gap-6 justify-center items-center">
              <input
                type="checkbox"
                id="customizableProfile"
                name="customizableProfile"
                className="checkbox-input"
                checked={formik.values.customizableProfile}
                onChange={formik.handleChange}
              />
              <div>
                <p className="text-main-blue font-bold">Customizable Profile</p>
                <p>Custom Theme on Your Profile</p>
              </div>
            </div>
            <p className="text-main-blue font-bold">+$2/mo</p>
          </div>
        </div>

        <div className="flex justify-between items-center pt-16">
          <Button
            className="text-main-blue bg-transparent font-main-font text-[16px]"
            onPress={() => {
              navigate("/plan");
            }}
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
