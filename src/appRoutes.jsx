import { Suspense, lazy } from 'react'
import {Routes, Route} from 'react-router-dom'
import MainPage from "@pages/main-page/main-page";

const ServiceCenterPage = lazy(() => import('@pages/service-center-page/service-center-page.jsx'))
const BodyRepairPage = lazy(() => import('@pages/body-repair-page/body-repair-page.jsx'))
const DetailingPage = lazy(() => import('@pages/detailing-page/detailing-page.jsx'))
const CreditPage = lazy(() => import('@pages/credit-page/credit-page.jsx'))
const InsurancePage = lazy(() => import('@pages/insurance-page/insurance-page.jsx'))
const RentCarPage = lazy(() => import('@pages/rent-car-page/rent-car-page.jsx'))
const NewCarsPage = lazy(() => import('@pages/new-cars-page/new-cars-page.jsx'))
const UsedCarsPage = lazy(() => import('@pages/used-cars-page/used-cars-page.jsx'))
const UsedCarPage = lazy(() => import('@pages/used-car-page/used-car-page.jsx'))
const PrivacyPolicyPage = lazy(() => import('@pages/privacy-policy-page/privacy-policy-page.jsx'))

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<MainPage />}/>
				<Route path='service-center' element={<Suspense><ServiceCenterPage /></Suspense>}/>
				<Route path="body-repair" element={<Suspense><BodyRepairPage /></Suspense>}/>
				<Route path="detailing" element={<Suspense><DetailingPage /></Suspense>}/>
				<Route path="credit" element={<Suspense><CreditPage /></Suspense>}/>
				<Route path="insurance" element={<Suspense><InsurancePage /></Suspense>}/>
				<Route path="rent-car" element={<Suspense><RentCarPage /></Suspense>}/>
				<Route path="new-cars" element={<Suspense><NewCarsPage /></Suspense>}/>
				<Route path="used-cars" element={<Suspense><UsedCarsPage /></Suspense>}/>
				<Route path="used-car" element={<Suspense><UsedCarPage /></Suspense>}/>
				<Route path="privacy-policy" element={<Suspense><PrivacyPolicyPage /></Suspense>}/>
			</Route>
		</Routes>
	)
}

export default AppRoutes
