

interface INormalButtonProps {
    children: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const NormalButton = ({children, onClick}: INormalButtonProps) => {
  return (
    <button className="bg-slate-500 shadow-md text-white px-3 py-2 rounded-lg text-sm sm:text-base md:text-lg hover:bg-slate-950 ease-in duration-300 hover:scale-105" onClick={onClick}>{children}</button>
  )
}
