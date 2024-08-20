
interface Itext {
    text: string
}

export const Heading = ({text}: Itext) => {
  return (
    <h2 className="font-bold text-slate-950 text-center text-3xl sm:text-4xl md:text-5xl">{text}</h2>
  )
}
