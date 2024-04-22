'use client'
import styles from './SwitcherView.module.css'
import type { TypeView } from '../TasksView'
import { Kanban, ListTodo } from 'lucide-react'
interface ISwithcherView {
    type: TypeView
    setType: (value: TypeView) => void
}

export function SwitcherView({ setType, type }: ISwithcherView) {
    return (
        <div className={styles.wrapper}>
            <button 
                onClick={() => setType('list')}
                className={styles.btn}
            >
                <ListTodo/>
                List
            </button>
            <button
                onClick={() => setType('kanban')}
                className={styles.btn}
            >
                <Kanban/>
                Board
            </button>
        </div>
    )
}