import React from "react";
("use client");

import { motion } from "framer-motion";
import {
  AiFillInstagram,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";
import {
  MdLocationCity,
  MdOutlineAlternateEmail,
  MdOutlineLocationCity,
  MdOutlinePhone,
} from "react-icons/md";

import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import { socials } from "../constants";
export default function ContactUs() {
  const getInTouch = (
    <motion.div
      variants={fadeIn("right", "tween", 0.2, 1)}
      className="flex flex-col pt-[5%]"
    >
      {/* <div className="flex flex-col pt-[5%]"> */}
      <p className="text-5xl font-bold text-white">Get in touch</p>
      <p className="text-md text-slate-400 mt-[30px]">Connect with us today</p>
      <div className="flex flex-row items-center mt-[20px]">
        <MdOutlineAlternateEmail size="2rem" className="text-slate-400" />
        <p className="text-md text-white ml-[15px]">info@spotmies.com</p>
      </div>
      <div className="flex flex-row items-start mt-[20px]">
        <MdOutlineLocationCity size="2.4rem" className="text-slate-400" />
        <p className="text-md text-white ml-[15px]">
          AU incubation center, <br /> AU college of engineering,
          <br /> Visakhapatnam
        </p>
      </div>
      <div className="flex flex-row items-center mt-[20px]">
        <MdOutlinePhone size="2rem" className="text-slate-400" />
        <p className="text-md text-white ml-[15px]">+91 8341980196</p>
      </div>

      <p className="text-white font-bold text-md mt-[30px]">Follow us</p>
      <div className="flex gap-6 mt-[15px]">
        {socials.map((social) => (
          <img
            
            onClick={() => window.open(social.link, "_blank")}
            key={social.name}
            src={social.url}
            alt={social.name}
            className="w-[30px] h-[30px] object-contain cursor-pointer opacity-70 hover:opacity-100"
          />
        ))}
      </div>

      {/* <div className="flex flex-row items-center mt-[15px] gap-[20px]">
        <AiFillTwitterSquare size="2.4rem" className="text-slate-400" />
        <AiFillInstagram size="2.4rem" className="text-slate-400" />
        <AiFillLinkedin size="2.4rem" className="text-slate-400" />
      </div> */}
      {/* </div> */}
    </motion.div>
  );
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Contact Us" textStyles="text-center" />
        <TitleText
          title={<>Take A Coffee & Chat With Us</>}
          textStyles="text-center"
        />
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`${styles.innerWidth} mt-[50px] flex flex-col-reverse md:flex-row justify-between items-start`}
        >
          {/* <div className="mt-[50px] flex flex-col-reverse md:flex-row justify-between items-start"> */}
          {getInTouch}
          <motion.div
            variants={fadeIn("left", "tween", 0.2, 1)}
            className="w-[100%] md:w-[700px] h-fit md:h-[550px] mt-[10px] rounded-[10px] md:rounded-[20px] gradient-05 border-[1px] border-[#6A6A6A] border "
          >
            {/* <div className="w-[100%] md:w-[700px] h-fit md:h-[550px] mt-[10px] rounded-[10px] md:rounded-[20px] gradient-05 border-[1px] border-[#6A6A6A] border "> */}
            <form>
              <div className="flex flex-col md:flex-row gap-[15px] md:gap-[45px] mt-[30px] p-[20px] w-full justify-around">
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Name
                  </p>
                  <input
                    required
                    type="text"
                    placeholder="Your Name"
                    className="w-full  outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Email
                  </p>
                  <input
                    required
                    type="text"
                    placeholder="Your Email Address"
                    className="w-full outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-[15px] md:gap-[45px] pt-[0px] p-[20px] w-full justify-around">
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Phone
                  </p>
                  <input
                    required
                    type="text"
                    placeholder="Your Number"
                    className="w-full outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
                <div className="flex flex-col items-start w-full">
                  <p className="text-slate-400 text-md font-semibold m-[5px]">
                    Subject
                  </p>
                  <input
                    required
                    type="text"
                    placeholder="What is the Subject"
                    className="w-full outline-none gradient-05 rounded-[10px] p-[15px] bg-slate-900 text-white"
                  />
                </div>
              </div>
              <div className="flex flex-col items-start w-full pt-[0px] p-[20px]">
                <p className="text-slate-400 text-md font-semibold m-[5px]">
                  Message
                </p>
                <textarea
                  type="text"
                  placeholder="Your Message"
                  rows={5}
                  className="w-full outline-none gradient-05 rounded-[10px] p-[10px] bg-slate-900 text-white"
                />
              </div>
              <div className="flex flex-row justify-start items-center w-full pt-[0px] p-[20px] ">
                <button
                  type="submit"
                  className="border-[#273558] border-[3px] gradient-05 text-white pt-[10px] pb-[10px] font-bold p-[20px] rounded-[10px]"
                >
                  Submit
                </button>
              </div>
            </form>
            {/* </div> */}
          </motion.div>
          {/* </div> */}
        </motion.div>
      </motion.div>
    </section>
  );
}
