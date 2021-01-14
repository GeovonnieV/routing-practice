import React from "react";

const Rambo = ({userWord, txtColor, backColor}) => {
    const ramboStyle = {
        color: txtColor,
        width: "100%",
        background: backColor,
        height: "5em",
        textAlign: "center"
    }

    return(
        <h1 style={ramboStyle}>The word is: {userWord}</h1>
    )

}

export default Rambo;