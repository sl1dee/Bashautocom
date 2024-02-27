import ServiceCenterPage from '@pages/service-center-page/index.js'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import MainPage from './pages/main-page'

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <MainPage />
		},
		{
			path: '/service-center',
			element: <ServiceCenterPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
