import React from "react";
import './appContainer.css'


function AppContainer(props){

    const userBackgroundColor = {
        backgroundColor: '#000000',
        background: '#000000',
        color:'#ffffff'
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
        userBackgroundColor.backgroundColor = '#cdc105'
        userBackgroundColor.background = '#cdc105'
    } else if(userColor === 'Violeta') {
        userBackgroundColor.backgroundColor = '#9406e4 '
        userBackgroundColor.background = '#9406e4 '
    }else if(userColor === 'Celeste') {
        userBackgroundColor.backgroundColor = '#00c0ff'
        userBackgroundColor.background = '#00c0ff'
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
                    <span className="link">Descripcion del link:</span>
                    <span className="section__span--link">{props.newLinkDescr}</span>

                </div>
                
                
            </section>

           

        </div>
    )
}

export{AppContainer}