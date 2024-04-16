import styles from './Loader.module.css'

import { Loader as LoaderIcon } from 'lucide-react'

const Loader = () => {
    return (
        <div className={styles.wrapper}>
            <LoaderIcon className={styles.loader}/>
        </div>
    )
}

export default Loader