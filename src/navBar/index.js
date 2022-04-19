import React from "react";
import {userName} from '../objectUser'
import {newTab} from '../modalTabName/inputTabName'
import { AppContext } from '../appContext';
import './navBar.css'
import { tab } from "@testing-library/user-event/dist/tab";

function NavBar(props){

    const {
        openTabModal,
        setOpenTabModal,
        apps,
        setApps,
        currentTab,
        setCurrentTab
    } = React.useContext(AppContext) 

    const onClickButton =() => {
        props.setOpenTabModal(prevState => !prevState)
    }

    const showAppsButton =(param) => {
        console.group('hola')
           console.log(param)
           setCurrentTab(param) //con esto ahora sabemos que nuestra pestaña actual es la que el usaurio toque.
        

        console.groupEnd()

    }



    return(

        <>

        <div className="navbar">
            <button
                className="div__button--addTabs"
                onClick={onClickButton}
                >
            +
            </button>

           {userName.tabs?.map(tab => (
                 <div className="userTabs"> 
                    <button 
                        className="div__button--tabs"
                        onClick={() => {showAppsButton(tab.tabsName)}}
                        >
                        {tab.tabsName} 
                    </button>
                   
                </div>
                   
            ))}

        </div>
        
        </>
        
        
    )
}

export {NavBar}