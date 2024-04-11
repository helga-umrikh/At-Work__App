import React from 'react'
import './ToHomePage.scss'
import { Link } from 'react-router-dom'

const ToHomePage = () => {
    return (
        <div className="to-home-page">
            <Link to={'/'}>
                <div className="to-home-page__container">
                    <div className="to-home-page__arrow">
                        <img src={'/assets/arrow-left.svg'} alt="left arrow" />
                    </div>
                    <p className="to-home-page__title">Назад</p>
                </div>
            </Link>
        </div>
    )
}

export default ToHomePage
