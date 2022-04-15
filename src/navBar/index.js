import React from "react";
import {userName} from '../objectUser'
import './navBar.css'

function NavBar(props){

    let tabs;

    const onClickButton =() => {
        props.setOpenTabModal(prevState => !prevState)
    }


    let array = userName.tabs
 

    /*console.log('filtrador')
    const tabsNamesFilter = array.map(x => x.tabsName)
    console.log(tabsNamesFilter) */

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
                    {x.tabsName} 
                </div>
                   
            ))}

        </div>
        
        </>
        
        
    )
}

export {NavBar}