const loadData =(list)=>{
    return {
        type:"SAGA_LOAD_DATA",
        list
    }
}

export {
    loadData
}