import { ReactNode } from "react"
import "./Button.css"

interface Props {
    onClick?: () => void,
    children: ReactNode,
    disabled?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset"
}

const Button = ({onClick, children, className = 'btn', disabled, type = 'button'}: Props) => {
    return (
        <button 
            className={className} 
            type={type} 
            onClick={onClick} 
            disabled={disabled}
        >  
            {children}
        </button>
    )
}

export default Button
