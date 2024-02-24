import { ICatalogItem } from '@/shared/types/cart'

export interface initState {
	items: ICatalogItem[]
	totalPrice?: number
}
