
interface InputProps {
    onChange?: () => void
    type?: 'text' | 'password' | 'email'
    name?: string
    readOnly?: boolean
    value?: string
    className?: string
    placeholder?: string
}

const Input = (props: InputProps) => {
    return (
        <input 
            className={props.className} 
            name={props.name} 
            type={props.type} 
            value={props.value} 
            readOnly={props.readOnly} 
            placeholder={props.placeholder}
            onChange={props.onChange}
        />
    )
}

Input.defaultProps = {
    readOnly: false,
    type: 'text'
}

export default Input
