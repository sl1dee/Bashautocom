import Banner from '@components/banner/banner.jsx'

import MainLayout from '../../layout/main/main-layout.jsx'
import RentCars from "@components/rent-cars/rent-cars.jsx";

const RentCarPage = () => {
	const blocks = [
		{
			alias: 'Banner',
			value: [
				{
					id: 0,
					bannerDesktop: './assets/img/banner/rentCar/rentCarDesktop.jpg',
					bannerTablet: './assets/img/banner/rentCar/rentCarTablet.jpg',
					bannerMobile: './assets/img/banner/rentCar/rentCarMobile.jpg'
				}
			]
		}
	]

	return (
		<>
			{blocks.map((block) => {
				switch (block.alias) {
					case 'Banner':
						return <Banner bannerList={block.value} />
					// case 'InOurShowrooms':
					//     return <InOurShowrooms title={block.title} cardList={block.value} description={block.description} />
					// case 'Banks':
					//     return <Banks title={block.title} banksList={block.value} />
					// case 'Credit':
					//     return <Credit creditList={block.value} comboboxValues={block.brands} />
				}
			})}
			<RentCars/>
		</>
	)
}

export default RentCarPage
