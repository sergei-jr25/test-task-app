import CartSvg from '@/components/ui/svgIcons/CartSvg'
import { useCart } from '@/hooks/useCart'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from '../Header.module.scss'

const HeaderCart: FC = () => {
	const { items } = useCart()
	return (
		<div className={`${styles.header__cart} ${styles.cart}`}>
			<Link to='/cart'>
				<CartSvg />
			</Link>
			<span className={styles.cart__quantity}> {items.length}</span>
		</div>
	)
}
export default HeaderCart
