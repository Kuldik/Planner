import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import styles from './checkbox.module.css'

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

// export function Checkboxes() {
//   return (
//     <div>
//       <Checkbox {...label} className={styles.checkbox} />
//     </div>
//   );
// }

const Checkboxes = (props: {
	id?: string
	extra?: string
	color?:
		| 'red'
		| 'blue'
		| 'green'
		| 'yellow'
		| 'orange'
		| 'teal'
		| 'navy'
		| 'lime'
		| 'cyan'
		| 'pink'
		| 'purple'
		| 'amber'
		| 'indigo'
		| 'gray'
	[x: string]: any
}) => {
	const { extra, color, id, ...rest } = props
	return (
		<div>
            <Checkbox
                {...label} 
                className={styles.checkbox} 
                id={id} 
                {...rest}
            />
        </div>
	)
}

export default Checkboxes
