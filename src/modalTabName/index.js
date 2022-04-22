import React from "react";
import ReactDOM from 'react-dom';

import './index.css';

function ModalTab({children}) {
    return ReactDOM.createPortal(
        <div className="ModalTabBackground">
            {children}
        </div>,
        document.getElementById('tabNameModal')
    )
}

export {ModalTab}