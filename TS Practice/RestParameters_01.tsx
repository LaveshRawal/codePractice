import React from "react";

const RestParameters_01 = () => {
  const getNames = (...names: string[]): string => {
    return names.join(",");
  };
  return (
    <>
      <h1>
        {getNames("Lavesh","Ameena","Jyoti","Neha","Sneha","Shweta","Urvashi"
        )}
      </h1>
    </>
  );
};

export default RestParameters_01;
