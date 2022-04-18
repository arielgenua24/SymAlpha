import React from "react";
import './appContainer.css'
import { AppContext } from '../../appContext'


function AppContainer(props){

    const {
        openAddAppModal,
        setOpenAddAppModal
    } = React.useContext(AppContext) 

    const onClick = () => {
        setOpenAddAppModal(true)
    }

    return(
        <div className="div__container">
            
            <section className="app__container">
                <p>{props.appName}</p>
                <p>{props.appUrl}</p>
                <p>{props.appLogo}</p>
            </section>

            <button className="button--openAll">
            </button>

            <button 
             className="button--addApps"
             onClick={onClick}
            ></button>

        </div>
    )
}

export{AppContainer}