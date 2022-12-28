import Input from '../Input/Input';
import ErrorComponent from '../ErrorComponent/ErrorComponent';

import "./ControlledInput.css";

interface ControlledInputProps {
    onChange?: () => void
    type?: 'text' | 'password' | 'email'
    placeholder?: string
    value?: string
    error?: string
    name?: string
    label?: string
    readOnly?: boolean
    className?: string
}

const ControlledInput = ({...props}: ControlledInputProps) => {
    return (
        <div className="controller-input">
            <label className="form__label">
                {props.label}
                <Input 
                    name={props.name}
                    type={props.type}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    readOnly={props.readOnly}
                    value={props.value}
                    className={props.className}
                />
            </label>
            <ErrorComponent text={props.error}/>
        </div>
    )
}

export default ControlledInput
