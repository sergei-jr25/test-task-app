import { createSlice } from '@reduxjs/toolkit'
import { catalogAction } from './catalog.actions'
import { IIninState } from './catalog.interface'

const initialState: IIninState = {
	isLoading: false,
	products: [],
}

const catalog = createSlice({
	name: 'catalog',
	initialState: initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(catalogAction.pending, (state, { payload }) => {
			state.isLoading = true
		})
		builder.addCase(catalogAction.fulfilled, (state, { payload }) => {
			state.isLoading = false
			state.products = payload
		})
		builder.addCase(catalogAction.rejected, state => {
			state.isLoading = false
			state.products = []
		})
	},
})

export const { actions, reducer } = catalog
