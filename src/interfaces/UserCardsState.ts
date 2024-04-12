import { IUserCard } from './IUserCard'

export interface UserArray extends Array<IUserCard> {}

export interface UserCardsState {
    pending: boolean | null
    error: boolean | null
    activeCards: UserArray
    archivedCards: UserArray
}

export interface IState {
    addUserCard: UserCardsState
}
