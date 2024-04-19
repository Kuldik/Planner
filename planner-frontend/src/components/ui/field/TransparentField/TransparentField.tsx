import { type InputHTMLAttributes, forwardRef } from 'react'
import styles from './TransparentField.module.css'

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>

export const TransparentField = forwardRef<
	HTMLInputElement,
	TypeTransparentField
>(({ className, ...rest }, ref) => {
	return (
		<input
			className={styles.input}
			ref={ref}
			{...rest}
		/>
	)
})

TransparentField.displayName = 'TransparentField' 
// Из-за использования forwardRef необходимо
// указывать таким образом displayName
