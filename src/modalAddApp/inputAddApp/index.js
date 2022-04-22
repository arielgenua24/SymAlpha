import React, { useContext } from "react";
import {AppContext} from '../../appContext';
import {tabs} from '../../objectTabs'
import {userName} from '../../objectUser'
import { app,appsDB } from "../../objectApps";
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
        apps,
        setApps
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
        newApp = new app({
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
        setApps([...apps,{appName,appUrl,appLogo,appTabMother}])

      console.group('nina')
        console.log(apps)

      console.groupEnd()

     setOpenAddAppModal(false)

    }

    return(
        <>
            <form 
             className="div__input--addApps"
             onSubmit={onSubmit}>

                <label>...</label>
                

                <input  
                 value={name}
                 onChange={newName}
                 className="input__appName"
                /> 


                <input  
                 value={url}
                 onChange={newUrl}
                 className="input__url"
                /> 

                <input
                 value={logo}
                 onChange={newLogo}
                 className="input__appLogo"
                />

                <button
                    type="submit"
                ></button>

            </form>
        </>
    )
}
export{InputAddApp}