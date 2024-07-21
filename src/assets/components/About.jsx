import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import analytics from "../img/analytic.png";
import engagement from "../img/engagement.png";
import publishing from "../img/publishing.png";

export const About = () => {
  return (
    <div id="about"
      className="max-w-screen-lg mx-auto space-y-6 p-4 pb-16 md:flex md:gap-2 md:items-center ">
      <div className=" space-y-4">
        <h3
          className=" text-3xl font-bold">
          How we support our pratner all over the world
        </h3>
        <p
          className="text-simpleText">
          Saas become a common delivery model for many bysiness application, including office software, messaging software, payroll processing software, DBMS software, management software.
        </p>
        <div
          className="flex justify-between">
          <div className="flex-1 space-y-1">
            <div className="flex gap-1">
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
            </div>
            <p className=" font-medium text-simpleText"><span className=" font-semibold text-colorText">4.9</span> / 5 rate</p>
            <p>Databricks</p>
          </div>
          <div className="flex-1 space-y-1">
            <div className="flex gap-1">
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
              <BsStarFill className="text-brandyello" />
              <BsStarHalf className="text-brandyello" />
            </div>
            <p className=" font-medium text-simpleText"><span className=" font-semibold text-colorText">4.5</span> / 5 rate</p>
            <p>Databricks</p>
          </div>

        </div>

      </div>
      <div className="">
        <div className="flex gap-3 mt-5">

          <img src={publishing} className="min-w-11 h-11 shadow" />
          <div>
            <h4 className=" font-extrabold">
              Publishing
            </h4>
            <p className=" font-light text-simpleText">
              Plan, collaborate, and Publishing your content that drivees meaningful  and growth for your brand
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-5 ">
          <img src={engagement} className="min-w-11 h-11 shadow" />
          <div>
            <h4 className=" font-extrabold">
              Engagement
            </h4>
            <p className=" font-light text-simpleText">
              Quiuckly navigate you anda engage with your audience
            </p>
          </div>
        </div>
        <div className="flex gap-3 mt-5">
          <img src={analytics} className="min-w-11 h-11 shadow" />
          <div>
            <h4 className=" font-extrabold">
              Analytics
            </h4>
            <p className=" font-light text-simpleText">
              Analyze your perfomance and create goegous report
            </p>
          </div>
        </div>

      </div>

    </div>
  );
}
