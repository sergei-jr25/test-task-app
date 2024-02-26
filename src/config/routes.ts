import CartPage from '@/pages/CartPage'
import CatalogPage from '@/pages/CatalogPage'
import ErrorPage from '@/pages/ErrorPage'
import MainPage from '@/pages/MainPage'
import React from 'react'
import {
	CART_ROUTE,
	CATALOG_ROUTE,
	ERROR_ROUTE,
	MAIN_ROUTE,
} from '../shared/consts/consts'

export const routes: { path: string; element: React.ComponentType<any> }[] = [
	{ path: MAIN_ROUTE, element: MainPage },
	{ path: CATALOG_ROUTE, element: CatalogPage },
	{ path: CART_ROUTE, element: CartPage },
	{ path: ERROR_ROUTE, element: ErrorPage },
]
