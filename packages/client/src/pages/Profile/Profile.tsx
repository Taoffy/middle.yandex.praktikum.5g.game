function Profile() {
  return (
    <div className='profile__wrapper'>
      <div className='profile__container'>
        <h1 className='profile__title'>Профиль</h1>
        <form>
          <div className='avatar'>
            <label htmlFor='avatar-input'>
              <img src='https://via.placeholder.com/64' alt='user avatar' />
            </label>

            <input id='avatar-input' type='file'/>
          </div>

          <ul className='profile__list'>
            <li className='profile__item'>
              <span className='profile__subtitle'>Имя:</span>
              <span className='profile__info'>Константин</span>
            </li>
            <li className='profile__item'>
              <span className='profile__subtitle'>Фамилия:</span>
              <span className='profile__info'>Константинопольский</span>
            </li>
            <li className='profile__item'>
              <span className='profile__subtitle'>Логин:</span>
              <span className='profile__info'>constantinTheBest</span>
            </li>
            <li className='profile__item'>
              <span className='profile__subtitle'>E-mail:</span>
              <span className='profile__info'>constantin@mail.ru</span>
            </li>
            <li className='profile__item'>
              <span className='profile__subtitle'>Телефон:</span>
              <span className='profile__info'>+7 999 999 99 99</span>
            </li>
          </ul>
        </form>
      </div>
    </div>
  )
}

export default Profile;
