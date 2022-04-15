import React from 'react';
import {tabs} from '../objectTabs'
import { AppContext } from '../appContext';
import { ModalTab } from '../modalTabName'
import {NavBar} from '../navBar';
import {InputTabName} from '../modalTabName/inputTabName'

import './App.css';

function AppUi() {

  const {
    openTabModal,
    setOpenTabModal,
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

    {/*<div className="div__container--button">
      <button
      className="div__button--openAll"
      onClick={()=> {sayhi()}}
      >
       openAll
      </button>
    </div> */}


    <section className="appsHome"></section>


    {!!openTabModal && (
          <ModalTab>
            <InputTabName/>
          </ModalTab>
    )}
    
  
    </>
  );
}

export {AppUi};
