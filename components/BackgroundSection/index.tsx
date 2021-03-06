import { Article } from "phosphor-react"
import { ReactElement } from "react"
import { DividerSection } from "../DividerSection"

type props = {
  content: ReactElement,
  colorsBox: {
    color1: string,
    color2: string,
  }
  hiddenBox?: boolean,
  id: string,
}

export const BackgroundSection = ({ content, colorsBox, id, hiddenBox }: props): ReactElement => {
  const { color1, color2 } = colorsBox
  return (
    <section id={id} className="w-full grid md:grid-cols-2 grid-cols-1">
      <div className={`${color1} h-110`} />
      <div className={`${color2} h-110`} />
      <div className="md:px-16 px-6 w-full md:h-110 z-10 absolute">
        {content}
      </div>
    </section>
  )
}