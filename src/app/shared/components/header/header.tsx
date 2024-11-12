'use client'

import { MENU_TABS } from '../../mocks/menu'
import { Logo } from '../logo/logo'
import s from './s.module.scss'

interface IHeaderProps {
	className?: string
}

export const Header = ({}: IHeaderProps) => {
	return (
		<section className={s.root}>
			<div className={s.rootWrapper}>
				<Logo />
				<ul className={s.navList}>
					{MENU_TABS.map((tab, i) => (
						<li
							key={tab + i}
							className={s.navItem}>
							{tab}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}

