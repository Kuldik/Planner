'use client'
import { useIsMutating, useIsFetching } from "@tanstack/react-query";
import Loader from '@/components/ui/loader/Loader'
import styles from './GlobalLoader.module.css'


export function GlobalLoader() {

    const isMutating = useIsMutating() 
    const isFetching = useIsFetching()

  return isFetching || isMutating ? (
    <div className={styles.loader}>
        <Loader />
    </div>
    
  ) : null
}