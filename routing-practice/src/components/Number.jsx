import React from "react";
// takes in the userNumber as a prop from path in app.js
const Number = ({userNumber}) => {

    return(
        <div>
            <h1>The number is: {userNumber} </h1>
        </div>
    )

}

export default Number;