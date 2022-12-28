import "./InputProps.css";

interface InputProps {
    onChange?: () => void
    type?: 'text' | 'password' | 'email'
    name?: string
    readOnly?: boolean
    value?: string
    className?: string
    placeholder?: string
}

const Input = ({type = 'text', readOnly = false, ...props}: InputProps)  => {
    return (
        <input 
            className={props.className} 
            name={props.name} 
            type={type} 
            value={props.value} 
            readOnly={readOnly} 
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

export default Input
