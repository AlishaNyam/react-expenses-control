import { createSlice, configureStore } from '@reduxjs/toolkit'

export const buyingsSlice = createSlice ({
    name: 'buyings',
    initialState: {
        buyings: []
    },
    reducers: {
        save: (state, action) => {
            state.buyings = [...state.buyings, action.payload]
        },
        edit: (state, action) => {
            state.buyings[action.payload.index] = action.payload.newObject
            state.buyings = [...state.buyings]
        },
        delete: (state, action) => {
            state.buyings.splice(action.payload, 1);
            state.buyings = [...state.buyings]
        },
        toggleCheckbox: (state, action) => {
            state.buyings[action.payload].checked = !state.buyings[action.payload].checked
            state.buyings = [...state.buyings]
        }
    }
})

const store = configureStore({
    reducer: {
        buyings: buyingsSlice.reducer
    }
  })

export default store
export const actions = buyingsSlice.actions;
