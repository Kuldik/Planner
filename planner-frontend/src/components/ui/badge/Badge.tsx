import type { CSSProperties, PropsWithChildren } from 'react'
import { tv } from 'tailwind-variants'
import styles from './Badge.module.css'

interface IBadge {
	className?: string
	variant?: string
	style?: CSSProperties
}

const badge = tv({
	variants: {
		backgroundColor: {
			gray: 'bg-gray-500/20',
			high: 'bg-red-400/60',
			medium: 'bg-orange-400/70',
			low: 'bg-blue-400/70'
		}
	},
	defaultVariants: {
		backgroundColor: 'gray'
	}
})

export function Badge({
	children,
	style
}: PropsWithChildren<IBadge>) {
	return (
		<span
			className={styles.badge}
			style={style}
		>
			{children}
		</span>
	)
}
