import { actions as cartActions } from './cart/cart.slice'
import * as catalogActions from './catalog/catalog.actions'

export const rootAtcions = {
	...catalogActions,
	...cartActions,
}
