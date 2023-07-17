import './App.css'
import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import UserCard from './components/UserCard'
import FormUser from './components/FormUser'

function App() {

  const [updateInfo, setUpdateInfo] = useState()
  const [closeForm, setCloseForm] = useState(true)
  
  const baseUrl = "https://users-crud.academlo.tech"


  const handleOpenForm = () => {
    setCloseForm(false)
  }

  const [
    users, 
    getAllUsers, 
    createNewUser, 
    deleteUserById, 
    updateUserById 
  ] = useFetch(baseUrl, setCloseForm)

  useEffect(() =>{
    getAllUsers('/users')
  }, [])
  console.log(users)

  return (
    <div className='wrapper'>
      <div className='header'>
      <h1 className='title'>Users</h1>
      <button className='header__btn' onClick={handleOpenForm}>+&nbsp;&nbsp;&nbsp;&nbsp;Create new user</button>
      <FormUser 
        createNewUser={createNewUser}
        updateInfo={updateInfo}
        updateUserById={updateUserById}
        setUpdateInfo={setUpdateInfo}
        closeForm={closeForm}
        setCloseForm={setCloseForm}
      />
      </div>
      <div className='card__wrapper'>
        {
          users?.map(user => (
            <UserCard
              key={user.id}
              user={user}
              deleteUserById={deleteUserById}
              // updateUserById={updateUserById}
              setUpdateInfo={setUpdateInfo}
              handleOpenForm={handleOpenForm}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App
