import React from 'react'
import './HomePage.scss'
import ArchiveCards from '../../components/CardsContainers/ArchiveCards'
import ActiveCards from '../../components/CardsContainers/ActiveCards'

const HomePage = () => {
    return (
        <div className="home-page">
          <div className="page-wrapper">
            <ActiveCards />
            <ArchiveCards />
          </div>
        </div>
    )
}

export default HomePage
