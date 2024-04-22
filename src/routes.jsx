// import BodyRepairPage from '@pages/body-repair-page/index.js'
// import CreditPage from '@pages/credit-page/credit-page.jsx'
// import DetailingPage from '@pages/detailing-page/index.js'
// import InsurancePage from '@pages/insurance-page/insurance-page.jsx'
// import NewCarsPage from '@pages/new-cars/new-cars-page.jsx'
// import PrivacyPolicyPage from '@pages/privacy-policy-page/index.js'
// import ServiceCenterPage from '@pages/service-center-page/index.js'
// import UsedCarPage from '@pages/used-car/used-car-page.jsx'
// import UsedCarsPage from '@pages/used-cars/index.js'
import { Suspense, lazy } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

// import MainPage from './pages/main-page'

const MainPage = lazy(() => import('./pages/main-page'))
const ServiceCenterPage = lazy(() => import('@pages/service-center-page/index.js'))
const BodyRepairPage = lazy(() => import('@pages/body-repair-page/index.js'))
const DetailingPage = lazy(() => import('@pages/detailing-page/index.js'))
const CreditPage = lazy(() => import('@pages/credit-page/credit-page.jsx'))
const InsurancePage = lazy(() => import('@pages/insurance-page/insurance-page.jsx'))
const NewCarsPage = lazy(() => import('@pages/new-cars/new-cars-page.jsx'))
const UsedCarsPage = lazy(() => import('@pages/used-cars/index.js'))
const UsedCarPage = lazy(() => import('@pages/used-car/used-car-page.jsx'))
const PrivacyPolicyPage = lazy(() => import('@pages/privacy-policy-page/index.js'))

const Routes = () => {
	const router = createBrowserRouter([
		{
			path: '/',
			element: (
				<Suspense>
					<MainPage />
				</Suspense>
			)
		},
		{
			path: '/service-center',
			element: (
				<Suspense>
					<ServiceCenterPage />
				</Suspense>
			)
		},
		{
			path: '/body-repair',
			element: (
				<Suspense>
					<BodyRepairPage />
				</Suspense>
			)
		},
		{
			path: '/detailing',
			element: (
				<Suspense>
					<DetailingPage />
				</Suspense>
			)
		},
		{
			path: '/credit',
			element: (
				<Suspense>
					<CreditPage />
				</Suspense>
			)
		},
		{
			path: '/insurance',
			element: (
				<Suspense>
					<InsurancePage />
				</Suspense>
			)
		},
		{
			path: '/new-cars',
			element: (
				<Suspense>
					<NewCarsPage />
				</Suspense>
			)
		},
		{
			path: '/used-cars',
			element: (
				<Suspense>
					<UsedCarsPage />
				</Suspense>
			)
		},
		{
			path: '/used-car',
			element: (
				<Suspense>
					<UsedCarPage />
				</Suspense>
			)
		},
		{
			path: '/privacy-policy',
			element: (
				<Suspense>
					<PrivacyPolicyPage />
				</Suspense>
			)
		}
	])

	return <RouterProvider router={router} />
}

export default Routes
