
interface Iinitials {
    initials: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ProfileButton = ({initials, onClick}: Iinitials) => {
  return (
    <button className="bg-slate-950 text-white text-center text-lg p-3 h-12 w-12 rounded-full" onClick={onClick}>{initials}</button>
  )
}
