import React, { FC, useState, useEffect } from 'react'
import './Card.scss'
import { useDispatch } from 'react-redux'
import {
    archiveCard,
    activateCard,
    deleteCard,
} from '../../redux/slices/userCardsSlice'
import { IUserCard } from '../../interfaces/IUserCard'
import { useNavigate } from 'react-router-dom'

interface CardProps {
    cardData: IUserCard
    isActive: boolean
}

const Card: FC<CardProps> = ({ cardData, isActive }) => {
    const [isCardActive, setIsCardActive] = useState<boolean>(false)
    const [isDropDownShown, setIsDropDownShown] = useState<boolean>(false)
    const { id, username, address, company } = cardData
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        setIsCardActive(isActive)
    }, [isActive])

    const toggleCardState = () => {
        if (isCardActive) {
            dispatch(archiveCard(cardData))
        } else {
            dispatch(activateCard(cardData))
        }

        setIsCardActive(!isCardActive)
        setIsDropDownShown(!isDropDownShown)
    }

    const toggleDropDown = () => {
        setIsDropDownShown(!isDropDownShown)
    }

    const navigateToEdit = () => {
        navigate(`/edit/${id}`)
    }

    const handleDeleteCard = () => {
        dispatch(deleteCard(cardData))
    }

    return (
        <div className={`card ${!isActive && '_monochrome'}`}>
            <div className="card__avatar">
                <img src={'/assets/user__photo.png'} alt="user avatar" />
            </div>
            <div className="card__content">
                <div className="content__data">
                    <div>
                        <p className="content__name">
                            {username.length > 10
                                ? username.substring(0, 10) + '...'
                                : username}
                        </p>
                        <p className="content__company">{company.name}</p>
                    </div>
                    <p className="content__city">{address.city}</p>
                </div>
                <div className="content__options-btn" onClick={toggleDropDown}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {isCardActive && isDropDownShown && (
                    <div className="content__dropdown-options">
                        <button
                            className="content__option"
                            onClick={navigateToEdit}
                        >
                            Редактировать
                        </button>
                        <button
                            className="content__option"
                            onClick={toggleCardState}
                        >
                            Архивировать
                        </button>
                        <button
                            className="content__option"
                            onClick={handleDeleteCard}
                        >
                            Скрыть
                        </button>
                    </div>
                )}
                {!isCardActive && isDropDownShown && (
                    <div className="content__dropdown-options">
                        <button
                            className="content__option"
                            onClick={toggleCardState}
                        >
                            Активировать
                        </button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card
