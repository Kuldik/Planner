import styles from './checkbox.module.css'

const Checkbox = (props: {
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
	const { extra, color, id, ...rest } = props;
return (
        <input
            id={id}
            type='checkbox'
            className={styles.defaultCheckbox}
            name='weekly'
            {...rest}
        />
    );
}

export default Checkbox
