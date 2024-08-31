import cn from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@consta/uikit/Button';
import cl from './about.module.scss'

const About = ({ aboutText }) => {

	return (
		<>
			{aboutText.map(({ title, points, btn, achievements, firstImg, secondImg }) => (
				<div className={cl.about}>
					<div className="container">
						<div className={cn([cl.aboutInformation, 'd-grid'])}>
							<img className={cl.firstImg} src={firstImg} alt="mainEntrance" />
							<span className={cn([cl.firstBlock, 'd-flex', 'flex-column'])}>
								<h1 className={cn([cl.firstBlockTitle, 'mb-0'])}>{title}</h1>
								<span className={cn([cl.firstBlockText, 'd-flex', 'flex-column'])}>
									{points.map(({ id, image, text }) => (
										<div className={cn([cl.pointGroup, 'd-flex', 'mb-0'])} key={id}>
											<img src={image} alt="" />
											<p className="mb-0">{text}</p>
										</div>
									))}
								</span>
								<div className="d-flex">
									<Link to="">
										<Button className={cn([cl.btn, 'd-none', 'd-sm-flex', 'justify-content-center', 'align-items-center'])} label={btn} size='l'/>
										<Button className={cn([cl.btn, 'd-xs-flex', 'd-sm-none', 'justify-content-center', 'align-items-center'])} label={btn} size='s'/>
									</Link>
								</div>
							</span>
							<div className={cn([cl.secondBlock, 'd-none', 'd-sm-flex'])}>
								{achievements.map(({ title, text }) => (
									<span className={cn([cl.secondBlockCol, 'd-flex', 'flex-column'])} key={title}>
										<h1 className={cn([cl.secondBlockColTitle, 'd-flex', 'mb-0'])}>{title}</h1>
										<p className={cn([cl.secondBlockColText, 'd-flex', 'mb-0'])}>{text}</p>
									</span>
								))}
							</div>
							<img className={cn([cl.secondImg, 'd-none', 'd-sm-flex'])} src={secondImg} alt="car" />
						</div>
					</div>
				</div>
			))}
		</>
	)
}

export default About
