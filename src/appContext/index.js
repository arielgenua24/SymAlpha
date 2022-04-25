import React from "react";
import { useAppsLocalStorage } from "./useAppsLocalStorage";
import { useTabsLocalStorage } from "./useTabsLocalStorage";




const AppContext = React.createContext();

function AppProvider(props){

    const {
        app,
        saveApp,
    } = useAppsLocalStorage('APPS_VP2.1', []);

    const {
        tab,
        saveTab,
    } = useTabsLocalStorage('TABS_VP2.1', []);

   
    const [openTabModal, setOpenTabModal] =  React.useState(false)
    const[openAddAppModal,setOpenAddAppModal] = React.useState(false)
    const [currentTab,setCurrentTab] = React.useState('')

    return(
        <AppContext.Provider value={{
            openTabModal,
            setOpenTabModal,
            app,
            saveApp,
            openAddAppModal,
            setOpenAddAppModal,
            tab,
            saveTab,
            currentTab,
            setCurrentTab,
           }}>
           {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}