'use client'
import { DragDropContext } from "@hello-pangea/dnd";
import { useTaskDnd } from "../../hooks/useTaskDnd";
import { useTasks } from "../../hooks/useTasks";
import styles from './ListView.module.css';
import { COLUMNS } from "../../columns.data";
import { ListRowParent } from "../list-row-parent/ListRowParent";
export function ListView() {

  const {items, setItems} = useTasks()

  const {onDragEnd} = useTaskDnd()

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className={styles.table}>
        <div  className={styles.header}>
          <div className={styles.label}>Task name</div>
          <div className={styles.label}>Due date</div>
          <div className={styles.label}>Priority</div>
          <div></div>
        </div>

        <div className={styles.body}>
          {COLUMNS.map(column => (
            <ListRowParent
              items={items}
              label={column.label}
              value={column.value}
              setItems={setItems}
              key={column.value}
            />
          ))}
        </div>
      </div>
    </DragDropContext>
  );
}

