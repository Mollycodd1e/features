'use client'

import Link from 'next/link'
import { MENU_TABS } from '../../mocks/menu'
import { Logo } from '../logo/logo'
import s from './s.module.scss'

export const Header = () => {
	return (
		<section className={s.root}>
			<div className={s.rootWrapper}>
				<Logo />
				<ul className={s.navList}>
					{MENU_TABS.map((tab, i) => (
						<Link href={tab.link}>
							<li
								key={tab.text + i}
								className={s.navItem}>
								{tab.text}
							</li>
						</Link>
					))}
				</ul>
			</div>
		</section>
	)
}
