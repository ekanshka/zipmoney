

interface Itext {
    text: string
}

export const SubHeading = ({text}: Itext) => {
  return (
    <div className="text-slate-950">{text}</div>
  )
}
