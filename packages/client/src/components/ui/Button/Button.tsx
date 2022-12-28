interface ButtonProps {
    onClick?: () => void,
    children: string,
    disabled?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset"
}

import "./Button.css";

const Button = ({className = 'btn', type = 'button', ...props}: ButtonProps) => {
    return (
        <button 
            className={className} 
            type={type} 
            onClick={props.onClick} 
            disabled={props.disabled}
        >  
            {props.children}
        </button>
    )
}

export default Button
