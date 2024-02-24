import { CSSProperties, FC } from 'react'
import styles from './Loader.module.scss'

const Loader: FC<{ style?: CSSProperties }> = ({ style }) => {
	return (
		<div className={`${styles.loader}`} style={{ ...style }}>
			<div className={styles.loader__item}></div>
		</div>
	)
}
export default Loader
