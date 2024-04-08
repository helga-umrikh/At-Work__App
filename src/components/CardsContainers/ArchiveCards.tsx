import React from 'react'
import './CardsContainersStyles.scss'
import Card from '../Card/Card'

const ArchiveCards = () => {
    return (
        <div className="cards-container">
            <div>
                <h3 className="heading">Архив</h3>
                <hr className="divider" />
            </div>
            <div>
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default ArchiveCards
