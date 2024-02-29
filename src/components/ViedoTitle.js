import React from "react";

const ViedoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4">
        <button className="bg-white text-black p-4 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          {" "}
          ▶ Play
        </button>
        <button className="bg-gray-500 text-black p-4 mx-2 px-12 text-xl hover:bg-opacity-80 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default ViedoTitle;
