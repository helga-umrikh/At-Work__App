import React, { useEffect } from 'react'
import './CardsContainersStyles.scss'
import Card from '../Card/Card'
import { useDispatch, useSelector } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { fetchCards } from '../../redux/slices/userCardsSlice'
import { IUserCard } from '../../interfaces/IUserCard'
import { IState } from '../../interfaces/UserCardsState'

const ActiveCards = () => {
    const dispatch: ThunkDispatch<IState, void, Action> = useDispatch()

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])

    const data = useSelector((state: IState) => state.addUserCard.activeCards)
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
