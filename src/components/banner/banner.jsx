import React from 'react'

import cl from './banner.module.scss'

const Banner = ({ bannerList }) => {
	return (
		<div>
			<div className="container">
				{bannerList.map(({ bannerDesktop, bannerTablet, bannerMobile }) => (
					<picture>
						<source srcSet={bannerMobile} media="(max-width: 575px)" className={cl.banner} />
						<source srcSet={bannerTablet} media="(min-width: 567px) and (max-width: 991px)" className={cl.banner} />
						<source srcSet={bannerDesktop} media="(min-width: 992)" className={cl.banner} />
						<img src={bannerDesktop} className={cl.banner} />
					</picture>
				))}
			</div>
		</div>
	)
}

export default Banner
