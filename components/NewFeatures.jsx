import styles from "../styles";
import React from "react";

export default function NewFeatures({ imgUrl, title, subtitle, invertColor }) {
  return (
    <div className="flex-1 flex flex-col sm:max-w-[250px] min-w-[210px]">
      <div
        className={`${styles.flexCenter} w-[70px] h-[70px] rounded-[24px] bg-[#323F5D]`}
      >
        <img
          src={imgUrl}
          alt="icon"
          className="w-1/2 h-1/2 object-contain"
          style={
            invertColor
              ? {
                  filter: "invert(1)",
                }
              : {}
          }
        />
      </div>
      <h1 className="mt-[26px] font-bold text-[24px] leading-[16.24px] text-white">
        {title}
      </h1>
      <p className="flex-1 mt-[16px] font-normal text-[14px] text-[#B0B0B0] leading-[15.4px]">
        {subtitle}
      </p>
    </div>
  );
}
