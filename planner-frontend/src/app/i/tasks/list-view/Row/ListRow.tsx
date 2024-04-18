import type { ITaskResponse, TypeTaskFormState } from "@/types/task.types";
import type { Dispatch, SetStateAction } from "react";
import { useTaskDebounce } from "../../hooks/useTaskDebouce";
import { Controller, useForm } from "react-hook-form";
import styles from './ListRow.module.scss'
import { GripVertical, Trash } from "lucide-react";
import Checkbox from "@/components/ui/checkbox/checkbox";
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker";
import { SingleSelect } from "@/components/ui/task-edit/single-select/SingleSelect";
import { Loader } from "lucide-react";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import cn from 'clsx'
import { TransparentField } from "@/components/ui/field/TransparentField/TransparentField";


interface IListRow {
  item: ITaskResponse
  setItems: Dispatch<SetStateAction<ITaskResponse[]>>
}
export function ListRow({item, setItems}: IListRow) {
  const {register, control, watch} = useForm<TypeTaskFormState>({
    defaultValues: {
      name: item.name,
      isCompleted: item.isCompleted,
      priority: item.priority,
      createdAt: item.createdAt,
    }
  })

  useTaskDebounce({watch, itemId: item.id})

  const {deleteTask, isDeletePending} = useDeleteTask()
  return (
    <div 
      className={cn(
        styles.row,
        watch('isCompleted') ? styles.completed : '',
        'animation-opacity'
      )}
        >
        <div>
          <span className={styles.gripContainer}>
            <button aria-activedescendant="todo-item">
              <GripVertical className={styles.grip}/>
            </button>

            <Controller 
              control={control} 
              name="isCompleted" 
              render={({ field: {value, onChange} }) => (
                <Checkbox checked={value} onChange={onChange}/>
              )}
            />

            <TransparentField {...register('name')} />
          </span>
        </div>

        <div>
          <Controller
            control={control}
            name="createdAt"
            render={({ field: {value, onChange} }) => (
              <DatePicker 
                onChange={onChange}
                value={value || ''}
              />
            )}
          />
        </div>
        <div className={styles.actions}>
          <Controller
              control={control}
              name="createdAt"
              render={({ field: {value, onChange} }) => (
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
        <div>
          <button 
            onClick={() =>
              item.id ? deleteTask(item.id) : setItems(prev => prev?.slice(0, -1))
            }
            className={styles.delete}
          >
            {isDeletePending ? <Loader size={15}/> : <Trash size={15}/> }
          </button>
        </div>
    </div>
  );
}