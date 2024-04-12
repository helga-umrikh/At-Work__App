import React from 'react'
import './CardsContainersStyles.scss'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/UserCardsState'
import { IUserCard } from '../../interfaces/IUserCard'

const ActiveCards = () => {
    const data = useSelector(
        (state: IState) => state.addUserCard.activeCards
    ).slice(0, 6)

    return (
        <div className="cards-container">
            <div>
                <h3 className="heading">Активные</h3>
                <hr className="divider" />
            </div>
            <div>
                {data &&
                    data.map((item: IUserCard) => {
                        return (
                            <Card
                                key={item.id}
                                cardData={item}
                                isActive={true}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default ActiveCards
