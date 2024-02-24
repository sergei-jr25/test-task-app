import { ICatalogItem } from '@/shared/types/cart'
import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const catalogAction = createAsyncThunk<ICatalogItem[], void>(
	'catalog',
	async (_, { rejectWithValue }) => {
		try {
			const { data } = await axios.get('https://appevent.ru/dev/task1/catalog')

			return data.items
		} catch (error) {
			console.log(error)
			return rejectWithValue(error)
		}
	}
)
