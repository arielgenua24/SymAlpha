import React from "react";

const AppContext = React.createContext();

function AppProvider(props){
    const [openTabModal, setOpenTabModal] =  React.useState(false)

    return(
        <AppContext.Provider value={{
            openTabModal,
            setOpenTabModal,
           }}>
           {props.children}
        </AppContext.Provider>
    )
}

export {AppContext,AppProvider}