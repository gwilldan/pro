import React from "react";
import ProfileImg from "@/assets/man.jpeg";
import ProfileCard from "../cards/ProfileCard";

const profiles = [
  {
    img: ProfileImg,
    name: "Full name",
    title: "Job title, Company name",
  },
  {
    img: ProfileImg,
    name: "Full name",
    title: "Job title, Company name",
  },
  {
    img: ProfileImg,
    name: "Full name",
    title: "Job title, Company name",
  },
  {
    img: ProfileImg,
    name: "Full name",
    title: "Job title, Company name",
  },
  {
    img: ProfileImg,
    name: "Full name",
    title: "Job title, Company name",
  },
  {
    img: ProfileImg,
    name: "Full name",
    title: "Job title, Company name",
  },
];

const Attendee = () => {
  return (
    <div className="mb-[48px]">
      <h6 className="text-[20px] font-[700] leading-[28px] text-secondary mb-[24px]">
        See who have done this task below
      </h6>
      <div className="flex flex-col gap-[32px] md:grid grid-cols-2">
        {profiles.map((item, index) => {
          return <ProfileCard {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Attendee;
