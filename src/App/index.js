import React from "react";
import { AppProvider } from "../appContext";
import { AppUi } from "./AppUi";

function App(){

    return(
        <AppProvider>
            <AppUi/>
        </AppProvider>
        
    
    )
    
}

export {App}
