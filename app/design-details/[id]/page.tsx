"use client";
import { MainTitle } from "@/components/headings";
import React, { useEffect, useState } from "react";
import MainImg from "@/assets/man.jpeg";
import Image from "next/image";
import RequirementItems from "@/components/cards/RequirementItems";
import { requirementData } from "@/constants/requirements";
import { constraintsData } from "@/constants/constraints";
import { ResourceData } from "@/constants/resources";
import { TimelineData } from "@/constants/Timeline";
import Conclusion from "@/components/designDetails.tsx/Conclusion";
import Attendee from "@/components/designDetails.tsx/Attendee";
import Newsletter from "@/components/designDetails.tsx/Newsletter";
import TaskShare from "@/components/designDetails.tsx/TaskShare";
import JobTypes from "@/components/designDetails.tsx/JobTypes";
import * as AiIcons from "react-icons/ai";
import * as LiaIcons from "react-icons/lia";
import Link from "next/link";
import TaskAccordion from "@/components/designDetails.tsx/TaskAccordion";
import axios from "axios";
import { DesignProps } from "@/types";
import { useParams } from "next/navigation";

const socialIcons = [
  {
    name: "link",
    icon: <AiIcons.AiOutlineLink size={24} />,
  },
  {
    name: "linkedin",
    icon: <AiIcons.AiFillLinkedin size={24} />,
  },
  {
    name: "twitter",
    icon: <AiIcons.AiOutlineTwitter size={24} />,
  },
  {
    name: "facebook",
    icon: <LiaIcons.LiaFacebookF size={24} />,
  },
];

const page = () => {
  const path = useParams();
  const { id }: any = path;
  const [data, setData] = useState<DesignProps[]>([
    {
      id: "",
      title: "",
      image: "",
      shortDescription: "",
      requirements: [""],
      constraints: [""],
      resources: [""],
      timeline: [""],
      weeklyTasks: [
        {
          id: "",
          week: "",
          designId: "",
        },
      ],
    },
  ]);
  const fetchDesign = async () => {
    try {
      const response = await axios.get(`/api/designs/${id}`);
      console.log(response);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDesign();
  }, []);
  return (
    <div className="pt-[100px] pb-[100px] flex justify-center items-center">
      <div className="px-[16px] max-w-[1312px] w-full">
        <div className="mb-[16px] flex items-center justify-start gap-[8px]">
          <AiIcons.AiOutlineLeft size={16} fontWeight={700} />
          <span className="capitalize">Back to all posts</span>
        </div>
        <div className="mb-[16px]">
          <MainTitle title="Explore Design Challenges to Spark Your Creativity" />
        </div>
        <div className="flex justify-between items-center mb-[16px]">
          <div className="flex items-center justify-start gap-[8px]">
            <span className="text-[16px] leading-[24px] text-secondary">
              Job Board
            </span>
            <AiIcons.AiOutlineRight size={16} />
            <span className="text-[16px] font-[600] leading-[24px] text-secondary">
              Category
            </span>
          </div>
          <div>
            {
              <div className="flex justify-center items-center gap-[12px]">
                {socialIcons.map((item, index) => {
                  const { name, icon } = item;
                  return (
                    <Link href="https://social.com" key={index}>
                      {icon}
                    </Link>
                  );
                })}
              </div>
            }
          </div>
        </div>
        <div className="max-h-[560px] w-full rounded-[8px] overflow-hidden mb-[16px]">
          <Image
            src={MainImg}
            alt="Image "
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-between items-center gap-[28px]">
          <div className="flex justify-start gap-[8px] items-center flex-1">
            <div className="h-[56px] w-[56px] rounded-full overflow-hidden mb-[16px]">
              <Image
                src={MainImg}
                alt="Image "
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col justify-between items-start h-full gap-[8px]">
              <h3 className="text-grey-400 font-[700] text-[16px] leading-[24px] w-full">
                Suka Sounds Labels
              </h3>
              <h6 className="text-grey-200 text-[14px] leading-[20px]">
                2k Followers
              </h6>
            </div>
          </div>
          <div className="flex justify-center items-center px-[12px] py-[8px] rounded-[4px] bg-primary">
            <h3 className="text-[14px] leading-[22.4px] text-white font-[500]">
              Follow
            </h3>
          </div>
        </div>
        <div className="border-l-[2px] border-secondary pl-[8px] mb-[16px]">
          <h6 className="leading-[21px] text-[14px] text-secondary ">
            Image caption goes here
          </h6>
        </div>
        <h5 className="leading-[27px] font-[500] text-[18px] text-primary pb-[16px]">
          Dolor enim eu tortor urna sed duis nulla. Aliquam vestibulum, nulla
          odio nisl vitae. In aliquet pellentesque.
        </h5>
        <h6 className="px-[24px] border-l-[2px] border-l-secondary mb-[24px]">
          Once upon a time in a bustling city, there lived a talented musician
          named Emily. With her enchanting voice and soulful melodies, she
          captivated audiences wherever she performed. Emily had a deep passion
          for music and spent countless hours honing her skills and writing
          heartfelt songs. Her dream was to share her music with the world and
          touch the hearts of people from all walks of life.
        </h6>
        <div className="pt-[56px] pb-[32px] px-[16px] shadow-md rounded-[8px] flex flex-col gap-[32px] mb-[16px] md:grid grid-cols-2 hover:border-secondary duration-200 hover:border-[1px]">
          <div>
            <h4 className="mb-[16px] font-[600] text-[18px]">Requirements:</h4>
            <div className="flex flex-col gap-[16px]">
              {requirementData.map((item, index) => {
                return <RequirementItems {...item} key={index} />;
              })}
            </div>
          </div>
          <div>
            <h4 className="mb-[16px] font-[600] text-[18px]">Constraints:</h4>
            <div className="flex flex-col gap-[16px]">
              {constraintsData.map((item, index) => {
                return <RequirementItems {...item} key={index} />;
              })}
            </div>
          </div>
          <div>
            <h4 className="mb-[16px] font-[600] text-[18px]">Constraints:</h4>
            <div className="flex flex-col gap-[16px]">
              {ResourceData.map((item, index) => {
                return <RequirementItems {...item} key={index} />;
              })}
            </div>
          </div>
          <div>
            <h4 className="mb-[16px] font-[600] text-[18px]">Constraints:</h4>
            <div className="flex flex-col gap-[16px]">
              {TimelineData.map((item, index) => {
                return <RequirementItems {...item} key={index} />;
              })}
            </div>
          </div>
        </div>
        <TaskAccordion />
        <Conclusion />
        <div className="md:flex justify-between items-start">
          <Attendee />
          <Newsletter />
        </div>
        <JobTypes />
      </div>
    </div>
  );
};

export default page;
