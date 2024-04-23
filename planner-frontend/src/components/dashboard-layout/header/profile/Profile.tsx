'use client'

import { useProfile } from "@/hooks/useProfile"
import styles from './Profile.module.css'
import Loader from '@/components/ui/loader/Loader'
import Link from 'next/link'

export function Profile() {
    const {data, isLoading} = useProfile() 
    return (
      <div className={styles.wrapper}>
        {isLoading ? (
            <div className={styles.loader}>
                <Loader/>
            </div>
        ) : (
                <div className={styles.container}>
                    <div className={styles.info}>
                        <p className={styles.name}>{data?.user.name}</p>
                        <p className={styles.email}>{data?.user.email}</p>
                    </div>

                    <Link href="/i">
                        <div className={styles.avatar}>
                            {data?.user.name?.charAt(0) || 'A'}
                        </div>
                    </Link>

                </div>
        ) }
      </div>
    )
}