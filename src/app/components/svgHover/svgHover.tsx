import Image from 'next/image'
import s from './s.module.scss'
import STOWN from './assets/stone.png'

interface ISvgHover {
	className?: string
}

export const SvgHover = ({}: ISvgHover) => {
	return (
		<div className={s.root}>
			<Image
				className={s.logo}
				src={STOWN}
				alt='Next.js logo'
				fill
				objectFit='cover'
				priority
			/>
			<div className={s.wrapper}>
				<svg
					width='100%'
					height='100%'
					viewBox='0 0 1440 724'
					preserveAspectRatio='xMidYMid slice'>
					<path
						d='m354.7 222.4c1.2866 1.5765 1.3493 1.6396 1.3493 1.6396l-0.0941 29.67 0.0314 39.445-1.0355 2.1126-0.21965 1.9549 0.12551 1.6396 0.40792 1.072 0.28242 0.97745v21.662l-0.0314 20.117 0.0941 15.545 0.0941 18.572v17.563l-0.15689 31.247-0.5962 1.072-0.62758 1.8603 0.32779 1.4159 1.1649 1.4158 0.1775 9.052-0.13313 24.525-0.22189 22.831-0.79877-0.17837-0.0888 2.1404 0.22189 0.80264-0.0888 25.283-0.22189 25.105-0.1506 111.54-0.7531 62.557 263.99-1.1351v-4.6035l-0.24517-486.65-6e-3 -0.72116-202.11-66.877-1.2552-0.63062-7.2172-0.12613-2.0396 0.5045-50.168 65.085z'
						fill='#f3c1c1'
						fill-opacity='.5'
					/>
					<path
						d='m876.23 0.22847c-70.63 42.346-70.636 42.369-70.636 42.369l-1.1397 1.6664 0.14332 69.661-5.4441 609.96v0.51816l281.97-5e-3 -0.4669-712.78-12.975-11.608-0.062-0.063402-191.12 0.044101z'
						fill='#f3c1c1'
						fill-opacity='.5'
					/>
					<path
						d='m802.21 304.41c-60.104 23.335-59.397 23.335-59.397 23.335l0.35621 396.24 59.578-0.0156z'
						fill='#f3c1c1'
						fill-opacity='.5'
					/>
				</svg>
			</div>
		</div>
	)
}

