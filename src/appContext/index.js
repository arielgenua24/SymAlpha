import React from "react";

const AppContext = React.createContext();

function AppProvider(props){
    
    const [openTabModal, setOpenTabModal] =  React.useState(false)
    const[apps,setApps] = React.useState('')

    return(
        <AppContext.Provider value={{
            openTabModal,
            setOpenTabModal,
            apps,
            setApps
           }}>
           {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}