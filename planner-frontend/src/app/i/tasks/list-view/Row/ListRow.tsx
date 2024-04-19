import type { ITaskResponse, TypeTaskFormState } from "@/types/task.types";
import type { Dispatch, SetStateAction } from "react";
import { useTaskDebounce } from "../../hooks/useTaskDebouce";
import { Controller, useForm } from "react-hook-form";
import styles from './ListRow.module.css'
import { GripVertical, Trash } from "lucide-react";
import { DatePicker } from "@/components/ui/task-edit/date-picker/DatePicker";
import { SingleSelect } from "@/components/ui/task-edit/single-select/SingleSelect";
import { Loader } from "lucide-react";
import { useDeleteTask } from "../../hooks/useDeleteTask";
import { TransparentField } from "@/components/ui/field/TransparentField/TransparentField";
import Checkboxes from "@/components/ui/checkbox/checkbox";
interface IListRow {
  item: ITaskResponse
  setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
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
      className={styles.row}
    >
        <div className={styles.nameInputs}>
          <span className={styles.gripContainer}>
            <button aria-activedescendant="todo-item" className={styles.btn}>
              <GripVertical className={styles.grip}/>
            </button>

            <span className={styles.checkboxContainer}>
              <Controller 
                control={control} 
                name="isCompleted" 
                render={({ field: {value, onChange} }) => (
                  <Checkboxes checked={value} onChange={onChange}/>
                )}
              />
            </span>
            

            <TransparentField {...register('name')} />
          </span>
        </div>

        <div className={styles.dateBtn}>
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
        <div className={styles.deleteBtn}>
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