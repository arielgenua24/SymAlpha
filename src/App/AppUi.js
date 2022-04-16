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

   console.group('appsss')
   console.log(apps)

  


   const lola = apps?.map(x => (
           console.log(x)       
    ))

    console.log(lola)




   console.groupEnd()

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
        <AppContainer
            key={x}
            text={x}
        />
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
