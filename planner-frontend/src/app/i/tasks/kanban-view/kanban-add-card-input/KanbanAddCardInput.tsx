import type { Dispatch, SetStateAction } from 'react'
import styles from './KanbanAddCardInput.module.css'
import type { ITaskResponse } from '@/types/task.types'

interface IKanbanAddRowInput {
	filterDate?: string
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanAddCardInput({ setItems, filterDate }: IKanbanAddRowInput) {
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