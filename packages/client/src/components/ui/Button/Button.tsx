interface ButtonProps {
    onClick: () => void,
    children: string,
    disabled?: boolean,
    className?: string,
    type?: "button" | "submit" | "reset" | undefined,
}

const Button = (props: ButtonProps) => {
    return (
        <button 
            className={props.className} 
            type={props.type} 
            onClick={props.onClick} 
            disabled={props.disabled}
        >  
            {props.children}
        </button>
    )
}

Button.defaultProps = {
    type: 'button'
}

export default Button