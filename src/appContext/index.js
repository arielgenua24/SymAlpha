import React from "react";
import { useAppsLocalStorage } from "./useAppsLocalStorage";
import { useTabsLocalStorage } from "./useTabsLocalStorage";




const AppContext = React.createContext();

function AppProvider(props){

    const {
       
    } = useAppsLocalStorage('APPS_VP2', []);

    const {
        saveItem: saveTabs
    } = useTabsLocalStorage('TABS_VP2', []);

    const[apps,setApps] = React.useState([])
    const [tabs,setTabs] = React.useState([])
    const [openTabModal, setOpenTabModal] =  React.useState(false)
    const[openAddAppModal,setOpenAddAppModal] = React.useState(false)
    const [currentTab,setCurrentTab] = React.useState('')

    return(
        <AppContext.Provider value={{
            openTabModal,
            setOpenTabModal,
            apps,
            setApps,
            openAddAppModal,
            setOpenAddAppModal,
            currentTab,
            setCurrentTab,
            tabs,
            setTabs
           }}>
           {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}