import { FC, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
import HeaderCart from './HeaderCart/HeaderCart'

const Header: FC = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false)

	const toggleMenu = () => {
		setIsOpenMenu(!isOpenMenu)
	}

	return (
		<header className={styles.header}>
			<div className={`container ${styles.header__container}`}>
				<div
					className={`${styles.header__logo} ${
						isOpenMenu ? styles.header__logo_open : ''
					}`}
				>
					<Link to={'/'}>Logo</Link>
				</div>

				<div
					onClick={toggleMenu}
					className={`${styles.header__menu} ${styles.menu}`}
				>
					<button
						type='button'
						className={`${styles.menu__icon} ${
							isOpenMenu ? styles.menu__icon_open : ''
						}`}
					>
						<span></span>
					</button>
					<nav
						className={`${styles.menu__body} ${
							isOpenMenu ? styles.menu__body_open : ''
						}`}
					>
						<ul className={styles.menu__list}>
							<li className={styles.menu__item}>
								<a href='/catalog' className={styles.menu__link}>
									Catalog
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className={styles.header__actions}>
					<HeaderCart />
				</div>
			</div>
		</header>
	)
}
export default Header
