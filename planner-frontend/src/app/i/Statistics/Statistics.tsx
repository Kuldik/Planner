'use client'

import { useProfile } from "@/hooks/useProfile"
import { Loader } from "lucide-react"

import styles from './Statistics.module.css'

export function Statistics() {

    const {data, isLoading} = useProfile()

  return isLoading ? (
        <div className={styles.loader}><Loader/></div>
    ) : (
        <div className={styles.wrapper}>
            {data?.statistics.length ? data.statistics.map(statistic => (
                <div className={styles.main} key={statistic.label}>
                    <div className={styles.labelSm}>{statistic.label}</div>
                    <div className={styles.labelLg}>{statistic.value}</div>
                </div>
            )) : <div>Statistics not loaded</div>}
        </div>
    )
}
