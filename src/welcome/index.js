import React from "react";
import  ReactDOM  from 'react-dom'
import './index.css'

function Welcome({children}) {
    return ReactDOM.createPortal(
        <div className="div__welcome">
         {children}
        </div>,
        document.getElementById('welcome')
    )
}

export {Welcome}