import cn from 'clsx'
import type { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import styles from './Button.module.css'

type TypeButton = ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
	children,
	className,
	...rest
}: PropsWithChildren<TypeButton>) {
	return (
		<button
			className={styles.button}
			{...rest}
		>
			{children}
		</button>
	)
}
