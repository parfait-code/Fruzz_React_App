import React from "react";
import product1 from "../img/product1.png"
import product2 from "../img/product2.png"
import product3 from "../img/product3.png"
import { FcOk } from "react-icons/fc";
import benefitImg from "../img/benefitImg.png"



export const Product = () => {

  return (
    <div
      id="product"
      className="max-w-screen-lg mx-auto px-6 py-12 space-y-10 bg-primary bg-opacity-10 flex-1 justify-center">
      <div className="max-w-xl mx-auto space-y-4">
        <h3 className="font-extrabold text-3xl">
          Our Features you cab get
        </h3>
        <p
          className="">
          We offer a variety of interesting features that you can help increase your productivity at work and manage your projet esaly
        </p>
        <button className="px-5 py-3 rounded-xl bg-primary text-white hover:bg-opacity-80 ">
          Get Started
        </button>
      </div>
      <div className="mx-auto grid justify-center  md:grid-cols-2  md:mx-auto  lg:flex lg:justify-between ">
        <div className="w-72 hover:scale-105 rounded-lg shadow p-3 pb-7">
          <div className="space-y-6">
            <img
              className=" shadow rounded-lg"
              src={product1}
              alt="produit 1"
            />
            <h4
              className="text-xl font-bold">
              Collaboration Teams
            </h4>
            <p
              className="">
              Here you can handle projects together with team virtually
            </p>
          </div>
        </div>
        <div className="w-72 mt-6 md:mt-0 hover:scale-105 rounded-lg shadow p-3 pb-7">
          <div className="space-y-6">
            <img
              className=" shadow rounded-lg"
              src={product2}
              alt="produit 2"
            />
            <h4
              className="text-xl font-bold">
              Cloud Storage
            </h4>
            <p
              className="">
              No need to worry about storage <br />
              because we provide storage up to 2 TB
            </p>
          </div>
        </div>
        <div className="w-72 hover:scale-105 rounded-lg mt-6 lg:mt-0 shadow p-3 pb-7">
          <div className="space-y-6">
            <img
              className=" shadow rounded-lg"
              src={product3}
              alt="produit 3"
            />
            <h4
              className="text-xl font-bold">
              Daily Analytics
            </h4>
            <p
              className="">
              We always provide useful information to make it easier for you every day
            </p>
          </div>
        </div>
      </div>
      <div
        className="space-y-5 md:flex md:gap-4">
        <img src={benefitImg} className="w-full md:w-1/2" />
        <div className="space-y-4">
          <h4 className="text-3xl font-bold">
            What Benefit Will You Get
          </h4>
          <div className=" flex gap-3 items-center">
            <FcOk className="min-w-6 text-2xl" />
            <p>
              Free Consulting With Experet Saving Money
            </p>
          </div>
          <div className=" flex gap-3 items-center">
            <FcOk className=" text-2xl" />
            <p>
              Oline Banking
            </p>
          </div>
          <div className=" flex gap-3 items-center">
            <FcOk className=" text-2xl" />
            <p>
              Investiment Report Every Month
            </p>
          </div>
          <div className=" flex gap-3 items-center">
            <FcOk className=" text-2xl" />
            <p>
              Saving Money For The Future
            </p>
          </div>
          <div className=" flex gap-3 items-center">
            <FcOk className=" text-2xl" />
            <p>
              Online Transaction
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}