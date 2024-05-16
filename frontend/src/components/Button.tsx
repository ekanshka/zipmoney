

interface IButton {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({children, onClick}: IButton) => {
  return (
    <button className="bg-slate-950 shadow-md text-white px-3 py-2 rounded-lg text-sm sm:text-base md:text-lg" onClick={onClick}>{children}</button>
  )
}
