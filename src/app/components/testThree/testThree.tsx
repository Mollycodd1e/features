import { OrbitControls } from '@react-three/drei'
import s from './s.module.scss'

interface ITestThree {
	className?: string
}

export const TestThree = ({}: ITestThree) => {
	return (
		<>
			<OrbitControls />
			<mesh>
				<boxGeometry />
				<meshNormalMaterial />
			</mesh>
		</>
	)
}

