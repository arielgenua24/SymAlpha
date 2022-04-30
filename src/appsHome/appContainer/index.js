import React from "react";
import './appContainer.css'


function AppContainer(props){

    

    return(
        <div className="div__container--blur">
            <section className="app__container">
                <div className="section__div--appName"
                > 
                    <div 
                    className="section__img--logo"
                    >
                        <span className="section__span--appName">{props.appName}</span>

                    </div>
                    
                </div>
                
                
                <div className="section__div--links"
                >
                    <span className="link">Links</span>
                    <span className="section__span--link">{props.linkDesc}</span>

                </div>
                
                
            </section>

           

        </div>
    )
}

export{AppContainer}