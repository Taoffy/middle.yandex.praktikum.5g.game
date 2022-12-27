interface ErrorProps {
    text?: string
}

const ErrorComponent  = (props: ErrorProps) => {
    return (
        <div className="error">{props.text}</div>
    )
}

export default ErrorComponent
