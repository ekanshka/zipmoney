

interface Itext {
    text: string,
    bold?: boolean,
}

export const SubHeading = ({text, bold}: Itext) => {
  return (
    <div className={`text-slate-950 text-sm sm:text-base md:text-lg ${bold? "font-semibold" : ""}`}>{text}</div>
  )
}
