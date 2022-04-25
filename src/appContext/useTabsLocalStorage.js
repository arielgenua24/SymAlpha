import React from "react";


function useTabsLocalStorage(itemName,initialValue){

    const localStorageItem = localStorage.getItem(itemName)
      let parsedItem;
  
      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
  
      const [tab, setTab] = React.useState(parsedItem)
      const saveTab = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos)
        localStorage.setItem(itemName,stringifiedTodos)
        setTab(newTodos)
  
  
      }

      //const [openWelcomeModal,setOpenWelcomeModal] = React.useState(true)
  
      return {
        tab,
        saveTab,
        //parsedItem,
        //initialValue
    }
  
  
}

export { useTabsLocalStorage }