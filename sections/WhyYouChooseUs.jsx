"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { whyYouChooseUs } from "../constants";
import { NewFeatures, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";
import { MdPhone } from "react-icons/md";

const WhyYouChooseUs = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/choose_us.png"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        {/* <TypingText title="| How We Works" /> */}
        <TitleText title={<>Why Choose Us?</>} />
        <div className="mt-[31px] flex flex-col max-w-[450px] gap-[24px]">
          <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
            {whyYouChooseUs.map((feature) => (
              <NewFeatures key={feature.title} {...feature}  />
            ))}
          </div>
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default WhyYouChooseUs;
