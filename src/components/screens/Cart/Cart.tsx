import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { FC, useEffect } from 'react'
import styles from './Cart.module.scss'
import CartItem from './CartItem/CartItem'

const Cart: FC = () => {
	const { items, totalPrice } = useCart()
	const { calculateTotalPrice } = useActions()
	useEffect(() => {
		calculateTotalPrice()
	}, [items])

	return (
		<section className={styles.cart}>
			<div className={`container ${styles.cart__container}`}>
				{items.length ? (
					<div className={styles.cart__items}>
						{items.map(item => (
							<CartItem item={item} key={item.id} />
						))}
					</div>
				) : (
					<div className={styles.cart__empty}>Корзина пуста</div>
				)}
				{!!items.length && (
					<div className={styles.cart__totalprice}>
						Общая стоимсть: {totalPrice} Р
					</div>
				)}
			</div>
		</section>
	)
}
export default Cart
