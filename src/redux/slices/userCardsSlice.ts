import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserArray, UserCardsState } from '../../interfaces/UserCardsState'

const initialState: UserCardsState = {
    activeCards: [],
    archivedCards: [],
}

export const fetchCards = createAsyncThunk(
    `userCardsSlice/fetchCards`,
    async () => {
        const response = await fetch(
            'https://jsonplaceholder.typicode.com/users'
        )
        const data = await response.json()
        return data
    }
)

export const userCardsSlice = createSlice({
    name: 'userCardsSlice',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(
            fetchCards.fulfilled,
            (state: UserCardsState, action: PayloadAction<UserArray>) => {
                state.activeCards = action.payload
            }
        )
    },
})

export default userCardsSlice.reducer
