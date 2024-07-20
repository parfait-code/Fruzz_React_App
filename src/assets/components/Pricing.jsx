import { FcOk } from "react-icons/fc";


export const Pricing = () => {

  return (
    <div
      id="pricing"
      className="mx-6 py-14 space-y-9" >
      <div
        className="space-y-6">
        <h2
          className="text-3xl font-extrabold text-center">
          Choose Plan <br />
          That's Right For You
        </h2>
        <p className=" text-center">Choose plan that works best for you, feel to contact us </p>
        <div className="w-10/12 mx-auto bg-primary bg-opacity-10 rounded flex shadow p-2 items-center justify-between" >
          <button
            className="py-2 px-5 rounded  hover:opacity-80">
            Bye Monthly
          </button>
          <button className="py-2 px-5 rounded  hover:opacity-80 bg-primary shadow-lg"  >
            Bye Yearly
          </button>
        </div>
      </div>
      <div>
        <div className="space-y-6 rounded-xl shadow-xl border py-6  ">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-center">Free</h4>
            <p className="text-simpleText text-center">Have a go text your  superpowers</p>
            <div className="">
              <p className=" text-7xl font-extrabold text-center "><span className="absolute text-2xl text-simpleText">$</span> <span className="ml-5">0</span></p>
            </div>
          </div>
          <div
            className="flex-1  rounded-xl shadow-lg border py-6 space-y-6 px-6 mx-3">
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className="flex ">
              <button
                className="  rounded-xl text-primary font-semibold shadow px-6 py-3 mx-auto ">
                Signup for free
              </button>
            </div>



          </div>

        </div>
      </div>
      <div>
        <div className="space-y-6 rounded-xl shadow-xl border py-6 bg-primary ">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-center">Pro</h4>
            <p className="text-white text-center">Have a go text your  superpowers</p>
            <div className="">
              <p className=" text-7xl font-extrabold text-center "><span className="absolute text-2xl text-white">$</span> <span className="ml-5">8</span></p>
            </div>
          </div>
          <div
            className="flex-1  rounded-xl shadow-lg border py-6 space-y-6 px-6 mx-3 bg-white">
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className="flex ">
              <button
                className="  rounded-xl text-white bg-primary font-semibold shadow px-6 py-3 mx-auto ">
                Go to Pro
              </button>
            </div>



          </div>

        </div>
      </div>
      <div>
        <div className="space-y-6 rounded-xl shadow-xl border py-6  ">
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-center">Free</h4>
            <p className="text-simpleText text-center">Have a go text your  superpowers</p>
            <div className="">
              <p className=" text-7xl font-extrabold text-center "><span className="absolute text-2xl text-simpleText">$</span> <span className="ml-5">0</span></p>
            </div>
          </div>
          <div
            className="flex-1  rounded-xl shadow-lg border py-6 space-y-6 px-6 mx-3">
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Online Transaction
              </p>
            </div>
            <div className="flex ">
              <button
                className="  rounded-xl text-primary font-semibold shadow px-6 py-3 mx-auto ">
                Signup for free
              </button>
            </div>



          </div>

        </div>
      </div>

    </div >
  );
}