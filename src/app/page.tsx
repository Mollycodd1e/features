'use client'
import { SvgHover } from './components/svgHover/svgHover'
import styles from './page.module.css'

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<SvgHover />
			</main>
		</div>
	)
}
