import React from "react";
("use client");

import { motion } from "framer-motion";
import { BsLinkedin } from "react-icons/bs";

import styles from "../styles";
import { staggerContainer } from "../utils/motion";
import { NewFeatures, TitleText, TypingText } from "../components";
import teamJson from "../json_files/team.json";
import { newFeatures } from "../constants";
export default function Team() {
  const linkedinIcon = (linkedinUrl) => {
    const navigateToLinkedin = () => {
      window.open(linkedinUrl, "_blank");
    };
    return (
      <BsLinkedin
        className=" cursor-pointer fade-in-animation"
        color="#0077B5"
        onClick={navigateToLinkedin}
      />
    );
  };
  const photoCard = (
    <div className="w-[90%] md:w-[40%] md:h-[80%] relative h-[300px] mt-[15px] md:m-0 ">
      <div
        className="h-[35%] w-[50%] rounded-[10px] absolute top-0 left-0 gradient-05 shadow-md drop-shadow-sm hover:drop-shadow-md"
        onMouseOver={() => {
          document.getElementById("hemanth-linkedin").style.display = "block";
        }}
        onMouseOut={() => {
          document.getElementById("hemanth-linkedin").style.display = "none";
        }}
      >
        <img
          src={teamJson.hemanth}
          alt="Hemanth"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
        <div className="fixed bottom-5 right-5 hidden" id="hemanth-linkedin">
          {linkedinIcon(
            "https://www.linkedin.com/in/hemanth-kumar-veeranala-967ba318a"
          )}
        </div>
      </div>
      <div
        className="h-[62%] w-[50%] rounded-[10px] absolute bottom-0 left-0 gradient-05 shadow-md drop-shadow-sm "
        onMouseOver={() => {
          document.getElementById("sekhar-linkedin").style.display = "block";
        }}
        onMouseOut={() => {
          document.getElementById("sekhar-linkedin").style.display = "none";
        }}
      >
        <img
          src={teamJson.sekhar}
          alt="sekhar"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
        <div className="fixed bottom-5 right-5 hidden" id="sekhar-linkedin">
          {linkedinIcon("https://www.linkedin.com/in/sekhar-javvadi-987380158")}
        </div>
      </div>
      <div
        className="h-[62%] w-[48%] rounded-[10px] absolute top-0 right-0 gradient-05 shadow-md drop-shadow-sm "
        onMouseOver={() => {
          document.getElementById("satish-linkedin").style.display = "block";
        }}
        onMouseOut={() => {
          document.getElementById("satish-linkedin").style.display = "none";
        }}
      >
        <img
          src={teamJson.satish}
          alt="Satish"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
        <div className="fixed bottom-5 right-5 hidden" id="satish-linkedin">
          {linkedinIcon(
            "https://www.linkedin.com/in/saride-satish-kumar-59a26a187"
          )}
        </div>
      </div>
      <div
        className="h-[35%] w-[48%] rounded-[10px] absolute bottom-0 right-0 gradient-05 shadow-md drop-shadow-sm "
        onMouseOver={() => {
          document.getElementById("naveen-linkedin").style.display = "block";
        }}
        onMouseOut={() => {
          document.getElementById("naveen-linkedin").style.display = "none";
        }}
      >
        <img
          src={teamJson.naveen}
          alt="Hemanth"
          className="h-full w-full object-cover rounded-[15px] p-[8px]"
        />
        <div className="fixed bottom-5 right-5 hidden" id="naveen-linkedin">
          {linkedinIcon(
            "https://www.linkedin.com/in/naveen-kumar-atava-318ba318a"
          )}
        </div>
      </div>
    </div>
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
        <TypingText title="| Team" textStyles="text-center" />
        <TitleText
          title={<>We are a team of Experts.</>}
          textStyles="text-center"
        />

        <div className="mt-[50px] flex flex-col md:flex-row justify-between items-start md:items-start w-[100%] h-fit md:h-[700px]">
          <div className= "w-[100%] md:w-[50%] flex flex-col items-start mt-[3%]">
            <p className="text-4xl font-bold text-white">
              We believe quality matters.
            </p>
            <p className="w-full w-[90%] md:w-[70%] text-justify text-white opacity-80 mt-4">
              {teamJson.description}
            </p>
            <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
              {newFeatures.map((feature) => (
                <NewFeatures key={feature.title} {...feature} />
              ))}
            </div>
          </div>
         
          {photoCard}
         
          
        </div>
      </motion.div>
    </section>
  );
}