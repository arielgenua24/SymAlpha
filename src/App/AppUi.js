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
import {userName} from '../objectUser'


import './App.css';

function AppUi() {

  const {
    openTabModal,
    setOpenTabModal,
    openAddAppModal,
    setOpenAddAppModal,
    setApps,
    currentTab,
    setCurrentTab
  } = React.useContext(AppContext) 

  console.group('filter')
    /*console.log(newTab)
    console.log(newTab?.apps)

    console.log(newTab?.tabsName)
    console.log(currentTab)

    let appsFilter2 = newTab?.apps?.map(tab => tab.tabsName === currentTab)
    console.log(appsFilter2)*/

    let appsFilter = newTab?.apps?.filter(app => app.appTabMother === currentTab)
    console.log(appsFilter) 


    

    console.log(userName)
    console.log(userName.tabs)

    let appsFilter3 = userName?.tabs?.filter(tab => tab?.apps[1]?.appTabMother === currentTab)



    console.log('soy yo de nuevo')
    console.log(appsFilter3)

    let currentApps = appsFilter3[0]?.apps
    console.log(currentApps)





  console.groupEnd()

  
  
  return (
    <>
  
    <p>Say hi!! symphoniers</p>


    <NavBar
        openTabModal={openTabModal}
        setOpenTabModal={setOpenTabModal}
    />

    
    {!!newTab && (
      <AppsHome>
      {currentApps?.map(x => (
        <AppContainer
            key={x.appName}
            appName={x.appName}
            appUrl={x.appUrl}
            appLogo={x.appLogo}
        />
      ))}
        
    </AppsHome>
    )}
    
    
        
        
        
     

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
