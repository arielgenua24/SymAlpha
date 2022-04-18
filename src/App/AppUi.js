import React from 'react';
import { AppContext } from '../appContext';
import { ModalTab } from '../modalTabName'
import {ModalApp} from '../modalAddApp'
import {NavBar} from '../navBar';
import {InputTabName} from '../modalTabName/inputTabName'
import { InputAddApp } from '../modalAddApp/inputAddApp';
import {AppsHome} from '../appsHome'
import { AppContainer } from '../appsHome/appContainer';
import { newTab } from '../modalTabName/inputTabName';


import './App.css';

function AppUi() {

  const {
    openTabModal,
    setOpenTabModal,
    openAddAppModal,
    setOpenAddAppModal,
    setApps,
  } = React.useContext(AppContext) 

  
  return (
    <>
  
    <p>Say hi!! symphoniers</p>


    <NavBar
        openTabModal={openTabModal}
        setOpenTabModal={setOpenTabModal}
    />

    <AppsHome>
      {newTab?.apps?.map(x => (
        <AppContainer
            key={x.appName}
            appName={x.appName}
            appUrl={x.appUrl}
            appLogo={x.appLogo}
        />
      ))}
        
    </AppsHome>
        
        
        
     

    {!!openTabModal && (
          <ModalTab>
            <InputTabName/>
          </ModalTab>
    )}

    {!!openAddAppModal && (
          <ModalApp>
            <InputAddApp/>
          </ModalApp>
    )}
    
  
    </>
  );
}

export {AppUi};
