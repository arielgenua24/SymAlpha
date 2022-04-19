import React from "react";

const AppContext = React.createContext();

function AppProvider(props){
    
    const [openTabModal, setOpenTabModal] =  React.useState(false)
    const[apps,setApps] = React.useState([])
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
            setCurrentTab
           }}>
           {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}