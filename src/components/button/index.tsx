import { Ibutton } from "../../interfaces/button";

const Button = ({type, children, onclick}:Ibutton) => {
    return(
        <button type={type} onClick={onclick}>
            {children}
        </button>
    )
}

export default Button;