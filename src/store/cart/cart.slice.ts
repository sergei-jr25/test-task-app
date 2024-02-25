import { ICatalogItem } from '@/shared/types/cart'
import { getLocalStorage } from '@/utils/local-storage'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { initState } from './cart.interface'

const initialState: initState = {
	items: getLocalStorage('cart') || [],
	totalPrice: 0,
}

const cart = createSlice({
	name: 'cart',
	initialState: initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<{ item: ICatalogItem }>) => {
			const isItem = state.items.some(item => item.id === payload.item.id)

			if (!isItem) {
				state.items.push(payload.item)
				localStorage.setItem('cart', JSON.stringify(state.items))
			}
		},
		removeToCart: (state, { payload }: PayloadAction<{ id: string }>) => {
			state.items = state.items.filter(item => item.id !== payload.id)
			localStorage.setItem('cart', JSON.stringify(state.items))
		},

		calculateTotalPrice: state => {
			state.totalPrice = state.items.reduce((acc, { price }) => acc + price, 0)
		},
	},
})

export const { actions, reducer } = cart
