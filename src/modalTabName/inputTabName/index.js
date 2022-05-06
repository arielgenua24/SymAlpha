import React from "react";
import { AppContext } from '../../appContext';
import {objectTabs} from '../../objectTabs'
import {userName} from '../../objectUser'
import './input.css'
let newTab;
let newValue;

function InputTabName(){

    
    const [value,setValue] = React.useState('')

    const {
        openTabModal,
        setOpenTabModal,
        appData,
        tab,
        saveTab
    } = React.useContext(AppContext) 

    const onChange = (event) => {
        let x = event.target.value;
        setValue(x)
    };


    const onSubmit = (event) => {
        event.preventDefault();
    
        if(value.length >= 15 ) {
            let oldValue = value;
            newValue = `${oldValue.slice(0,11)}`
        } else {
            newValue = value
        }


        newTab = new objectTabs({
            tabsName: `${newValue}`,
            
        })
        userName.addTabs(newTab)
        saveTab([...tab, newTab])

        
       // let array = userName.tab
 



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
                placeholder="Agregue el nombre de su pestaña aqui."
            ></input>

            

            <button
            className="button__submit--tabName"
                type="submit"
            >
            Agregar.
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