import React from "react";

const Container = ({ child }) => {
  return (
    <div className="w-full px-1 mx-auto lg:max-w-6xl md:max-w-4xl">{child}</div>
  );
};

export default Container;
