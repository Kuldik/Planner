import { IBase } from './root.types'

export interface IPomodoroRoundResponse extends IBase {
	isCompleted: boolean
	totalSeconds: number
}

export interface IPomodoroSessionResponse extends IBase {
	isCompleted: boolean
	rounds?: IPomodoroRoundResponse[]
}

export type TypePomodoroState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>

export type TypePomodoroRoundState = Partial<
	Omit<IPomodoroRoundResponse, 'id' | 'createdAt' | 'updatedAt'>
>
