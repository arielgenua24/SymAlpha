function openAllFun(param){
    //param es un array.
    console.log('soy opneAllFun')
    const appsUrl = param.map(app => {
        window.open(app.appUrl,'_blank')
    }
        
    )
    console.log(appsUrl)

    

    //window.open(URL, name, specs, replace)app.appUrl

}

export{openAllFun}