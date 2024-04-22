import type { ITaskResponse, TypeTaskFormState } from "@/types/task.types";
import type { Dispatch, SetStateAction } from "react";
import { useTaskDebounce } from "../../hooks/useTaskDebouce";
import { Controller, useForm } from "react-hook-form";
import styles from './KanbanCard.module.css'
import { GripVertical, Trash } from "lucide-react";
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker";
import { SingleSelect } from "@/components/ui/task-edit/single-select/SingleSelect";
import { Loader } from "lucide-react";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { TransparentField } from "@/components/ui/field/TransparentField/TransparentField";
import Checkboxes from "@/components/ui/checkbox/checkbox";


interface IKanbanCard {
	item: ITaskResponse
	setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function KanbanCard({ item, setItems }: IKanbanCard) {
	const { register, control, watch } = useForm<TypeTaskFormState>({
		defaultValues: {
			name: item.name,
			isCompleted: item.isCompleted,
			createdAt: item.createdAt,
			priority: item.priority
		}
	})

	useTaskDebounce({ watch, itemId: item.id })

	const { deleteTask, isDeletePending } = useDeleteTask()

	return (
		<div
			className={`${styles.card} ${item.column === 'completed' ? styles.completed : ''}`}
		>
			<div className={styles.cardHeader}>
				<button aria-describedby='todo-item' className={styles.btn}>
					<GripVertical className={styles.grip} />
				</button>

				<Controller
					control={control}
					name='isCompleted'
					render={({ field: { value, onChange } }) => (
						<Checkboxes
							onChange={onChange}
							checked={value}
						/>
					)}
				/>

				<TransparentField {...register('name')} />
			</div>

			<div className={styles.cardBody}>
				<Controller
					control={control}
					name='createdAt'
					render={({ field: { value, onChange } }) => (
						<DatePicker
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>

				<Controller
					control={control}
					name='priority'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={['high', 'medium', 'low'].map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || ''}
						/>
					)}
				/>
			</div>

			<div className={styles.cardActions}>
				<button
					onClick={() =>
						item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
					}
					className={styles.deleteBtn}
				>
					{isDeletePending ? <Loader size={15} /> : <Trash size={20} />}
				</button>
			</div>
		</div>
	)
}