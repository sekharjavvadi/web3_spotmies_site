import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { testimonials } from "../constants";
import { motion } from "framer-motion";
import { TitleText, TypingText } from "../components";
import styles from "../styles";
import { staggerContainer, fadeIn } from "../utils/motion";
export default function Testimonials2() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

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
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.25 }}
          className={`w-[90vw] m-auto mt-[50px]`}
        >
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            {/* <div className="w-[90vw] m-auto"> */}
            <Carousel responsive={responsive}>
              {testimonials.map((testimonial, index) =>
                testimonialCard({ ...testimonial, key: index })
              )}
            </Carousel>
            {/* </div> */}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );

  function testimonialCard({ text, image, name, position, when }) {
    return (
      <div className="w-[80vw] min-h-[300px] max-h-[350px]  md:max-h-[350px] h-[300px] md:w-[400px] md:h-[300px] gradient-05 rounded-[20px] m-2 md:p-6 p-4 shadow-md">
        <div className="flex flex-col h-full justify-between">
          <p className="text-white opacity-80 text-md  md:text-xl  text-justify text-ellipsis">
            "{text}"
          </p>

          <div className="flex flex-row w-full justify-between items-center ">
            <div className="flex flex-row mt-[10px]">
              <img
                src={image}
                alt=""
                className="w-[35px] h-[35px] md:w-[50px] md:h-[50px] rounded-full"
              />
              <div className="flex flex-col ml-4">
                <p className="text-white font-bold text-md md:text-xl">{name}</p>
                <p className="text-white opacity-50 text-sm md:text-md">{position}</p>
              </div>
            </div>
            <p className="text-white opacity-50 text-xs md:text-sm">{when}</p>
          </div>
        </div>
      </div>
    );
  }
}
