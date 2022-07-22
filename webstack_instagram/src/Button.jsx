const Button = ({alertText}) => {

    return(
        <button onClick={() => {alert(alertText)}}>
            Click me
        </button>
    )
}

export default Button;