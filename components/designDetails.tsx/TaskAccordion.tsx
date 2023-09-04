"use client";
import React, { Dispatch, SetStateAction, useState } from "react";
import * as AiIcons from "react-icons/ai";

interface AccordionItemProps {
  week: string;
  details: string;
  // setDetailsOpen: Dispatch<SetStateAction<boolean>>;
  // detailsOpen: boolean;
}

const weeks = [
  {
    week: "Week One",
    details:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    week: "Week Two",
    details:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    week: "Week Three",
    details:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
  {
    week: "Week Four",
    details:
      " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.",
  },
];

const TaskAccordion = () => {
  return (
    <section className="rounded-[12px] shadow-md p-[16px] mb-[16px]">
      <h3 className="leading-[34px] font-[700] text-[24px] text-black pb-[8px] ">
        Weekly Tasks
      </h3>
      <div className="flex flex-col gap-[25px]">
        {weeks.map((item, index) => {
          const { week, details } = item;

          return <AccordionItem week={week} key={index} details={details} />;
        })}
      </div>
    </section>
  );
};

export default TaskAccordion;

const AccordionItem: React.FC<AccordionItemProps> = ({ week, details }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <div className="border-t-secondary border-t-[1px]">
      <div
        className="h-[60px] flex justify-start items-center gap-[16px]"
        onClick={() => setDetailsOpen(!detailsOpen)}
      >
        {detailsOpen ? <AiIcons.AiOutlineDown /> : <AiIcons.AiOutlineUp />}
        <h5 className="text-secondary text-[18px] font-[600] leading-[27px]">
          {week}
        </h5>
      </div>
      {detailsOpen && (
        <p className="leading-[24px] text-[16px] text-secondary text-justify h-auto duration-200 transition-all">
          {details}
        </p>
      )}
    </div>
  );
};
