import { useEffect, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'

function App() {

  const baseUrl = "https://users-crud.academlo.tech"

  const [users, getUsers] = useFetch(baseUrl)

  useEffect(() =>{
    getUsers('/users')
  }, [])
  console.log(users)

  return (
    <>
      <h1>Hola Mundo</h1>
      
    </>
  )
}

export default App
