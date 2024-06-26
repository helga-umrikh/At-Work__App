import React, { useEffect, useState } from 'react'
import './EditorWidget.scss'
import { IUserCard } from '../../interfaces/IUserCard'
import { useDispatch, useSelector } from 'react-redux'
import { changeCard } from '../../redux/slices/userCardsSlice'
import { useParams } from 'react-router-dom'
import { IState } from '../../interfaces/UserCardsState'
import { Modal, Spin } from 'antd'

const EditorWidget = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    let { id } = useParams()
    const dispatch = useDispatch()

    const cardData = useSelector((state: IState) =>
        state.addUserCard.activeCards.find((item) => item.id === Number(id))
    )

    const [inputValuesState, setInputValuesState] = useState<
        IUserCard | undefined
    >(cardData)

    useEffect(() => {
        if (cardData) setInputValuesState({ ...cardData })
    }, [cardData])

    const handleSumbitForm = () => {
        inputValuesState && dispatch(changeCard(inputValuesState))
    }

    const handleShowModal = () => {
        setIsModalOpen(true)
        setTimeout(() => {
            setIsModalOpen(false)
        }, 4000)
    }

    return (
        <div className="editor">
            {inputValuesState ? (
                <>
                    <div className="editor__container editor__nav">
                        <div className="editor__avatar">
                            <img
                                src={'/assets/user__photo.png'}
                                alt="user avatar"
                            />
                        </div>
                        <nav className="editor__nav">
                            <ul>
                                <li className="nav__tab active_tab">
                                    Данные профиля
                                </li>
                                <li className="nav__tab inactive_tab">
                                    Рабочее пространство
                                </li>
                                <li className="nav__tab inactive_tab">
                                    Приватность
                                </li>
                                <li className="nav__tab inactive_tab">
                                    Безопасность
                                </li>
                            </ul>
                        </nav>
                    </div>

                    <div className="editor__container editor__tab">
                        <p className="editor__title">Данные профиля</p>
                        <form className="editor__inputs-container">
                            <label className="editor__label" htmlFor="name">
                                Имя
                            </label>
                            <input
                                className="editor__input"
                                type="text"
                                id="name"
                                onChange={(event) => {
                                    setInputValuesState({
                                        ...inputValuesState,
                                        name: event.target.value,
                                    })
                                }}
                                required
                                value={inputValuesState.name}
                            />

                            <label className="editor__label" htmlFor="username">
                                Никнейм
                            </label>
                            <input
                                className="editor__input"
                                type="text"
                                id="username"
                                onChange={(event) => {
                                    setInputValuesState({
                                        ...inputValuesState,
                                        username: event.target.value,
                                    })
                                }}
                                required
                                value={inputValuesState.username}
                            />

                            <label className="editor__label" htmlFor="email">
                                Почта
                            </label>
                            <input
                                className="editor__input"
                                type="email"
                                id="email"
                                onChange={(event) => {
                                    setInputValuesState({
                                        ...inputValuesState,
                                        email: event.target.value,
                                    })
                                }}
                                required
                                value={inputValuesState.email}
                            />

                            <label className="editor__label" htmlFor="city">
                                Город
                            </label>
                            <input
                                className="editor__input"
                                type="text"
                                id="city"
                                onChange={(event) => {
                                    setInputValuesState({
                                        ...inputValuesState,
                                        address: {
                                            ...inputValuesState.address,
                                            city: event.target.value,
                                        },
                                    })
                                }}
                                required
                                value={inputValuesState.address.city}
                            />

                            <label
                                className="editor__label"
                                htmlFor="phone-number"
                            >
                                Телефон
                            </label>
                            <input
                                className="editor__input"
                                type="tel"
                                id="phone-number"
                                onChange={(event) => {
                                    setInputValuesState({
                                        ...inputValuesState,
                                        phone: event.target.value,
                                    })
                                }}
                                required
                                value={inputValuesState.phone}
                            />

                            <label className="editor__label" htmlFor="company">
                                Название Компании
                            </label>
                            <input
                                className="editor__input"
                                type="text"
                                id="company"
                                onChange={(event) => {
                                    setInputValuesState({
                                        ...inputValuesState,
                                        company: {
                                            ...inputValuesState.company,
                                            name: event.target.value,
                                        },
                                    })
                                }}
                                required
                                value={inputValuesState.company.name}
                            />
                            <button
                                className="editor__submit-btn"
                                type="submit"
                                onClick={(event) => {
                                    event.preventDefault()
                                    handleSumbitForm()
                                    handleShowModal()
                                }}
                            >
                                Сохранить
                            </button>
                        </form>
                    </div>
                </>
            ) : (
                <div className="editor__spin">
                    <Spin />
                </div>
            )}
            {isModalOpen && (
                <Modal
                    open={isModalOpen}
                    onOk={() => {}}
                    onCancel={() => {
                        setIsModalOpen(false)
                    }}
                    okButtonProps={{ style: { display: 'none' } }}
                    cancelButtonProps={{ style: { display: 'none' } }}
                >
                    <div className="modal__ok-symbol">
                        <img src={'/assets/okIcon.png'} alt="ok symbol" />
                    </div>
                    <p className="modal__title">Изменения сохранены!</p>
                </Modal>
            )}
        </div>
    )
}

export default EditorWidget
