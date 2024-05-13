import React from "react"


interface Itext {
    text: string,
    linkText: string,
    onClick: React.MouseEventHandler<HTMLSpanElement>
}

export const BottomWarning = ({text, linkText, onClick}: Itext) => {
  return (
    <div className="text-slate-950 text-center">
        {text}
        <span onClick={onClick} className="ml-1 underline font-semibold cursor-pointer">{linkText}</span>
    </div>
  )
}
