import React from "react";

const Spinner = () => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-12 h-12 border-8 rounded-full border-dashed border-red-600 animate-spin"></div>
      <h1 className="text-center text-5xl font-bold text-red-600">
        Loading....
      </h1>
    </div>
  );
};

export default Spinner;
