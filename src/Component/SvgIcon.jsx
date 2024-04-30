import React from "react";

function Icon({item}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        fill="#1D88FF"
        d={item}
      ></path>
    </svg>
  );
}

export default Icon;