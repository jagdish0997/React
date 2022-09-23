
export function Add(data){
    console.log(data)
    return {
        type : "Add",
        payload:data 
    }
}