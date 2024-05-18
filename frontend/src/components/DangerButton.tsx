

interface IDangerButtonProps {
    children: React.ReactNode,
    onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const DangerButton = ({children, onClick}: IDangerButtonProps) => {
  return (
    <button className="bg-red-700 shadow-md text-white px-3 py-2 rounded-lg text-sm sm:text-base md:text-lg hover:bg-red-600 ease-in-out duration-300 hover:scale-105 " onClick={onClick}>{children}</button>
  )
}
