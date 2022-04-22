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
        setCurrentTab,
        tabs,
        setTabs
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

    const deleteTab = (param) => {
        //array.indexOf(2);
        let tabsArray = tabs
        console.log(tabsArray)


        let tabToDelete = tabs?.filter(tab => tab.tabsName === param)
        let tabToDeleteIndex = tabsArray.indexOf(tabToDelete)

        tabsArray.splice(tabToDeleteIndex, 1)

        console.log(tabsArray)

        

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

           {tabs?.map(tab => (
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