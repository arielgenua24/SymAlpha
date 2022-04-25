import React from "react";


function useAppsLocalStorage(itemName,initialValue){

    const localStorageItem = localStorage.getItem(itemName)
      let parsedItem;
  
      if(!localStorageItem) {
        localStorage.setItem(itemName, JSON.stringify(initialValue))
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(localStorageItem)
      }
  
      const [app, setApp] = React.useState(parsedItem)
      const saveApp = (newTodos) => {
        const stringifiedTodos = JSON.stringify(newTodos)
        localStorage.setItem(itemName,stringifiedTodos)
        setApp(newTodos)
  
  
      }

      //const [openWelcomeModal,setOpenWelcomeModal] = React.useState(true)
  
      return {
        app,
        saveApp,
        //parsedItem,
        //initialValue
      }
  
  
}

export { useAppsLocalStorage }