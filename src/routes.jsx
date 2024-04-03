import NewCarsPage from '@pages/new-cars/new-cars-page.jsx'
import ServiceCenterPage from '@pages/service-center-page/index.js'
import UsedCarPage from '@pages/used-car/used-car-page.jsx'
import UsedCarsPage from '@pages/used-cars/index.js'
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
		},
		{
			path: '/new-cars',
			element: <NewCarsPage />
		},
		{
			path: '/used-cars',
			element: <UsedCarsPage />
		},
		{
			path: '/used-car',
			element: <UsedCarPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
