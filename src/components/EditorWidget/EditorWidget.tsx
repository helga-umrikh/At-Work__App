import React from 'react'
import './EditorWidget.scss'
import userPhoto from '../../assets/user__photo.png'

const EditorWidget = () => {
    return (
        <div className="editor">
            <div className="editor__container">
                <div className="editor__avatar">
                    <img src={userPhoto} alt="user avatar" />
                </div>
                <nav className="editor__nav">
                    <ul>
                        <li className="nav__tab">Данные профиля</li>
                        <li className="nav__tab inactive_tab">
                            Рабочее пространство
                        </li>
                        <li className="nav__tab inactive_tab">Приватность</li>
                        <li className="nav__tab inactive_tab">Безопасность</li>
                    </ul>
                </nav>
            </div>

            <div className="editor__container">
                <p className="editor__title">Данные профиля</p>
                <form className="editor__inputs-container">
                    <label className='editor__label' htmlFor="name">Имя</label>
                    <input className='editor__input' type="text" id="name" />

                    <label className='editor__label' htmlFor="nickname">Никнейм</label>
                    <input className='editor__input' type="text" id="nickname" />

                    <label className='editor__label' htmlFor="email">Почта</label>
                    <input className='editor__input' type="email" id="email" />

                    <label className='editor__label' htmlFor="city">Город</label>
                    <input className='editor__input' type="text" id="city" />

                    <label className='editor__label' htmlFor="phone-number">Телефон</label>
                    <input className='editor__input' type="tel" id="phone-number" />

                    <label className='editor__label' htmlFor="company">Название Компании</label>
                    <input className='editor__input' type="text" id="company" />
                    <button className="editor__submit-btn" type="submit">
                        Сохранить
                    </button>
                </form>
            </div>
        </div>
    )
}

export default EditorWidget
