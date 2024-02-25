import { store } from '@/store'
import { FC, PropsWithChildren } from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

const MainProviders: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Provider store={store}>
			<BrowserRouter>{children}</BrowserRouter>
		</Provider>
	)
}
export default MainProviders
