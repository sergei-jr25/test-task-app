import { FC, PropsWithChildren } from 'react'
import Footer from './Footer/Footer'
import Header from './Header/Header'
import styles from './Layout.module.scss'

const Layout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<div className={`wrapper ${styles.layout}`}>
			<Header />
			<main> {children}</main>
			<Footer />
		</div>
	)
}
export default Layout
