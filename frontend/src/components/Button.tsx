

interface IButton {
    children: React.ReactNode
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({children, onClick}: IButton) => {
  return (
    <button className="bg-slate-950 text-white p-3 rounded-lg" onClick={onClick}>{children}</button>
  )
}
