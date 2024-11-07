import { ReactNode } from "react"
import './Card.css'

interface CardProps {
    title: string
    subtitle?: string
    description?: string
    listItems?: string[]
    children?: ReactNode
}

export const Card = ({title, subtitle, description, listItems, children}: CardProps) => {
    return (
        <div className="card">
            <div className="header__card">
                <h2>{title}</h2>
            </div>
            {subtitle && <h3>{subtitle}</h3>}
            {description && <p>{description}</p>}
            {listItems && (
                <ul>
                    {listItems.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            )}
            {children}
        </div>
    )
}