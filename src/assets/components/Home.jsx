import React from "react";
import brang from "../img/brand.png"
import playIcon from "../img/play.png"

export const Home = () => {

  return (
    <div
      id="home"
      className="min-h-screen w-full absolute top-0 bg-primary bg-opacity-10 pt-28 ">
      <div
        className=" max-w-screen-lg mx-auto">
        <div
          className=" md:flex ">

          <img
            className="w-60 mx-auto"
            src={brang} />
          <div
            className=" p-5 space-y-10 flex-1">
            <h2
              className=" text-3xl md:text-5xl font-extrabold text-colorText text-start">
              We're here to <br />Increase your <br /> Productivity
            </h2>
            <p
              className="  text-colorText font-semibold text-start">
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