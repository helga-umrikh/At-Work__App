import React, { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import { Action } from 'redux'
import { fetchCards } from './redux/slices/userCardsSlice'
import { IState } from './interfaces/UserCardsState'
import Header from './components/Header/Header'
import HomePage from './pages/HomePage/HomePage'
import EditPage from './pages/EditPage/EditPage'

function App() {
    const dispatch: ThunkDispatch<IState, void, Action> = useDispatch()

    useEffect(() => {
        dispatch(fetchCards())
    }, [dispatch])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/edit/:id'} element={<EditPage />} />
            </Routes>
        </div>
    )
}

export default App
