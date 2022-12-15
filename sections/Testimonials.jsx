import React from "react";
("use client");

import { motion } from "framer-motion";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { TitleText, TypingText } from "../components";
export default function Testimonials() {
  return (
    <section className={`${styles.paddings} relative z-10`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| Testimonials" textStyles="" />
        <TitleText
          title={<>Helping our client to succeed with speed</>}
          textStyles=" w-[70%]"
        />
        <div className="mt-[50px] flex flex-row justify-between items-start w-[100%]">
          <div className="flex relative pb-10  ">
            {testimonialCard()}
            {testimonialCard()}
            {testimonialCard()}

            
          </div>
        </div>
      </motion.div>
    </section>
  );

    function testimonialCard() {
        return <div className="w-[500px] h-[300px] gradient-05 rounded-[20px] m-2 p-6 shadow-md">
            <div className="flex flex-col h-full justify-between">
                <p className="text-white opacity-80 text-xl">
                    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    euismod, nisl vel tincidunt luctus, nisl nisl fermentum massa,
                    nec luctus nunc lorem eget dolor."
                </p>
                <div className="flex flex-row w-full justify-between items-center">
                    <div className="flex flex-row mt-[10px]">
                        <img
                            src="https://i.imgur.com/4ZQ3ZQx.png"
                            alt=""
                            className="w-[50px] h-[50px] rounded-full" />
                        <div className="flex flex-col ml-4">
                            <p className="text-white font-bold text-xl">John Doe</p>
                            <p className="text-white opacity-50 text-md">CEO, Company</p>
                        </div>
                    </div>
                    <p className="text-white opacity-50 text-sm">6 months ago</p>
                </div>
            </div>
        </div>;
    }
}