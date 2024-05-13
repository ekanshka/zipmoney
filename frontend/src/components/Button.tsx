

interface IButton {
    text: string,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({text, onClick}: IButton) => {
  return (
    <button className="bg-slate-950 text-white p-3 rounded-lg" onClick={onClick}>{text}</button>
  )
}
