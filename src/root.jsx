import '@assets/styles/style.scss'
import { Theme } from '@consta/uikit/Theme'
import store from '@store'
import { Provider } from 'react-redux'

import Routes from './routes.jsx'
import { presetGiGas } from './uikit/presets/presetGiGas.js'

const Root = () => {
	return (
		<Theme preset={presetGiGas}>
			<Provider store={store}>
				<Routes />
			</Provider>
		</Theme>
	)
}

export default Root
