import React from "react";

const content = [
  {
    text: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  },
  {
    text: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  },
  {
    text: "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  },
];

const Conclusion = () => {
  return (
    <div className="p-[16px] rounded-[12px] shadow-md mb-[48px]">
      <h3 className="font-[700] leading-[33px] text-[24px] text-secondary py-[20px]">
        Conclusion
      </h3>
      <div className="flex flex-col gap-[16px]">
        {content.map((item, index) => {
          const { text } = item;
          return (
            <p
              className="text-[16px] leading-[24px] text-secondary"
              key={index}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Conclusion;
