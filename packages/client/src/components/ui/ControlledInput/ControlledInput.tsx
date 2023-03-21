import "./ControlledInput.css";

interface Props {
    onChange?: () => void
    placeholder?: string
    value?: string
    error?: string
    name?: string
    label?: string
    readOnly?: boolean
    className?: string
    type?: "text" | "email" | "password" | "tel" | "number"
}

const ControlledInput = ({onChange, placeholder, value, error, name, label, readOnly, className, type = 'text'}: Props) => {
    return (
        <div className="controller-input">
            <label className="form__label">
                {label}
                <input 
                    className={className} 
                    name={name} 
                    type={type} 
                    value={value} 
                    readOnly={readOnly} 
                    placeholder={placeholder}
                    onChange={onChange}
                />
            </label>
            <div className="error">{error}</div>
        </div>
    )
}

export default ControlledInput
