import React from "react";
import {userName} from '../objectUser'
import {newTab} from '../modalTabName/inputTabName'
import { AppContext } from '../appContext';
import './navBar.css'

function NavBar(props){

    const {
        currentTab,
        setCurrentTab,
        tab,
    } = React.useContext(AppContext) 


    
    const onClickButton =() => {
        props.setOpenTabModal(prevState => !prevState)
    }

    const showAppsButton =(param) => {
        console.log(param)
        setCurrentTab(param) //con esto ahora sabemos que nuestra pestaña actual es la que el usaurio toque.
    
         //Me dispara un currentab anterior al setCurrentab, pero aun asi, se actualiza correcatamente.

    }

    const deleteTab = (param) => {
        //array.indexOf(2);
        let tabsArray = tab
        console.log(tabsArray)


        let tabToDelete = tab?.filter(tab => tab.tabsName === param)
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

           {tab?.map(tabs => (
                 <div className="userTabs"> 
                    <button 
                        className="div__button--tabs"
                        onClick={() => {showAppsButton(tabs.tabsName)}}
                        >
                        {tabs.tabsName} 

                        

                    </button>
                   
                </div>
                   
            ))}

        </div>
        
        </>
        
        
    )
}

export {NavBar}