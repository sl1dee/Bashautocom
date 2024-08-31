import { Suspense, lazy } from 'react';
import {Routes, Route} from 'react-router-dom';
import MainPage from "@pages/main-page/main-page";
import {Loader} from "@consta/uikit/Loader";
import BlockBuildPage from "./pages/BlockBuildPage/BlockBuildPage";

const ServiceCenterPage = lazy(() => import('@pages/service-center-page/service-center-page.jsx'));
const DetailingPage = lazy(() => import('@pages/detailing-page/detailing-page.jsx'));
const CreditPage = lazy(() => import('@pages/credit-page/credit-page.jsx'));
const InsurancePage = lazy(() => import('@pages/insurance-page/insurance-page.jsx'));
const NewCarsPage = lazy(() => import('@pages/new-cars-page/new-cars-page.jsx'));
const UsedCarsPage = lazy(() => import('@pages/used-cars-page/used-cars-page.jsx'));
const UsedCarPage = lazy(() => import('@pages/used-car-page/used-car-page.jsx'));
const PrivacyPolicyPage = lazy(() => import('@pages/privacy-policy-page/privacy-policy-page.jsx'));

const WaitLoadPage = () => {return <div className='h-100 w-100 d-flex align-items-center justify-content-center' style={{minHeight: 500}}><Loader/></div>} ;

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/">
				<Route index element={<MainPage />}/>
				<Route path='service-center' element={<Suspense fallback={<WaitLoadPage/>}><ServiceCenterPage /></Suspense>}/>
				<Route path="body-repair" element={<Suspense fallback={<WaitLoadPage/>}><BlockBuildPage /></Suspense>}/>
				<Route path="detailing" element={<Suspense fallback={<WaitLoadPage/>}><DetailingPage /></Suspense>}/>
				<Route path="credit" element={<Suspense fallback={<WaitLoadPage/>}><CreditPage /></Suspense>}/>
				<Route path="insurance" element={<Suspense fallback={<WaitLoadPage/>}><InsurancePage /></Suspense>}/>
				<Route path="rent-car" element={<Suspense fallback={<WaitLoadPage/>}><BlockBuildPage /></Suspense>}/>
				<Route path="new-cars" element={<Suspense fallback={<WaitLoadPage/>}><NewCarsPage /></Suspense>}/>
				<Route path="used-cars" element={<Suspense fallback={<WaitLoadPage/>}><UsedCarsPage /></Suspense>}/>
				<Route path="used-car" element={<Suspense fallback={<WaitLoadPage/>}><UsedCarPage /></Suspense>}/>
				<Route path="privacy-policy" element={<Suspense fallback={<WaitLoadPage/>}><PrivacyPolicyPage /></Suspense>}/>
			</Route>
		</Routes>
	)
}

export default AppRoutes
