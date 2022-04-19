import React from 'react';
import './index.css'
import { AppContext } from '../appContext'




function AppsHome(props){
    const {
        openAddAppModal,
        setOpenAddAppModal,
        currentApp,
        setCurrentApp
    } = React.useContext(AppContext) 

    const onClick = () => {
        setOpenAddAppModal(true)
    }



    return(
        <>
        <div className="div__appsHome">
            {props.children}

        </div>

        <button className="button--openAll">
            </button>

        <button 
            className="button--addApps"
            onClick={onClick}
        ></button>


        </>
        
    )
}

export {AppsHome} 


