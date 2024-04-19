import { NO_INDEX_PAGE } from "@/constants/seo.constants";
import { Metadata } from "next";
import { TasksView } from "./TasksView";
import  Loader  from "@/components/ui/loader/Loader";
import { useProfile } from "@/hooks/useProfile";
import { Heading } from "@/components/ui/heading/Heading";



export const metadata: Metadata = {
	title: 'Tasks',
	...NO_INDEX_PAGE
}

export default function TasksPage() {
	return (
		<div>
			<Heading title='Tasks' />
			<TasksView />
		</div>
	)
}
