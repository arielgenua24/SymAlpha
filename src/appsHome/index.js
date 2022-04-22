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
        setCurrentTab
    } = React.useContext(AppContext) 

    let currentTabLength = currentTab.length;

    const onClick = () => {
        setOpenAddAppModal(true)
        console.log('hgoa')
        console.log(currentTabLength)
    }

    const openAll = () => {
        let appsFilter = appsDB?.filter(app => app.appTabMother === currentTab)
        console.log(appsFilter)
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


