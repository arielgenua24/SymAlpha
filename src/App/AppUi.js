import React from 'react';
import {tabs} from '../objectTabs'
import { AppContext } from '../appContext';
import { ModalTab } from '../modalTabName'
import {NavBar} from '../navBar';
import {InputTabName} from '../modalTabName/inputTabName'
import {AppsHome} from '../appsHome'
import { AppContainer } from '../appsHome/appContainer';

import './App.css';

function AppUi() {

  const {
    openTabModal,
    setOpenTabModal,
    apps,
    setApps,
   } = React.useContext(AppContext) 


  function sayhi(){
    console.log('sayHi World')
  }


  return (
    <>
  
    <p>Say hi!! symphoniers</p>


    <NavBar
        openTabModal={openTabModal}
        setOpenTabModal={setOpenTabModal}
    />

    <AppsHome>
        {apps?.map(x => (
          
        ))}
    </AppsHome>
        
        
        
     

    {!!openTabModal && (
          <ModalTab>
            <InputTabName/>
          </ModalTab>
    )}
    
  
    </>
  );
}

export {AppUi};
