import React from "react";
import { MdThumbUp, MdHighQuality, MdGroupWork } from "react-icons/md";
import { RiProductHuntFill } from "react-icons/ri";
const ChooseUS = () => {
  const cardList = [
    {
      name: "RICH EXPERIENCE",
      icon: <MdGroupWork />,
    },
    {
      name: "HIGH QUALITY",
      icon: <MdHighQuality />,
    },
    {
      name: "EXTENSIVE PRODUCT RANGE",
      icon: <RiProductHuntFill />,
    },
    {
      name: "EFFICIENCY",
      icon: <MdThumbUp />,
    },
  ];
  return (
    <>
      <div className="flex items-center justify-center gap-10">
        {cardList.map((item) => (
          <span className="flex flex-col items-center justify-center gap-4 text-xl font-semibold text-gray-400 bg-gray-50 border border-gray-100 shadow-xl rounded-xl p-3">
            <span className="text-5xl text-blue-800">{item.icon}</span>
            {item.name}
          </span>
        ))}
      </div>
    </>
  );
};

export default ChooseUS;
