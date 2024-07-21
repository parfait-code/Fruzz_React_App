import React from "react";
import brang from "../img/brand.png"
import playIcon from "../img/play.png"
import separation from "../img/headerSeparation.png"

export const Home = () => {

  return (
    <div
      id="home"
      className="w-full py-9 bg-primary bg-opacity-5 ">
      <div
        className=" max-w-screen-lg mx-auto mt-12">
        <div
          className=" sm:flex sm:items-center ">

          <img
            className="w-full sm:w-1/2 sm:h-1/2 mx-auto order-1"
            src={brang} />
          <div
            className=" p-5 space-y-10 flex-1">
            <h2
              className=" text-3xl md:text-5xl font-extrabold text-colorText text-start">
              We're here to <br /> <span className="text-primary">Increase </span>your <br /> Productivity
            </h2>
            <img src={separation} />
            <p
              className=" text-gray-500 font-semibold text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Velit eveniet repellat voluptatibus aut id maiores cupiditate officiis molestiae molestias.
            </p>
            <div
              className="flex gap-4">
              <button className="btn-primary">
                Try free trial
              </button>
              <button className="flex gap-2 items-center rounded shadow py-3 px-5 justify-center">
                <img
                  className="w-7"
                  src={playIcon} alt="play demo" />
                Play demo
              </button>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}