import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
import likeIcon from '../../assets/like.svg'
import notificationIcon from '../../assets/Notification.svg'
import userPhoto from '../../assets/user__photo.png'

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src={logo} alt="логотип и название компании At-work" />
                </div>
                <div className="header__actions">
                    <button className="actions__likes" title="likes">
                        <img src={likeIcon} alt="like icon" />
                    </button>
                    <button
                        className="actions__notifications"
                        title="notifications"
                    >
                        <img src={notificationIcon} alt="notification icon" />
                    </button>
                    <div className="header__user">
                        <div className="user__avatar">
                            <img src={userPhoto} alt="user avatar" />
                        </div>
                        <p className='user__name'>Ivan1234</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
