import { FC, PropsWithChildren } from 'react'
import { IButton } from './Button.interface'
import styles from './Button.module.scss'

const Button: FC<PropsWithChildren<IButton>> = ({
	className,
	children,
	...rest
}) => {
	return (
		<button {...rest} className={`${styles.button} ${className}`}>
			{children}
		</button>
	)
}
export default Button
