import React from "react";
import { FaMobileScreen } from "react-icons/fa6";
import { IoFastFoodOutline } from "react-icons/io5";
import { MdFoodBank } from "react-icons/md";
import { CiDeliveryTruck } from "react-icons/ci";
const OverServices = () => {
  return (
    <>
      <div className="container py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold">Our Services</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-12">
          <div className="flex justify-center items-center gap-3">
            <FaMobileScreen className="text-3xl" />
            <p className="text-2xl font-semibold">Online Booking</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <IoFastFoodOutline className="text-3xl" />
            <p className="text-2xl font-semibold">Fast Food</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <MdFoodBank className="text-3xl" />
            <p className="text-2xl font-semibold">Healthy Food</p>
          </div>
          <div className="flex justify-center items-center gap-3">
            <CiDeliveryTruck className="text-3xl" />
            <p className="text-2xl font-semibold">Delivery</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverServices;
