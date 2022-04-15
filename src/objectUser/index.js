class user {
    constructor({
        name,
        tabs = [],
    }){
        this.name = name;
        this.tabs = tabs;
    }
    addTabs(param){
        this.tabs.push(param)
    }


}


const userName = new user({
    name: 'name',

})

export {user,userName};