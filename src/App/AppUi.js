import React from 'react';
import { AppContext } from '../appContext';
import { ModalTab } from '../modalTabName'
import {ModalApp} from '../modalAddApp'
import {NavBar} from '../navBar';
import {InputTabName} from '../modalTabName/inputTabName'
import { InputAddApp } from '../modalAddApp/inputAddApp';
import {AppsHome} from '../appsHome'
import { AppContainer } from '../appsHome/appContainer';
import { Welcome } from '../welcome';
import { WelcomeModal } from '../welcome/welcomeModal';
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
    app,
    currentTab,
    setCurrentTab,
    appData,
    tabsData
  } = React.useContext(AppContext) 




  //currentab si funciona

    /*console.log(newTab)
    console.log(newTab?.apps)

    console.log(newTab?.tabsName)
    console.log(currentTab)

    let appsFilter2 = newTab?.apps?.map(tab => tab.tabsName === currentTab)
    console.log(appsFilter2)

    let appsFilter = newTab?.apps?.filter(app => app.appTabMother === currentTab)
    console.log(appsFilter) 

  
    console.log(userName)
    console.log(userName.tabs)

    let appsFilter3 = userName?.tabs?.filter(tab => tab?.apps[1]?.appTabMother === currentTab)



    console.log('soy yo de nuevo')
    console.log(appsFilter3)

    let currentApps = appsFilter3[0]?.apps
    console.log(currentApps) */

    let appsFilter = app?.filter(app => app.appTabMother === currentTab)

    console.log('cuurentab')
    console.log(currentTab)



  
  
  return (
    <>
  
    <p>0.0.02 </p>


    <NavBar
        openTabModal={openTabModal}
        setOpenTabModal={setOpenTabModal}
    />

    
      <AppsHome
      >
      {appsFilter?.map(x => (
        <AppContainer
            key={x.appName}
            appName={x.newAppName}
            appUrl={x.appUrl}
            appLogo={x.appLogo}
            color={x.color}
            newLinkDescr={x.newLinkDescr}
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

    <Welcome>
          <WelcomeModal
            />
    </Welcome>
    
  
    </>
  );
}

export {AppUi};
