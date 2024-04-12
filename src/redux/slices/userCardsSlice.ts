import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { UserArray, UserCardsState } from '../../interfaces/UserCardsState'
import { IUserCard } from '../../interfaces/IUserCard'

const initialState: UserCardsState = {
    pending: null,
    error: null,
    activeCards: [],
    archivedCards: [],
}

export const fetchCards = createAsyncThunk(
    `userCardsSlice/fetchCards`,
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch(
                'https://jsonplaceholder.typicode.com/users'
            )

            if (!response.ok) {
                throw new Error('Error')
            }
            const data = await response.json()
            return data
        } catch (error: any) {
            return rejectWithValue(error.message)
        }
    }
)

export const userCardsSlice = createSlice({
    name: 'userCardsSlice',
    initialState: initialState,
    reducers: {
        archiveCard: (
            state: UserCardsState,
            action: PayloadAction<IUserCard>
        ) => {
            const { id } = action.payload
            state.activeCards = state.activeCards.filter(
                (item) => item.id !== id
            )
            state.archivedCards.push(action.payload)
        },

        activateCard: (
            state: UserCardsState,
            action: PayloadAction<IUserCard>
        ) => {
            const { id } = action.payload
            state.archivedCards = state.archivedCards.filter(
                (item) => item.id !== id
            )
            state.activeCards.push(action.payload)
        },

        changeCard: (
            state: UserCardsState,
            action: PayloadAction<IUserCard>
        ) => {
            const { id } = action.payload
            state.activeCards = state.activeCards.map((item) =>
                item.id === id ? action.payload : item
            )
        },

        deleteCard: (
            state: UserCardsState,
            action: PayloadAction<IUserCard>
        ) => {
            const { id } = action.payload
            state.activeCards = state.activeCards.filter(
                (item) => item.id !== id
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCards.pending, (state: UserCardsState) => {
            state.pending = true
            state.error = null
        })
        builder.addCase(
            fetchCards.fulfilled,
            (state: UserCardsState, action: PayloadAction<UserArray>) => {
                state.pending = false
                state.activeCards = action.payload
            }
        )
        builder.addCase(fetchCards.rejected, (state: UserCardsState) => {
            state.pending = false
            state.error = true
        })
    },
})

export const { archiveCard, activateCard, changeCard, deleteCard } =
    userCardsSlice.actions

export default userCardsSlice.reducer
