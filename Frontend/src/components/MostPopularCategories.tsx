import React from "react";

type Props = {};

const MostPopularCategories = (props: Props) => {
  const popularCategories = [
    "Ajanda",
    "Araştırma",
    "Hikayeler",
    "Roman",
    "Sanat",
  ];
  return (
    <div className="flex items-center justify-between">
      {popularCategories.map((category) => {
        return (
          <div className="hover:bg-primary bg-footer text-black rounded-[1.7rem] rounded-br-[4rem] hover:text-white cursor-pointer p-4 w-48 h-24 flex items-center justify-center text-2xl font-bold">
            {category}
          </div>
        );
      })}
    </div>
  );
};

export default MostPopularCategories;
