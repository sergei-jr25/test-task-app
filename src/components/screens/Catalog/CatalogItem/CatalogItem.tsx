import Button from '@/components/ui/Button/Button'
import Loader from '@/components/ui/Loader/Loader'
import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { ICatalogItem } from '@/shared/types/cart'
import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import styles from './CatalogItem.module.scss'

const CatalogItem: FC<{ item: ICatalogItem }> = ({ item }) => {
	const { addToCart, removeToCart } = useActions()
	const { items } = useCart()
	const navigate = useNavigate()

	function handlNavigation() {
		navigate('/cart')
	}

	const isItemToCart = items.some(itemCart => itemCart.id === item.id)

	const handleAddToCart = (item: ICatalogItem) => {
		addToCart({ item: item })
	}

	return (
		<section className={styles.item}>
			<h4 className={styles.item__name}>
				<Link to='#'>{item.name}</Link>
			</h4>
			{item.image ? (
				<Link to='#' className={styles.item__image}>
					<img src={item.image} alt={item.name} />
				</Link>
			) : (
				<Loader />
			)}
			<div className={styles.item__price}>Цена: {item.price}</div>
			<Button
				className={`${styles.item__button} ${
					isItemToCart ? styles.item__button_remove : styles.item__button_add
				}`}
				onClick={
					isItemToCart ? () => handlNavigation() : () => handleAddToCart(item)
				}
			>
				{isItemToCart ? 'Оформить заказ' : 'Добавить в корзину'}
			</Button>
		</section>
	)
}
export default CatalogItem
