import Link from "next/link";
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as LiaIcons from "react-icons/lia";

const socialIcons = [
  {
    name: "link",
    icon: <AiIcons.AiOutlineLink size={32} />,
  },
  {
    name: "linkedin",
    icon: <AiIcons.AiFillLinkedin size={32} />,
  },
  {
    name: "twitter",
    icon: <AiIcons.AiOutlineTwitter size={32} />,
  },
  {
    name: "facebook",
    icon: <LiaIcons.LiaFacebookF size={32} />,
  },
];

const TaskShare = () => {
  return (
    <div className="py-[32px] mb-[24px]">
      <p className="mb-[8px] font-[600] text-[18px] leading-[27px] text-secondary text-center md:text-left">
        Share this task with friends
      </p>
      <div className="flex justify-center md:justify-start items-center gap-[12px]">
        {socialIcons.map((item, index) => {
          const { name, icon } = item;
          return (
            <Link href="https://social.com" key={index}>
              {icon}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TaskShare;
