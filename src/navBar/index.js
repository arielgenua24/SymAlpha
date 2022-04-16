import React from "react";
import {userName} from '../objectUser'
import {newTab} from '../modalTabName/inputTabName'
import { AppContext } from '../appContext';
import './navBar.css'

function NavBar(props){

    const {
        openTabModal,
        setOpenTabModal,
        apps,
        setApps,
    } = React.useContext(AppContext) 

    const onClickButton =() => {
        props.setOpenTabModal(prevState => !prevState)
    }

    const showAppsButton =(param) => {
        console.group('hola')
        console.log(param)
        console.log(newTab)
        console.log(newTab.apps)

        setApps(newTab.apps)

        console.log('neuvas apps')
        console.log(apps)
    

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

           {userName.tabs?.map(x => (
                 <div className="userTabs"> 
                    <button 
                        className="div__button--tabs"
                        onClick={() => {showAppsButton(x.tabsName)}}
                        >
                        {x.tabsName} 
                    </button>
                   
                </div>
                   
            ))}

        </div>
        
        </>
        
        
    )
}

export {NavBar}