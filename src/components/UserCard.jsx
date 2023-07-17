import './styles/UserCard.css'

const UserCard = ({ user, deleteUserById, setUpdateInfo, handleOpenForm }) => {
    
  const handleDelete = () => {
    deleteUserById('/users', user.id)
  }

  const handleUpdate = () => {
    setUpdateInfo(user)
    handleOpenForm(true)
  }


  return (
    <article className='card__container'>
        {/* <div className='card__name-container'> */}
        <h2 className='card__name'>{user.first_name} {user.last_name}</h2>
        {/* </div> */}
        <hr />
        <ul>
            <li className='card__list'>
                <span className='card__content-title'> EMAIL: </span>
                <span className='card__content'> {user.email}</span>
            </li>
            <li className='card__list'>
                <span className='card__content-title'>BIRTHDAY: </span>
                <span className='card__content'><i className='bx bx-gift' ></i> {user.birthday}</span>
            </li>
        </ul>
        <hr />
        <footer className='card__footer'>
            <button className='card__btn' onClick={handleDelete}><i className='bx bx-trash bx-border bx-md bx-trash-mobile'style={{backgroundColor: "red", color:"white"}}></i></button>
            <button className='card__btn' onClick={handleUpdate}><i className='bx bx-pencil bx-md bx-border' style={{backgroundColor: "white", color:"gray"}}></i></button>
        </footer>
    </article>
  )
}

export default UserCard