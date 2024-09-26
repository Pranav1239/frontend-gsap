import React, { useState } from "react";
import IconsFall from "./IconsFall";

const IconFallBtn = () => {
  const [fall, setFall] = useState<boolean>(false);
  const handleFall = () => {
    setFall(true);
  };

  if (fall) {
    return (
      <>
        <IconsFall />
      </>
    );
  }

  return (
    <div>
      <button
        onClick={handleFall}
        className="relative overflow-hidden bg-transparent px-3 py-2 rounded-md border-2 shadow-md border-gray-100 transition-transform transform hover:-translate-y-2"
      >
        <span className="absolute inset-0 bg-white transition-transform duration-300 transform -translate-y-full hover:translate-y-0"></span>
        <span className="relative z-10">Click me</span>
      </button>
    </div>
  );
};

export default IconFallBtn;
