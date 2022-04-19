import React from "react";
import './appContainer.css'


function AppContainer(props){

    

    return(
        <div className="div__container">
            
            <section className="app__container">
                <p>{props.appName}</p>
                <p>{props.appUrl}</p>
                <p>{props.appLogo}</p>
            </section>

           

        </div>
    )
}

export{AppContainer}