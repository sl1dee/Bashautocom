import '@assets/styles/style.scss'
import store from '@store'
import { Provider } from 'react-redux'

import Routes from './routes.jsx'

const Root = () => {
	return (
		// <Theme preset={presetBashautocom}>
		<Provider store={store}>
			<Routes />
		</Provider>
		// </Theme>
	)
}

export default Root
