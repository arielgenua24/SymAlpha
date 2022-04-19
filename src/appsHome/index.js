import React from 'react';
import './index.css'
import { AppContext } from '../appContext'




function AppsHome(props){
    const {
        openAddAppModal,
        setOpenAddAppModal,
        currentTab,
        setCurrentTab
    } = React.useContext(AppContext) 

    let currentTabLength = currentTab.length;

    const onClick = () => {
        setOpenAddAppModal(true)
        console.log('hgoa')
        console.log(currentTabLength)
    }

    


    return(
        <>
        <div className="div__appsHome">
            {props.children}

        </div>
        
        {currentTabLength >= 1 && (
        <div className="div__buttons--container">
         <button 
            className="button--openAll">
         </button>
         <button 
            className="button--addApps"
            onClick={onClick}></button>

        </div>
        )}

        


        </>
        
    )
}

export {AppsHome} 


