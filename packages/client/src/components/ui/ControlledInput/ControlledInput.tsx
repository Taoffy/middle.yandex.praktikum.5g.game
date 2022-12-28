import "./ControlledInput.css";

interface ControlledInputProps {
    onChange?: () => void
    type?: string
    placeholder?: string
    value?: string
    error?: string
    name?: string
    label?: string
    readOnly?: boolean
    className?: string
}

const ControlledInput = ({type = 'text', ...props}: ControlledInputProps) => {
    return (
        <div className="controller-input">
            <label className="form__label">
                {props.label}
                <input 
                    className={props.className} 
                    name={props.name} 
                    type={type} 
                    value={props.value} 
                    readOnly={props.readOnly} 
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                />
            </label>
            <div className="error">{props.error}</div>
        </div>
    )
}

export default ControlledInput
