class tabs {
    constructor({
        tabsName,
        apps = []
    }){
        this.tabsName = tabsName;
        this.apps = apps;
    }
    sayHi(){
        console.log('hola!' + this.tabsName)
    }
}

const ariel = 'ariel'

const prueba = new tabs({
    tabsName: `${ariel}`,
    apps: ['x']
    
}) 



export {tabs};

/* Nucleo const pestanias = []

class tabs {
    constructor({
        tabsName,
        apps = []
    }){
        this.tabsName = tabsName;
        this.apps = apps;
    }
    sayHi(){
        console.log('hola!' + this.tabsName)
    }
}

const ariel = 'enrique'

const newTab = new tabs({
    tabsName: `${ariel}`,
    apps: ['telegram','notion','samsung']
    
}) 
newTab.sayHi()

function submitNew(){
  pestanias.push(newTab)
  console.log(pestanias)
}

const submit = document.getElementById('submit')
submit.addEventListener("click", submitNew);



 */