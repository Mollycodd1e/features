'use client'
import { FloorHover } from './components/floorHover/floorHover'
import { TestThree } from './components/testThree/testThree'
import { TowerHover } from './components/towerHover/towerHover'
import styles from './page.module.css'
import { Canvas } from '@react-three/fiber'

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<TowerHover />
				<FloorHover />
				<div style={{ width: '100%', height: '500px' }}>
					<Canvas>
						<TestThree />
					</Canvas>
				</div>
			</main>
		</div>
	)
}
