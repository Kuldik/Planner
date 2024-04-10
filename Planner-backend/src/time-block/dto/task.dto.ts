import { IsBoolean, IsString, IsOptional, IsEnum } from 'class-validator'
import { Transform } from 'class-transformer'
import { Priority } from 'prisma/generated/client'

export class TaskDto {
	@IsString()
	@IsOptional()
	name: string

	@IsBoolean()
	@IsOptional()
	IsCompleted: boolean

	@IsString()
	@IsOptional()
	createdAt?: string

	@IsEnum(Priority)
	@IsOptional()
	@Transform(({ value }) => ('' + value).toUpperCase())
	priority?: Priority
}
