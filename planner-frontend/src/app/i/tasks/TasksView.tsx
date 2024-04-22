'use client'
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {ListView} from "./list-view/View/ListView";
import Loader from "@/components/ui/loader/Loader";
import { SwitcherView } from "./switcher-view/SwitcherView";
import { KanbanView } from "./kanban-view/view/KanbanView";

export type TypeView = 'list' | 'kanban'

export function TasksView() {
	const [type, setType, isLoading] = useLocalStorage<TypeView>({
		key: 'view-type',
		defaultValue: 'list'
	})

	if (isLoading) return <Loader />

	return (
		<div>
			<SwitcherView
				setType={setType}
				type={type}
			/>
			{type === 'list' ? <ListView /> : <KanbanView />}
		</div>
	)
}
