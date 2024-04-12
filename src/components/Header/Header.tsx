import React from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img
                        src={'/assets/logo.svg'}
                        alt="логотип и название компании At-work"
                    />
                </div>
                <div className="header__actions">
                    <button className="actions__likes" title="likes">
                        <img src={'/assets/like.svg'} alt="like icon" />
                    </button>
                    <button
                        className="actions__notifications"
                        title="notifications"
                    >
                        <img
                            src={'/assets/Notification.svg'}
                            alt="notification icon"
                        />
                    </button>
                    <div className="actions__user">
                        <div className="user__avatar">
                            <img
                                src={'/assets/user__photo.png'}
                                alt="user avatar"
                            />
                        </div>
                        <p className="user__name">Ivan1234</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
