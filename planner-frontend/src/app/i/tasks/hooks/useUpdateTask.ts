import { useQueryClient } from '@tanstack/react-query';
import {TypeTaskFormState} from "@/types/task.types";
import {useMutation} from "@tanstack/react-query";
import { taskService } from '@/services/task.service';
export function useUpdateTask(key?: string) {
    const queryClient = useQueryClient()

    const {mutate: updateTask} = useMutation({
        mutationKey:['updated task', key],
        mutationFn: ({id, data}: {id: string, data: TypeTaskFormState}) =>
            taskService.updateTask(id, data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ['tasks']
            })
        }
    })

    return {updateTask}
}