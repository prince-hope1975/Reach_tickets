import React from "react";
import { ImSpinner2 } from "react-icons/im";

const Loading = ({ text, error }: { text: string; error?: boolean }) => {
  return (
    <div
      className={`flex flex-col items-center gap-4 w-full h-full p-3 ${
        error ? "bg-red-500 rounded text-white" : ""
      }`}
    >
      <ImSpinner2 className="animate-spin  text-2xl" />
      {text}
    </div>
  );
};

export default Loading;
