import React from "react";

function Button({clickHandler, type, children}){
    return(
            <button onClick={clickHandler}
                    type={type}
            >
                {children}
            </button>
    );
}
export default Button;



