let initialData={
    searchData:[],
    gridData:[]
}

export const reducer=(state=initialData,action)=>{
    switch(action.type){
        case "getdata": 
            return{
                 ...state,searchData:action.payload
            }
        
        case "griddata":
            return {
                ...state,gridData:action.payload
            }
        
          
        default: return state
    }
}