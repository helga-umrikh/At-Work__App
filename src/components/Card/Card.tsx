import React from 'react'
import './Card.scss'
import userPhoto from '../../assets/user__photo.png'

const Card = () => {
    return (
        <div className="card">
            <div className="card__avatar">
                <img src={userPhoto} alt="user avatar" />
            </div>
            <div className="card__content">
                <div className="content__data">
                    <div>
                        <p className="content__name">Ivan1234</p>
                        <p className="content__company">At-Work</p>
                    </div>
                    <p className="content__city">Санкт-Петербург</p>
                </div>
                <div className="content__options-btn">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className="content__dropdown-options">
                    <button className="content__option">Редактировать</button>
                    <button className='content__option'>Архивировать</button>
                    <button className='content__option'>Скрыть</button>
                </div>
                <div className="content__dropdown-options">
                <button className="content__option">Активировать</button>
                </div>
            </div>
        </div>
    )
}

export default Card
