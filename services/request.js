import api from "./api"

export async function getall(){
    try
    {
    const resultado = await api.get("/")
    return resultado.data
    }
    catch(error){
    console.log(error)
    return []
    }
  }

  export async function update(name,lng,lat,level,id){
    try
    {
    console.log("chamou")
    const resultado = await api.put("/update",{
        name:name,
        id:id,
        level:level,
        lat:lat,
        lng:lng
    })
    return resultado.data
    }
    catch(error){
    console.log(error)
    return []
    }
  }

  export async function deletar(name,lng,lat,level,id){
    try
    {
    console.log(id,name,lng,lat)
    const resulta = await api.delete("/delete",{ data: { 
        name:name,
        id:id,
        level:level,
        lat:lat,
        lng:lng} })
    
    return resulta.data
    }
    catch(error){
    console.log(error)
    return []
    }
  }

  export async function novo(name,lng,lat,level,id){
    try
    {
    console.log("chamou")
    const resultado = await api.post("/cadastrar",{
        name:name,
        id:id,
        level:level,
        lat:lat,
        lng:lng
    })
    return resultado.data
    }
    catch(error){
    console.log(error)
    return []
    }
  }