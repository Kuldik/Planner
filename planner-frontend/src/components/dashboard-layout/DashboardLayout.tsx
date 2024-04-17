import type { PropsWithChildren } from 'react'

import { Header } from './header/Header'
import { Sidebar } from './sidebar/Sidebar'
import styles from './DashboardLayout.module.css'

export default function DashboardLayout({
	children
}: PropsWithChildren<unknown>) {
	return (
		<div className={styles.wrapper}>
			<Sidebar />

			<main className={styles.main}>
				<Header />
				{children}
			</main>
		</div>
	)
}
