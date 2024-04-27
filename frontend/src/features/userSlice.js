import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    currentUser : null,
    error: null
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        signInSuccess: (state, action) => {
            state.currentUser = action.payload
            state.error = false
        },
        signInFailure: (state, action) => {
            state.error = action.payload
        },
        signOutSuccess: (state) => {
            state.currentUser = null;
        }
    }
})

export const {
    signInSuccess, 
    signInFailure,
    signOutSuccess

} = userSlice.actions

export default userSlice.reducer