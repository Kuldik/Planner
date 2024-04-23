'use client'

import Loader from "@/components/ui/loader/Loader";
import { useCreateSession } from "../hooks/useCreateSession";
import { useDeleteSession } from "../hooks/useDeleteSession";
import { useTimer } from "../hooks/useTimer";
import { useTimerActions } from "../hooks/useTimerActions";
import { useTodaySession } from "../hooks/useTodaySession";
import styles from "./Pomodoro.module.css";
import { PomodoroRounds } from "../rounds/PomodoroRounds";
import { Pause, Play, RefreshCcw } from "lucide-react";
import { Button } from '@/components/ui/buttons/Button'
import { formatTime } from '../formatTime'
export function Pomodoro() {
    
	const timerState = useTimer()
	const { isLoading, sessionsResponse, workInterval } =
		useTodaySession(timerState)

	const rounds = sessionsResponse?.data.rounds
	const actions = useTimerActions({ ...timerState, rounds })

	const { isPending, mutate } = useCreateSession()
	const { deleteSession, isDeletePending } = useDeleteSession(() =>
		timerState.setSecondsLeft(workInterval * 60)
	)

  return (
    <div className={styles.wrapper}>
        {!isLoading && (
			<div className={styles.formatText}>
				{formatTime(timerState.secondsLeft)}
			</div>
		)}
		{isLoading ? (
			<Loader/>
		): sessionsResponse?.data ? (
			<>
				<PomodoroRounds
					rounds={rounds}
					nextRoundHandler={actions.nextRoundHandler}
					prevRoundHandler={actions.prevRoundHandler}
					activeRound={timerState.activeRound}
				/>
				<button
					className={styles.btnPlay}
					onClick={
						timerState.isRunning ? actions.pauseHandler : actions.playHandler
					}	
					disabled={actions.isUpdateRoundPending}
				>
					{timerState.isRunning ? <Pause size={30} /> : <Play size={30} />}
				</button>
				<button
						onClick={() => {
							timerState.setIsRunning(false)
							deleteSession(sessionsResponse.data.id)
						}}
						className={styles.btnRefresh}
						disabled={isDeletePending}
					>
					<RefreshCcw size={24} />
				</button>
			</>
		) : (
			<Button
					onClick={() => mutate()}
					className='mt-1'
					disabled={isPending}
				>
					Create session
				</Button>
		)}
    </div>
  );
}