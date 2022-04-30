import React from "react";
import './appContainer.css'


function AppContainer(props){

    const userBackgroundColor = {
        backgroundColor: '#F8F8FF',
        background: ''
    } 

    let userColor = props.color

    if(userColor === 'Rojo') {
        userBackgroundColor.backgroundColor = 'red'
        userBackgroundColor.background = 'red'
    } else if(userColor === 'Azul') {
        userBackgroundColor.backgroundColor = 'blue'   
        userBackgroundColor.background = 'blue'
    } else if(userColor === 'Verde') {
        userBackgroundColor.backgroundColor = 'green'
        userBackgroundColor.background = 'green'
    } else if(userColor === 'Amarillo') {
        userBackgroundColor.backgroundColor = 'yellow'
        userBackgroundColor.background = 'yellow'
    } else if(userColor === 'Violeta') {
        userBackgroundColor.backgroundColor = 'purple'
        userBackgroundColor.background = 'purple'
    }else if(userColor === 'Celeste') {
        userBackgroundColor.backgroundColor = 'lightBlue'
        userBackgroundColor.background = 'lightBlue'
    } else if(userColor === 'Blanco') {
        userBackgroundColor.backgroundColor = 'white'
        userBackgroundColor.background = 'white'
    } else if(userColor === 'Negro') {
        userBackgroundColor.backgroundColor = 'black'
        userBackgroundColor.background = 'black'
    }
    console.log('color')
    console.log(props.color)



    return(
        <div className="div__container--blur">
            <section className="app__container">
                <div className="section__div--appName"
                > 
                    <div 
                    className="section__color--logo"
                    style={userBackgroundColor}
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