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

      {/* Free plan */}
      <div>
        <div className="space-y-6 rounded-xl shadow-xl border py-6  ">
          <div className="mx-3 space-y-6">
            <h4 className="text-2xl font-bold text-center">Free</h4>
            <p className="text-gray-500  text-center">Have a go text your  superpowers</p>
            <div className="">
              <p className="text-gray-500  font-extrabold text-center "><span className="absolute text-2xl text-gray-500">$</span> <span className="ml-5 text-7xl text-colorText">0</span> / month</p>
            </div>
          </div>
          <div
            className="flex-1  rounded-xl shadow-lg border py-6 space-y-6 px-6 mx-3">
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                2 Users
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                2 Files
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Public Share & Comments
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                Chat support
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className=" text-2xl" />
              <p>
                New income apps
              </p>
            </div>
            <div className="flex ">
              <button
                className="  rounded-xl text-primary font-semibold shadow-lg px-6 py-3 mx-auto ">
                Signup for free
              </button>
            </div>



          </div>

        </div>
      </div>

      {/* Pro plan */}
      <div>
        <div className="space-y-6 rounded-xl shadow-xl border py-6 bg-primary ">
          <div className="mx-4 space-y-6">
            <h4 className="text-2xl font-bold text-center">Pro</h4>
            <p className="text-white text-center">Experiment the power of infinite possibilities</p>
            <div className="">
              <p className="text-gray-500  font-extrabold text-center "><span className="absolute text-2xl text-gray-500">$</span> <span className="ml-5 text-7xl text-colorText">8</span> / month</p>
            </div>
            <div className="text-center w-2/3 py-2 mx-auto bg-white text-white  bg-opacity-30 rounded-lg shadow ">
              Save $50 a year
            </div>
          </div>

          {/* features */}
          <div
            className="flex-1  rounded-xl shadow-lg border py-6 space-y-6 px-6 mx-3 bg-white">
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6  text-2xl" />
              <p>
                4 Users
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6  text-2xl" />
              <p>
                All apps
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                Unlimited editable exports
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                Folders and collaboration
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                All incoming apps
              </p>
            </div>
            <div className="flex ">
              <button
                className="  rounded-xl text-white bg-primary font-semibold shadow-lg px-6 py-3 mx-auto ">
                Go to Pro
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Business Plan */}
      <div>
        <div className="space-y-6 rounded-xl shadow-xl border py-6  ">
          <div className="  mx-4 space-y-6 ">
            <h4 className="text-xl font-bold text-center">Business</h4>
            <p className="text-gray-500 text-center">Unveil new superpowers and join the Design Leaque</p>
            <div className="">
              <p className="text-gray-500  font-extrabold text-center "><span className="absolute text-2xl text-gray-500">$</span> <span className="ml-5 text-7xl text-colorText">16</span> / month</p>
            </div>
          </div>

          {/* features */}
          <div
            className="flex-1  rounded-xl shadow-lg border py-6 space-y-6 px-6 mx-3">
            <div className="flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                All the features of pro plan
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                Accout success Manager
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                Single Sign-On (SSO)
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                Co-conception program
              </p>
            </div>
            <div className=" flex gap-3 items-center">
              <FcOk className="min-w-6 text-2xl" />
              <p>
                Collaboration-Soon
              </p>
            </div>

            {/* get plan btn */}
            <div className="flex ">
              <button
                className="  rounded-xl text-primary font-semibold shadow-lg px-6 py-3 mx-auto ">
                Go to Business
              </button>
            </div>



          </div>

        </div>
      </div>

    </div >
  );
}