

interface IButton {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({children, onClick}: IButton) => {
  return (
    <button className="bg-slate-950 shadow-md text-white px-3 py-2 rounded-lg text-xs sm:text-base md:text-lg hover:bg-slate-950 ease-in duration-300 hover:scale-105" onClick={onClick}>{children}</button>
  )
}
