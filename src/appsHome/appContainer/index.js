import React from "react";
import './appContainer.css'


function AppContainer(props){

    

    return(
        <div className="div__container--blur">
            <section className="app__container">
                <div className="section__div--appName"
                > 
                    <img src={props.appLogo} alt={props.appName} className="section__img--logo"></img>
                    <span className="section__span--appName">{props.appName}</span>
                </div>
                
                
                <div className="section__div--links"
                >
                    <span className="link">Links</span>
                    <span className="section__span--link">{props.appUrl}</span>``

                </div>
                
                
            </section>

           

        </div>
    )
}

export{AppContainer}