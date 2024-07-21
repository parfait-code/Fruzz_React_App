import React, { useState } from "react";
import user1 from "../img/user1.png"
import user2 from "../img/user2.png"
import user3 from "../img/user3.png"
import user4 from "../img/user4.png"
import started from "../img/started.png"
import { CgCopyright } from "react-icons/cg";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-scroll";

export const Footer = () => {

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value)
  }
  function handleMessage(e) {
    setMessage(e.target.value)
  }
  function handleSubmit(e) {
    alert(email + " " + message)
  }
  return (
    <footer
      className="bg-slate-600 ">
      <div className="max-w-screen-lg text-gray-400 mx-auto py-3">

        <section
          className=" mx-6 space-y-6 py-6 sm:flex  sm:gap-6 sm:justify-between">
          <div className="space-y-5 sm:w-1/2 ">
            <h2 className="text-3xl font-extrabold text-white">
              People are Saving <br />
              About DoWhith
            </h2>
            <p>Every thing you need to accept to payment and grow your money of manage anywhere on planet.</p>
            <p className="text-white text-5xl">//</p>
            <p>
              I am very helped by this E-wallet application, my days are very easy to use this application and its very helpful in my life, even I can pay a short time
            </p>
            <p>_Aria Zinanrio</p>
            <div className="flex gap-2">
              <img className="w-9 h-9 shadow rounded-full" src={user1} alt="profil" />
              <img className="w-9 h-9 shadow rounded-full" src={user2} alt="profil" />
              <img className="w-9 h-9 shadow rounded-full" src={user3} alt="profil" />
              <img className="w-9 h-9 shadow rounded-full" src={user4} alt="profil" />
            </div>
          </div>
          {/* request Form */}
          <div className=" rounded-lg bg-slate-700 space-y-3 px-6 py-6  text-white sm:w-1/2 " >
            <div className=" space-y-2">
              <img className="w-9 h-11 mx-auto" src={started} />
              <p className=" text-center text-xl">Get Started</p>
            </div>
            {/* form */}
            <form
              onSubmit={handleSubmit}

              className="mx-auto sm:w-10/12"
            >
              <label htmlFor="email">Email</label><br />
              <input
                value={email}
                onChange={handleEmail}
                className="w-full mt-3 bg-slate-600 shadow py-3 px-5 rounded-lg" type="email" name="" id="email" placeholder="Enter your email" /><br />
              <div className="mt-3">
                <label htmlFor="email">Message</label><br />
                <input
                  value={message}
                  onChange={handleMessage}
                  className="w-full h-16 mt-3 px-5  bg-slate-600 shadow rounded-lg" type="textarea" name="" id="message" placeholder="What are you say?" /><br />
              </div>
              <div className=" flex justify-center my-6">

                <button
                  className="btn-primary "
                  disabled={!(email.length === 0) ? false : true}>Request Demo</button>
              </div>

            </form>


          </div>
        </section>
        <section className="space-y-6 mx-6 py-6 lg:flex lg:justify-between">
          <div className="max-w-80 space-y-6 ">
            <h4 className=" text-primary text-4xl font-bold">BICCAS</h4>
            <p>Get started now try our product</p>
            <div className=" flex w-full justify-between pl-1 pr-1 py-1 gap-3 items-center  border border-primary rounded-full hover:scale-105">
              <input type="email" name="" id="email" placeholder="Enter your email here" className=" w-full rounded-full text-sm pl-3 pr-2 py-1" />
              <BsArrowRight className=" p-1 bg-primary text-white text-2xl rounded-full" /> </div>

          </div>
          <div className="sm:flex sm:justify-between sm:gap-3 lg:gap-6">

            <div className="space-y-3">
              <h5 className="text-white text-xl">Support</h5>
              <div className="">
                <Link className="mt-6" to='home'> Help center </Link><br />
                <Link className="mt-6" to='home'> Account information </Link><br />
                <Link className="mt-6" to='home'> About </Link><br />
                <Link className="mt-6" to='home'> Contact </Link>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="text-white text-xl">Help and Solution</h5>
              <div className="">
                <Link className="mt-6" to='home'> Talk to support </Link><br />
                <Link className="mt-6" to='home'> Support docs</Link><br />
                <Link className="mt-6" to='home'> Sustem status </Link><br />
                <Link className="mt-6" to='home'> Covid response </Link>
              </div>
            </div>
            <div className="space-y-3">
              <h5 className="text-white text-xl">Production</h5>
              <div className="">
                <Link className="mt-6" to='home'> Update </Link><br />
                <Link className="mt-6" to='home'> Security</Link><br />
                <Link className="mt-6" to='home'> Beta test </Link><br />
                <Link className="mt-6" to='pricing'> Pricing product</Link>
              </div>
            </div>

          </div>

        </section>
        {/* Copyright */}
        <div className="flex border-b-primary border-b" />
        <div className="flex mx-6 gap-4 mt-3">
          <CgCopyright className="text-xl text-primary" />
          <p>KouamParfait. Copyright and rights reserved</p>
        </div>

      </div>
    </footer>
  );
}