import BodyRepairPage from '@pages/body-repair-page/index.js'
import CreditPage from '@pages/credit-page/credit-page.jsx'
import DetailingPage from '@pages/detailing-page/index.js'
import InsurancePage from '@pages/insurance-page/insurance-page.jsx'
import NewCarsPage from '@pages/new-cars/new-cars-page.jsx'
import PrivacyPolicyPage from '@pages/privacy-policy-page/index.js'
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
			path: '/body-repair',
			element: <BodyRepairPage />
		},
		{
			path: '/detailing',
			element: <DetailingPage />
		},
		{
			path: '/credit',
			element: <CreditPage />
		},
		{
			path: '/insurance',
			element: <InsurancePage />
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
		},
		{
			path: '/privacy-policy',
			element: <PrivacyPolicyPage />
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
