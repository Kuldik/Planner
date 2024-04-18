import cn from 'clsx'
import dayjs from 'dayjs'
import LocalizedFormat from 'dayjs/plugin/localizedFormat'
import { X } from 'lucide-react'
import { useState } from 'react'
import { DayPicker, type SelectSingleEventHandler } from 'react-day-picker'
import 'react-day-picker/dist/style.css'

import { useOutside } from '@/hooks/useOutside'

import './DatePicker.scss'
import { formatCaption } from '../date-picker-caption/DatePickerCaption'
import styles from './DatePicker.module.css'

dayjs.extend(LocalizedFormat)

interface IDatePicker {
	onChange: (value: string) => void
	value: string
	position?: 'left' | 'right'
}

export function DatePicker({
    onChange,
    value,
    position = 'right'
}: IDatePicker) {
    const [selected, setSelected] = useState<Date>()
    const {isShow, setIsShow, ref} = useOutside(false)

    const handleDaySelect: SelectSingleEventHandler = date => {
		const ISOdate = date?.toISOString()

		setSelected(date)
		if (ISOdate) {
			onChange(ISOdate)
			setIsShow(false)
		} else {
			onChange('')
		}
	}

    return (
        <div className={styles.wrapper}>
            <button onClick={() => setIsShow}>
                {value ? dayjs(value).format('LL') : 'Choose date'}
            </button>
            {value && (
                <button
                    className={styles.btn}
                    onClick={() => onChange('')}
                >
                    <X size={18} />
                </button>
            )}
            {isShow && (
                <div className={styles.dayPicker}>
                    <DayPicker
                        fromYear={2024}
                        toYear={2077}
                        initialFocus={isShow}
                        mode='single'
                        defaultMonth={selected}
                        selected={selected}
                        onSelect={handleDaySelect}
                        weekStartsOn={1}
                        formatters={{formatCaption}}
                    />
                </div>
            )}
        </div>
    )
}