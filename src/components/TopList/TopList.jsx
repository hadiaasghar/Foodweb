import React from "react";
import Card from "../Card/Card";
const FoodData = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB5yFz-2s_6F6fmR1Hom1uMRqeKzLhUMysA&s",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40071",
    name: "Food Name1",
    desc: "having a nice food ",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5tnCgicdgP6vo_cVcS2eWAMCWFwcmoDcjhw&s",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40071",
    name: "Food Name2",
    desc: "dist about having fun with family",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTScywP6eJm1Jc1C0k_CwGvRTU4m7r1rrWN2Q&s",
    rating: "⭐⭐⭐⭐⭐",
    price: "$40071",
    name: "Food Name3",
    desc: "dish that comes from mountains",
  },
];

const TopList = () => {
  return (
    <div className=" py-4">
      {/*header section*/}
      <div className="text-center mb-14 mt-12 ">
        <h1 className="text-5xl font-semibold">Top List</h1>
        <p className="text-xl py-4 "> our Top List</p>
      </div>
      {/*Card section*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 justify-items-center p-6 py-8 md:pt-8 ">
        {FoodData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-3 bg-white/50 p-4  w-60 hover:scale-110 transition duration-300 rounded-3xl"
          >
            <img
              src={item.image}
              className="w-40 h-40 ovject-cover mx-auto rounded-full image-shadow"
            />
            <div className="flex flex-col space-y-2">
              <p className="text-red-500">{item.rating}</p>
              <p className="text-lg font-semibold">{item.name}</p>
              <h1 className="font-semibold ">{item.desc}</h1>

              <p className="font-semibold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopList;
