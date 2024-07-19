import React from "react";
import { BsStar, BsStarFill, BsStars } from "react-icons/bs";


const ratingProduct = [
  {
    id: 0,
    rate: 4.9,
    product: 'Databricks'
  },
  {
    id: 1,
    rate: 4.8,
    product: 'Chainalysis'
  },
]

export const About = () => {
  return (
    <div id="about"
      className=" p-4 pb-16 ">
      <div className=" space-y-2">
        <h3
          className=" text-xl font-bold">
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
              <BsStarFill className="text-brandyello" />
            </div>
            <p className=" font-medium text-simpleText"><span className=" font-semibold text-colorText">4.9</span> / 5 rate</p>
            <p>Databricks</p>
          </div>

        </div>

      </div>
      <div className="">
        <div className="flex gap-3 mt-5">
          <img className="min-w-11 h-11 shadow" />
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
          <img className="min-w-11 h-11 shadow" />
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
          <img className="min-w-11 h-11 shadow" />
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
