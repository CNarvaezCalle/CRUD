import axios from "axios"
import { useState } from "react"

const useFetch = (baseUrl, setCloseForm) => {
  
  
  const [infoApi, setInfoApi] = useState()
  //intentar haciendo el baseUrl universal

  //GET
  const getApi = (path) => {
    const url = `${baseUrl}${path}/`
    axios.get(url)
      .then(res => setInfoApi(res.data))
      .catch(err => console.log(err))
  }

  //POST
  const postApi = (path, data) => { //de donde vienen estos dos data?
    const url = `${baseUrl}${path}/`
    axios.post(url, data)
      .then(res => {
        console.log(res.data)
        setInfoApi([...infoApi, res.data])
        setCloseForm(true)
      })
      .catch(err => console.log(err))
  }

  //DELETE
  const deleteApi = (path, id) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.delete(url)
      .then(res => {
        console.log(res.data)
        const infoApiFiltered = infoApi.filter(e => e.id !== id)
        setInfoApi(infoApiFiltered)
      })
      .catch(err => console.log(err))
  } 

  //UPDATE
  const updateApi = (path, id, data) => {
    const url = `${baseUrl}${path}/${id}/`
    axios.put(url, data)
      .then(res => {
        console.log(res.data)
        const infoApiMapped = infoApi.map(e =>  e.id === id ? res.data : e )
        setInfoApi(infoApiMapped)
        setCloseForm(true)
      })
      .catch(err => console.log(err))
  }


  return [infoApi, getApi, postApi, deleteApi, updateApi]
    
}

export default useFetch
