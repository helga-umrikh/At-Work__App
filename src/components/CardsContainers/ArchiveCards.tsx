import React from 'react'
import './CardsContainersStyles.scss'
import Card from '../Card/Card'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/UserCardsState'
import { IUserCard } from '../../interfaces/IUserCard'

const ArchiveCards = () => {
    const data = useSelector((state: IState) => state.addUserCard.archivedCards)

    return (
        <div className="cards-container">
            <div>
                <h3 className="heading">Архив</h3>
                <hr className="divider" />
            </div>
            <div>
            {data &&
                    data.map((item: IUserCard) => {
                        return (
                            <Card
                                key={item.id}
                                cardData={item}
                                isActive={false}
                            />
                        )
                    })}
            </div>
        </div>
    )
}

export default ArchiveCards
