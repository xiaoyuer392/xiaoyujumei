const loadpinData = (pinlist)=>{
    return {
        type:"SAGA_LOAD_PIN_DATA",
        pinlist
    }
}

export {
    loadpinData
}
