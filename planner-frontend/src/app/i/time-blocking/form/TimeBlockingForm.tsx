import type { TypeTimeBlockFormState } from "@/types/time-block.types";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { useUpdateTimeBlock } from "../form-hooks/useUpdateTimeBlock";
import { useCreateTimeBlock } from "../form-hooks/useCreateTimeBlock";
import { COLORS } from "../form-hooks/colors.data";
import styles from './TimeBlockingForm.module.css'
import { Field } from "@/components/ui/field/Field";
import { SingleSelect } from "@/components/ui/task-edit/single-select/SingleSelect";
import { Button } from "@/components/ui/buttons/Button";

export function TimeBlockingForm() {
    const { register, control, watch, reset, handleSubmit, getValues } =
		useFormContext<TypeTimeBlockFormState>()

	const existsId = watch('id')

	const { updateTimeBlock } = useUpdateTimeBlock(existsId)
	const { createTimeBlock, isPending } = useCreateTimeBlock()

	const onSubmit: SubmitHandler<TypeTimeBlockFormState> = data => {
		const { color, id, ...rest } = data
		const dto = { ...rest, color: color || undefined }

		if (id) {
			updateTimeBlock({
				id,
				data: dto
			})
		} else {
			createTimeBlock(dto)
		}

		reset({
			color: COLORS[COLORS.length - 1],
			duration: 0,
			name: '',
			id: undefined,
			order: 1
		})
	}

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className={styles.form}
        >
            <div className={styles.formField}>
                <Field
                    {...register('name', {
                        required: true
                    })}
                    id="name"
                    label="Enter name:"
                    placeholder="Enter name:"
                />

                <Field
                    {...register('duration', {
                        required: true,
                        valueAsNumber: true
                    })}
                    id="dutarion"
                    label="Enter dutarion (min.):"
                    placeholder="Enter dutarion (min.):"
                    isNumber
                />
            </div>

            <div className={styles.colorField}>
				<span className={styles.colorPicker}>Color:</span>
				<Controller
					control={control}
					name='color'
					render={({ field: { value, onChange } }) => (
						<SingleSelect
							data={COLORS.map(item => ({
								value: item,
								label: item
							}))}
							onChange={onChange}
							value={value || COLORS[COLORS.length - 1]}
							isColorSelect
						/>
					)}
				/>
			</div>

            <Button
                type="submit"
                disabled={isPending}
                className={styles.btn}
            >
                {existsId ? 'Update' : 'Create'}
            </Button>
            
        </form>
    )
}