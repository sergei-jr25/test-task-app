import Button from '@/components/ui/Button/Button'
import DeleteSvg from '@/components/ui/svgIcons/DeleteSvg'
import { useActions } from '@/hooks/useActions'
import { ICatalogItem } from '@/shared/types/cart'
import { FC } from 'react'
import styles from './CartItem.module.scss'
const CartItem: FC<{ item: ICatalogItem }> = ({ item }) => {
	const { removeToCart } = useActions()
	return (
		<div className={styles.item}>
			<div className={styles.item__name}>{item.name}</div>
			{item.image && (
				<div className={styles.item__image}>
					<img src={item.image} alt={item.name} />
				</div>
			)}
			<div className={styles.item__price}>{item.price} Р</div>
			<Button
				className={styles.item__button}
				onClick={() => removeToCart({ id: item.id })}
			>
				Убрать
				<DeleteSvg />
			</Button>
		</div>
	)
}
export default CartItem
