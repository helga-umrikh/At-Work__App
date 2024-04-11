import { IUserCard } from './IUserCard'

export interface UserArray extends Array<IUserCard> {}

export interface UserCardsState {
    activeCards: UserArray
    archivedCards: UserArray
}

export interface IState {
    addUserCard: UserCardsState
}
