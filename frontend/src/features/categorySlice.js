import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isCategoryPanelVisible: false
}

const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        toggleCategoryPanelVisibility: (state) => {
            state.isCategoryPanelVisible = !state.isCategoryPanelVisible;
        }
    }
})



export const { toggleCategoryPanelVisibility } = categorySlice.actions

export default categorySlice.reducer;
