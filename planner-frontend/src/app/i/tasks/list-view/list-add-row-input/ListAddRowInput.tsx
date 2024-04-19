import type { Dispatch, SetStateAction } from 'react'
import styles from './ListAddRowInput.module.css'
import type { ITaskResponse } from '@/types/task.types'

interface IListAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListAddRowInput({ setItems, filterDate }: IListAddRowInput) {
	const addRow = () => {
		setItems(prev => {
			if (!prev) return

			return [
				...prev,
				{
					id: '',
					name: '',
					isCompleted: false,
					createdAt: filterDate
				}
			]
		})
	}

    return (
     <div className={styles.addRow}>
        <button
            onClick={addRow}
            className={styles.addRowButton}
        >
            Add task...
        </button>
     </div>   
    )
} 