import { ICatalogItem } from '@/shared/types/cart'

export const calculateTotalPrice = (items: ICatalogItem[]) => {
	return items.reduce((acc, item) => {
		acc += item.price
		return acc
	}, 0)
}
