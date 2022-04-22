import React from "react";
import { AppContext } from '../../appContext';
import {objectTabs} from '../../objectTabs'
import {userName} from '../../objectUser'
import './input.css'
let newTab;

function InputTabName(){

    
    const [value,setValue] = React.useState('')

    const {
        openTabModal,
        setOpenTabModal,
        appData,
        tabs,
        setTabs
    } = React.useContext(AppContext) 

    const onChange = (event) => {
        let x = event.target.value;
        console.log(x)
        setValue(x)
    };


    const onSubmit = (event) => {
        event.preventDefault();
        console.log('chau chau amiguitos')

        /*let tabNames = userName.map(tabs => tabs.tabNames )
        console.log(tabNames) */
    

        newTab = new objectTabs({
            tabsName: `${value}`,
            
        })
        userName.addTabs(newTab)
        setTabs([...tabs, newTab])

        
        let array = userName.tabs
 

        console.log('filtrador')
        const tabsNamesFilter = array.map(x => x.tabsName)


        setOpenTabModal(false)
    
        
    }


    return(
        <>

        <form className="div__tabName"
            onSubmit={onSubmit}
        >
            <input
                className="input--tabName"
                type="text" 
                value={value} 
                onChange={onChange}
            ></input>

            <p className="div__p">
                Agregue el nombre de su pestaña
            </p>

            <button
            className="button__submit"
                type="submit"
            >
            Listo
        </button>


        </form>
        
       

        </>
    )

}

export {InputTabName,newTab}


/*
    <div className="div_buttons">
                    <button
                        className="button__cancelar"
                        type="submit"
                        onClick={onCancel}
                    >
                        cancelar
                    </button>
                    <button
                        className="button__submit"
                        type="submit"
                    >

                        añadir
                    </button>
                </div>

*/