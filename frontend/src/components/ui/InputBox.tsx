import React from "react";

interface IInputBox {
  id: string,
  label: string;
  placeholder: string;
  type?: string,
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export const InputBox = ({ id, label, type, placeholder, onChange }: IInputBox) => {
  return (
    <div className="flex flex-col gap-4 text-sm sm:text-base md:text-lg">
      <label className="font-semibold text-slate-950">{label}</label>
      <input id={id} type={type} placeholder={placeholder} onChange={onChange} className="px-5 py-2 rounded-md border shadow-sm"/>
    </div>
  );
};

