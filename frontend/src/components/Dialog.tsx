import { DangerButton } from "./ui/DangerButton"
import { NormalButton } from "./ui/NormalButton"

interface IDialogProps {
    handleYes: React.MouseEventHandler<HTMLButtonElement>,
    handleNo: React.MouseEventHandler<HTMLButtonElement>,
}

export const Dialog = ({handleYes, handleNo} : IDialogProps) => {
  return (
    <div className="p-7 flex flex-col gap-7 justify-center place-items-center ">
        <div className="font-semibold text-wrap text-sm sm:text-base md:text-lg">Are you sure you want to delete your account?</div>
        <div className="flex gap-7">
            <DangerButton onClick={handleYes}>Yes</DangerButton>
            <NormalButton onClick={handleNo}>No</NormalButton>
        </div>
    </div>
  )
}
