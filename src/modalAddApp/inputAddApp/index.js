import React, { useContext } from "react";
import {AppContext} from '../../appContext';
import {tabs} from '../../objectTabs'
import {userName} from '../../objectUser'
import { apps,appsDB } from "../../objectApps";
import { newTab } from "../../modalTabName/inputTabName";

import './index.css'
let appColor ;
let newApp;
let newLinkDescr;

function InputAddApp(){
    const [color,setColor] = React.useState('Blanco')
    const [name,setName] = React.useState('')
    const [url,setUrl] = React.useState('')
    const [linkDescr, setLinkDesc] = React.useState('')
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
    /*const newColor = (event) => {
        setLogo(event.target.value)
    } */
    const linkDes = (event) => {
        setLinkDesc(event.target.value)
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

        let appUrlVerification = appUrl.slice(0,5)
        console.log('verificacion app url')
        console.log(appUrl)
        console.log(appUrlVerification)

        if(appUrlVerification != 'https'){
             let oldAppUrl  = appUrl
             appUrl = 'https://' + oldAppUrl;
        }
        

        if(linkDescr.length >= 15 ) {
            let oldlinkDescr = linkDescr;
            newLinkDescr = `${oldlinkDescr.slice(0,15)} ...`  
        } else {
            newLinkDescr = linkDescr
        }
    
    
        saveApp([...app,{appName,appUrl,appLogo,appTabMother,color,newLinkDescr}])


        //appData.push({appName,appUrl,appLogo,appTabMother})


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

                <span>A donde te lleva la app?</span>
                <input  
                 value={linkDescr}
                 onChange={linkDes}
                 className="input__url"
                 placeholder="youtube lofi"
                />  

                <span className="from__span--interest form__span--tips">
                    Color de la app.
                </span>

                <select className="form__select1" onChange={(e)=>{
                    appColor = e.target.value;
                    setColor(appColor);
                }}>
                    <option value='Rojo' >Rojo</option>
                    <option value='Azul'>Azul</option>
                    <option value='Verde'>Verde</option>
                    <option value='Amarillo'>Amarillo</option>
                    <option value='Violeta'>Violeta</option>
                    <option value='Celeste'>Celeste</option>
                    <option value='Blanco'>Blanco</option>
                    <option value='Negro'selected>Negro</option>

                </select>


                {/*<span>URL para imagen del logo de la app</span>
                <input
                 value={logo}
                 onChange={newLogo}
                 className="input__appLogo"
                />  */}

                
                <button
                    className="button__submit"
                    type="submit"
                >Agregar</button>

            </form>
        </>
    )
}
export{InputAddApp}



