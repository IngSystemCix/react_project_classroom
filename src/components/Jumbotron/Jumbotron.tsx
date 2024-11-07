import { ReactNode } from "react"
import './Jumbotron.css'

interface Props {
    children: ReactNode
}

export const Jumbotron = ({children}: Props) => {
  return (
    <div className="jumbotron">
      {children}
    </div>
  )
}