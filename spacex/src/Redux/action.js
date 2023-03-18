
export const dataAction=(data,dispatch)=>{
    dispatch({
        type:'getdata',
        payload:data
    })
}

export const gridAction=(data,dispatch)=>{
    dispatch({
        type:'griddata',
        payload:data
    })
}