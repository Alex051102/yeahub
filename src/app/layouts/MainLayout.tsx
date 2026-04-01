
import { Outlet } from 'react-router-dom'
import styles from './MainLayout.module.css'
import Header from '../../widgets/header/ui/Header'

export const MainLayout = () => {
	return (
		<div >
			<Header></Header>

			<main >
				<Outlet />
			</main>

			<p>footer</p>
		</div>
	)
}
