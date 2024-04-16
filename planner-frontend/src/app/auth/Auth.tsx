'use client'

import { useMutation } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import { IAuthForm } from '@/types/auth.types'

import { DASHBOARD_PAGES } from '../../config/pages-url.config'

import styles from './Auth.module.css'
import { authService } from '@/services/auth.service'
import { Heading } from '@/components/ui/heading/Heading'
import { Field } from '@/components/ui/field/Field'
import { Button } from '@/components/ui/buttons/Button'

export function Auth() {
	const { register, handleSubmit, reset } = useForm<IAuthForm>({
		mode: 'onChange'
	})

	const [isLoginForm, setIsLoginForm] = useState(false)

	const { push } = useRouter()

	const { mutate } = useMutation({
		mutationKey: ['auth'],
		mutationFn: (data: IAuthForm) =>
			authService.main(isLoginForm ? 'login' : 'register', data),
		onSuccess() {
			toast.success('Successfully login!')
			reset()
			push(DASHBOARD_PAGES.HOME)
		}
	})

	const onSubmit: SubmitHandler<IAuthForm> = data => {
		mutate(data)
	}

	return (
		<div className={styles.wrapper}>
			<form
				className={styles.form}
				onSubmit={handleSubmit(onSubmit)}
			>
				<Heading title='Auth'/>
				<Field 
					placeholder='Enter email'
					type='email' 
					id='email'
					label='Email'
					{...register('email', {
						required: 'Email is required',
					})}
				/>
				<Field 
					placeholder='Enter password'
					type='password' 
					id='password'
					label='Password'
					{...register('password', {
						required: 'Password is required',
					})}
				/>
				<div className={styles.formBtns}>
					<Button onClick={() => setIsLoginForm(true)}>Login</Button>
					<Button onClick={() => setIsLoginForm(false)}>Register</Button>
				</div>
			</form>
		</div>
	)
}
