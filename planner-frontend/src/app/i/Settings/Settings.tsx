'use client'
import { TypeUserForm } from "@/types/auth.types";
import { SubmitHandler, useForm } from "react-hook-form";
import { useInitialData } from "./hooks/useInitialData";
import { useUpdateSettings } from "./hooks/useUpdateSettings";
import styles from './Settings.module.css'
import { Field } from "@/components/ui/field/Field";
import { Button } from "@/components/ui/buttons/Button";

export function Settings() {

    const { register, handleSubmit, reset } = useForm<TypeUserForm>({
		mode: 'onChange'
	})

	useInitialData(reset)

	const { isPending, mutate } = useUpdateSettings()

	const onSubmit: SubmitHandler<TypeUserForm> = data => {
		const { password, ...rest } = data

		mutate({
			...rest,
			password: password || undefined
		})
	}

  return (
    <div>
        <form 
            className={styles.form}
            onSubmit={handleSubmit(onSubmit)}
        >

            <div className={styles.wrapper}>
                <div>
                    <Field 
                        id="email"
                        label='Email' 
                        placeholder="Enter email"
                        type="email"
                        {...register('email', {
                            required: 'Email is required'
                        })}
                    />

                    <Field
                        id="name"
                        label='Name'
                        placeholder="Enter name"
                        {...register('name', {
                            required: 'Name is required'
                        })}
                    />
                    <Field
                        id="password"
                        label='Password'
                        placeholder="Enter password"
                        type="password"
                        {...register('password', {
                            required: 'Password is required'
                        })}
                    />
                </div>

                <div>
                    <Field
                        id="workInterval"
                        label='Work interval (min.): '
                        placeholder="Enter work interval"
                        isNumber
                        {...register('workInterval', {
                            valueAsNumber: true,
                        })}
                    />
                    <Field
                        id="breakInterval"
                        label='Break interval (min.):'
                        placeholder="Enter break interval"
                        isNumber
                        {...register('breakInterval', {
                            valueAsNumber: true,
                        })}
                    />
                    <Field
                        id="intervalsCount"
                        label='Intervals Count interval (max 10): '
                        placeholder="Enter work interval (max 10):"
                        isNumber
                        {...register('intervalsCount', {
                            valueAsNumber: true,
                        })}
                    />
                </div>
            </div>
            <Button 
                type='submit'
                disabled={isPending}
            >
                Save
            </Button>
        </form>
    </div>
  );
}