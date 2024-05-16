

interface ILabelInputProps {
    name: string,
    input: string,
    label: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export const LabelInput = ({name, input, label, onChange}: ILabelInputProps) => {
  return (
    <div className="flex justify-around gap-2 place-items-center flex-nowrap px-2 text-sm sm:text-base md:text-lg">
        <label className="w-[30%] ">{label}</label>
        <input name={name} value={input} onChange={onChange} className="bg-neutral-200 outline-1 rounded-md px-3 py-2 w-[70%]"/>
    </div>
  )
}
