'use client'

import type { TypeTimeBlockFormState } from "@/types/time-block.types"
import { FormProvider, useForm } from "react-hook-form"
import { TimeBlockingForm } from "../form/TimeBlockingForm"
import { TimeBlockingList } from "../time-blocking-list/TimeBlockingList"
import styles from './TimeBlocking.module.css'

export function TimeBlocking() {

    const methods = useForm<TypeTimeBlockFormState>()

  return (
    <FormProvider {...methods}>
        <div className={styles.wrapper}>
            <TimeBlockingList />
            <TimeBlockingForm />
        </div>
    </FormProvider>
  )
}
