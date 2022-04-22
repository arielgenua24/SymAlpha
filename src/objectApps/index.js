
const appsDB = [];

class app {
    constructor({
        name,
        url,
        logo,
        tabMother,
    }){
        this.name = name;
        this.url = url;
        this.logo = logo;
        this.tabMother = tabMother;
    }
}

export {app,appsDB}
