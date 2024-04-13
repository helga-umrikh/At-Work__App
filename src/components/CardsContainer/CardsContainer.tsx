import React, { FC } from 'react'
import './CardsContainer.scss'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { IState, UserArray } from '../../interfaces/UserCardsState'
import { IUserCard } from '../../interfaces/IUserCard'
import { Spin } from 'antd'

interface CardsContainerProps {
    data: UserArray
    isActiveCards: boolean
}

const CardsContainer: FC<CardsContainerProps> = ({ data, isActiveCards }) => {
    const { pending, error } = useSelector((state: IState) => state.addUserCard)

    return (
        <div className="cards">
            <div>
                <h3 className="heading">
                    {isActiveCards ? 'Активные' : 'Архивные'}
                </h3>
                <hr className="divider" />
            </div>
            <div>
                {pending && (
                    <div className="cards__spin">
                        <Spin />
                    </div>
                )}
                {data && (
                    <div className="cards__container">
                        {data.map((item: IUserCard) => {
                            return (
                                <Card
                                    key={item.id}
                                    cardData={item}
                                    isActive={isActiveCards}
                                />
                            )
                        })}
                    </div>
                )}
                {error && <div>error</div>}
            </div>
        </div>
    )
}

export default CardsContainer
