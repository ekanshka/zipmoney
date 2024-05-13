
interface Itext {
    text: string
}

export const Heading = ({text}: Itext) => {
  return (
    <h2 className="text-5xl font-bold text-slate-950 text-center">{text}</h2>
  )
}
