import React from "react";

interface ILabelSpanProps {
    children: React.ReactNode, 
    label: string,
}

export const LabelSpan = ({children, label}: ILabelSpanProps) => {
  return (
    <div className="flex justify-around place-items-center px-2 gap-2 text-sm sm:text-base md:text-lg">
      <label className="w-[30%]">{label}</label>
      <span className="px-3 py-2 w-[70%]">{children}</span>
    </div>
  );
};
