import React from 'react';
import './index.css'
import { AppContext } from '../appContext'
import {appsDB} from '../objectApps'
import {openAllFun} from '../openAllFun'




function AppsHome(props){
    const {
        openAddAppModal,
        setOpenAddAppModal,
        currentTab,
        setCurrentTab,
        app,
        saveApp,
    } = React.useContext(AppContext) 

    let currentTabLength = currentTab.length;

    console.log('currenTabLength')
    console.log(currentTabLength)
    

    const onClick = () => {
        setOpenAddAppModal(true)
        
    }

    const openAll = () => {
        let appsFilter = app?.filter(app => app.appTabMother === currentTab)
        openAllFun(appsFilter)

    }
    


    return(
        <>
        <div className="div__appsHome">
            {props.children}

        </div>
        
        {currentTabLength >= 1 && (
        <div className="div__buttons--container">
         <button 
            className="button--openAll"
            onClick={openAll}>
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


