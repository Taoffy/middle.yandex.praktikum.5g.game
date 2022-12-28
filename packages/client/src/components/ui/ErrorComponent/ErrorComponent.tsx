import "./ErrorComponent.css";

interface ErrorProps {
    text?: string
}

const ErrorComponent  = ({text}: ErrorProps) => {
    return (
        <div className="error">{text}</div>
    )
}

export default ErrorComponent
