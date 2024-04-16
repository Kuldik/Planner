import styles from './Heading.module.css'

interface IHeading {
    title: string
}

export function Heading({ title }: IHeading) {
    return (
        <div>
            <h1 className={styles.headingTitle}>{title}</h1>
            <div className={styles.headingDivider}/>
        </div>
    )
}