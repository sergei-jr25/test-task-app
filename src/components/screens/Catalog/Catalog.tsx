import Loader from '@/components/ui/Loader/Loader'
import { useActions } from '@/hooks/useActions'
import { TypeSelecor } from '@/hooks/useTypeSelector'
import { FC, useEffect } from 'react'
import styles from './Catalog.module.scss'
import CatalogItem from './CatalogItem/CatalogItem'

const Catalog: FC = () => {
	const { catalogAction } = useActions()
	useEffect(() => {
		catalogAction()
	}, [])

	const { products, isLoading } = TypeSelecor(state => state.catalog)

	return (
		<section className={`container ${styles.catalog}`}>
			<h1 className={`title ${styles.catalog__title}`}>Catalog</h1>
			<div className={styles.catalog__items}>
				{isLoading
					? Array.from({ length: 6 }).map((_, idx) => (
							<Loader key={idx} style={{ height: 400 }} />
					  ))
					: products.map(item => <CatalogItem item={item} key={item.id} />)}
			</div>
		</section>
	)
}
export default Catalog
