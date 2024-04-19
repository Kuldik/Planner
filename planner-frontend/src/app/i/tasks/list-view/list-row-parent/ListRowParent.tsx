import type { ITaskResponse } from "@/types/task.types";
import { Draggable, Droppable } from "@hello-pangea/dnd";
import { Dispatch, SetStateAction } from "react";
import styles from './ListRowParent.module.css'
import { ListRow } from "../Row/ListRow";
import { FILTERS } from "../../columns.data";
import { filterTasks } from "../../filterTask";
import { ListAddRowInput } from "../list-add-row-input/ListAddRowInput";

interface IListRowParent {
    value: string
    label: string
    items: ITaskResponse[] | undefined
    setItems: Dispatch<SetStateAction<ITaskResponse[] | undefined>>
}

export function ListRowParent({
    value,
    label,
    items,
    setItems
}: IListRowParent) {
  return (
    <Droppable droppableId={value}>
        {provided => (
            <div 
                ref={provided.innerRef}
                {...provided.droppableProps}
            >
                <div className={styles.heading}>
                    <div className={styles.label}>{label}</div>
                </div>
                
                {filterTasks(items, value)?.map((item, index) => (
                    <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                    >
                        {provided => (
                            <div
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className={styles.filter}
                            >
                                <ListRow
                                    key={item.id}
                                    item={item}
                                    setItems={setItems}
                                />
                            </div>
                        )}
                    </Draggable>
                ))}

                {provided.placeholder}

                {value !== 'completed' && !items?.some(item => !item.id) && (
                    <ListAddRowInput
                        setItems={setItems}
                        filterDate={FILTERS[value] ? FILTERS[value].format() : undefined}
                    />
                )}
            </div>
        )}
    </Droppable>
  );
}