import React, { useContext } from "react";
import { Input } from "@heroui/react";
import { Button } from "@heroui/react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { RegisterContext } from "../../Context/Register";

export default function PersonalInfo() {
  let { setRegData } = useContext(RegisterContext);
  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });
  const handleSubmit = (values) => {
    setRegData(values);
    console.log(values);
    navigate("/plan");
  };

  let navigate = useNavigate();
  return (
    <div className="h-screen pt-10">
      <h1 className="font-title-font text-start text-main-blue text-[24px] font-bold">
        Personal Info
      </h1>
      <p className="font-main-font text-[16px] py-3 text-main-black">
        Please provide your name, email address, and phone number.
      </p>
      <form
        onSubmit={formik.handleSubmit}
        className="font-main-font pt-6 text-[16px]"
      >
        <Input
          isClearable
          className="w-full py-3 placeholder:font-main-font rounded-sm  placeholder:text-[16px]"
          label={
            <span className="text-main-blue font-main-title font-bold text-[16px]">
              Name
            </span>
          }
          placeholder="e.g. Stephen King"
          labelPlacement="outside"
          type="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          variant="bordered"
        />
        <Input
          isClearable
          className="w-full py-3 placeholder:font-main-font rounded-sm placeholder:text-[16px]"
          label={
            <span className="text-main-blue font-main-title font-bold text-[16px]">
              Email Address
            </span>
          }
          placeholder="e.g. StephenKing@lorem.com"
          labelPlacement="outside"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          name="email"
          variant="bordered"
        />
        <Input
          isClearable
          className="w-full py-3 placeholder:font-main-font rounded-sm  placeholder:text-[16px]"
          label={
            <span className="text-main-blue font-main-title font-bold text-[16px]">
              Phone Number
            </span>
          }
          placeholder="e.g. +1 234 567 890"
          labelPlacement="outside"
          type="tel"
          variant="bordered"
          name="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
        <div className="text-end pt-16">
          <Button
            type="submit"
            className="bg-main-blue text-main-white font-main-font text-[16px] "
            onPress={() => {}}
          >
            Next Step
          </Button>
        </div>
      </form>
    </div>
  );
}
