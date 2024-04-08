import { Controller } from '@nestjs/common'
import { TaskService } from './task.service'

@Controller('task/profile')
export class TaskController {
	constructor(private readonly TaskService: TaskService) {}
}
