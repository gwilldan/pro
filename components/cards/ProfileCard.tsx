import React from "react";
import Image, { StaticImageData } from "next/image";

interface ProfileProps {
  img: StaticImageData;
  name: string;
  title: string;
}

const ProfileCard: React.FC<ProfileProps> = ({ img, name, title }) => {
  return (
    <div className="flex justify-start items-center gap-[16px]">
      <div className="h-[56px] w-[56px] rounded-full overflow-hidden">
        <Image
          src={img}
          alt="Profile imgage"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h4 className="text-[16px] font-[600] leading-[24px] text-secondary">
          {name}
        </h4>
        <h5 className="text-[16px] font-[400] leading-[24px] text-secondary">
          {title}
        </h5>
      </div>
    </div>
  );
};

export default ProfileCard;
