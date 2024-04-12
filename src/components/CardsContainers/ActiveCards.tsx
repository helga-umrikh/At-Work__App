import React from 'react'
import './CardsContainersStyles.scss'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/UserCardsState'
import { IUserCard } from '../../interfaces/IUserCard'
import { Spin } from 'antd'

const ActiveCards = () => {
    const { pending, error } = useSelector((state: IState) => state.addUserCard)
    const data = useSelector(
        (state: IState) => state.addUserCard.activeCards
    ).slice(0, 6)

    return (
        <div className="active-cards">
            <div>
                <h3 className="heading">Активные</h3>
                <hr className="divider" />
            </div>
            <div>
                {pending && (
                    <div className="active-cards__spin">
                        <Spin />
                    </div>
                )}
                {data && (
                    <div className="active-cards__cards-container">
                        {data.map((item: IUserCard) => {
                            return (
                                <Card
                                    key={item.id}
                                    cardData={item}
                                    isActive={true}
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

export default ActiveCards
