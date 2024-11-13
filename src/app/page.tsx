'use client'
import { FloorHover } from './components/floorHover/floorHover'
import { TowerHover } from './components/towerHover/towerHover'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<TowerHover />
				<FloorHover />
			</main>
		</div>
	)
}
