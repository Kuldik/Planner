import {
	IsOptional,
	IsNumber,
	Min,
	Max,
	IsEmail,
	MinLength,
	IsString,
} from 'class-validator'

export class PomodoroSettingsDto {
	@IsOptional()
	@IsNumber()
	@Min(1)
	workInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	BreakInterval?: number

	@IsOptional()
	@IsNumber()
	@Min(1)
	@Max(10)
	intervalsCount?: number
}

export class UserDto extends PomodoroSettingsDto {
	@IsEmail()
	email: string

	@MinLength(6, {
		message: 'Password should be at least 6 characters',
	})
	@IsString()
	password: string
}
