import React from 'react';
import './index.css'

function AppsHome(props){

    return(
        <>
        <div className="div__appsHome">
            {props.children}
        </div>
        </>
        
    )
}

export {AppsHome} 


