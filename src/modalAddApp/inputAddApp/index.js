import React, { useContext } from "react";
import {AppContext} from '../../appContext';
import {tabs} from '../../objectTabs'
import {userName} from '../../objectUser'
import { apps,appsDB } from "../../objectApps";
import { newTab } from "../../modalTabName/inputTabName";

import './index.css'

let newApp;

function InputAddApp(){

    const [name,setName] = React.useState('')
    const [url,setUrl] = React.useState('')
    const [logo,setLogo] = React.useState('')

    const{
        setOpenAddAppModal,
        currentTab,
        setCurrentTab,
        appData,
        tabsData,
        app,
        saveApp,
        saveApps
    } = useContext(AppContext)

    const newName = (event) => {
        setName(event.target.value)
    }
    const newUrl = (event) => {
        setUrl(event.target.value)
    }
    const newLogo = (event) => {
        setLogo(event.target.value)
    }

    const onSubmit = () => {
        newApp = new apps({
            name: name,
            url: url,
            logo: logo,
            tabMother: currentTab,
        })

        let appName = newApp.name
        let appUrl = newApp.url
        let appLogo = newApp.logo
        let appTabMother = newApp.tabMother

        
        //appData.push({appName,appUrl,appLogo,appTabMother})
    
        saveApp([...app,{appName,appUrl,appLogo,appTabMother}])



     setOpenAddAppModal(false)

    }

    return(
        <>
            <form 
             className="div__input--addApps"
             onSubmit={onSubmit}>

                <label>Añade tus apps!</label>
                

                <span>Nombre de la app</span>
                <input  
                 value={name}
                 onChange={newName}
                 className="input__appName"
                /> 

                <span>Url de la app</span>
                <input  
                 value={url}
                 onChange={newUrl}
                 className="input__url"
                /> 

                <span>URL para imagen del logo de la app</span>
                <input
                 value={logo}
                 onChange={newLogo}
                 className="input__appLogo"
                /> 

                
                <button
                    className="button__submit"
                    type="submit"
                >Agregar</button>

            </form>
        </>
    )
}
export{InputAddApp}