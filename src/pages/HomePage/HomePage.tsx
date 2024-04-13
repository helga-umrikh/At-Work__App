import React from 'react'
import { useSelector } from 'react-redux'
import { IState } from '../../interfaces/UserCardsState'
import CardsContainer from '../../components/CardsContainer/CardsContainer'

const HomePage = () => {
    const CardsData = useSelector((state: IState) => state.addUserCard)

    return (
        <div className="home-page">
            <div className="page-wrapper">
                <CardsContainer
                    data={CardsData.activeCards}
                    isActiveCards={true}
                />
                <CardsContainer
                    data={CardsData.archivedCards}
                    isActiveCards={false}
                />
            </div>
        </div>
    )
}

export default HomePage
