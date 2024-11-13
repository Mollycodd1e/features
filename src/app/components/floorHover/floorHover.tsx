'use client'

import Image from 'next/image'
import s from './s.module.scss'
import TOWER from './assets/tower.webp'
import { useRef, useState } from 'react'
import { useOutsideClick } from '@/app/shared/hooks/useOutsideClick'

export const FloorHover = () => {
	const [activeFloor, setActiveFloor] = useState<number>(0)
	const componentRef = useRef<HTMLDivElement>(null)

	const towerDescription: { title: string; description: string }[] = [
		{ title: 'Башня 1', description: 'Самая большая' },
		{ title: 'Этаж топ', description: 'Для элиты' },
		{ title: 'Этаж мид', description: 'Для успешных людей' },
		{ title: 'Этаж бот', description: 'Для несостоявшихся' },
	]

	useOutsideClick(componentRef, () => setActiveFloor(0))

	return (
		<section
			className={s.root}
			id='floorHover'>
			<div className={s.rootWrapper}>
				<Image
					className={s.tower}
					src={TOWER}
					alt='tower'
					fill
					objectFit='cover'
				/>
				<div
					className={s.svgWrapper}
					ref={componentRef}
					onClick={() => setActiveFloor(0)}>
					<svg
						width='100%'
						height='100%'
						viewBox='0 0 1200 895'
						preserveAspectRatio='xMidYMid slice'>
						<path
							onClick={(e) => {
								e.stopPropagation()
								setActiveFloor(1)
							}}
							d='m207.74 407.39c1.5417 15.802 0.38542 233.56 0.38542 233.56l305.25-242.81 9.2501-4.625 9.6355-1.1563 6.9376 0.38542 7.323 3.0834 458.37 325.64-0.8176-203.38 2.7254-10.152-461.44-407.34-7.323-3.2761-13.297-0.38542-7.7084 4.4323-303.1 295.44-5.4507 5.7232z'
							fill='#f3c1c1'
							fill-opacity='.5'
						/>
						<path
							onClick={(e) => {
								e.stopPropagation()
								setActiveFloor(2)
							}}
							d='m208.13 642.88c3.0834 191.94 3.0834 192.71 3.0834 192.71l303.71-196.56 37.771 2.3125 441.69 254.38 7.7084-1.5417 2.3125-173.44-440.92-314.5-19.271-12.333-13.104-1.5417-10.792 3.0834-11.563 5.3959-299.09 237.42z'
							fill='#f3c1c1'
							fill-opacity='.5'
						/>
						<path
							onClick={(e) => {
								e.stopPropagation()
								setActiveFloor(3)
							}}
							d='m209.67 846.38v50.105l792.42-0.77084-450.94-253.61-36.23-1.5417-306.79 197.34z'
							fill='#f3c1c1'
							fill-opacity='.5'
						/>
					</svg>
				</div>
			</div>
			<div className={s.textWrappers}>
				<div className={s.title}>{towerDescription[activeFloor].title}</div>
				<div className={s.description}>{towerDescription[activeFloor].description}</div>
			</div>
		</section>
	)
}

