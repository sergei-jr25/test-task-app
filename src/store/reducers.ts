import { combineReducers } from '@reduxjs/toolkit'
import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as Catalogreducer } from './catalog/catalog.slice'

export const reducers = combineReducers({
	cart: cartReducer,
	catalog: Catalogreducer,
})
