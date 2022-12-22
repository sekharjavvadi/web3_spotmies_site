"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { startingFeatures } from "../constants";
import { StartSteps, TitleText, TypingText } from "../components";
import { staggerContainer, fadeIn, planetVariants } from "../utils/motion";

const GetStarted = () => (
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
          src="https://firebasestorage.googleapis.com/v0/b/web3-spotmies.appspot.com/o/assets%2Fhow%20can%20we%20get%20into%20project.png?alt=media&token=83038906-bf68-49ba-b73a-ced26915ae22"
          alt="get-started"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| How We Work" />
        <TitleText title={<>How we get into the project</>} textStyles={`${styles.sideHeadingLeading}`} />
        <div className="mt-[31px] flex flex-col max-w-[450px] gap-[24px]">
          {startingFeatures.map((feature, index) => (
            <StartSteps
              key={feature.text}
              number={`${index < 10 ? "0" : ""} ${index + 1}`}
              {...feature}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default GetStarted;
