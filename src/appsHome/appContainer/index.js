import React from "react";
import './appContainer.css'

function AppContainer(props){

    return(
        <div className="div__container">
            {props.text}
        </div>
    )
}

export{AppContainer}