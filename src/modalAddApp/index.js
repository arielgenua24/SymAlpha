import React from "react";
import ReactDOM from 'react-dom';


function ModalApp({children}) {
    return ReactDOM.createPortal(
        <div className="">
         {children}
        </div>,
        document.getElementById('tabAddAppModal')
    )
}

export {ModalApp}