import { DateFormatter } from "react-day-picker"
import styles from './DatePickerCaption.module.css'
import dayjs from "dayjs"

const seasonEmoji: Record<string, string> = {
	winter: '⛄️',
	spring: '🌸',
	summer: '🌻',
	autumn: '🍂'
}

const getSeason = (month: Date): keyof typeof seasonEmoji => {
    const monthNumber = month.getMonth() + 1

    if (monthNumber > 2 && monthNumber < 6) return 'spring'
    if (monthNumber > 5 && monthNumber < 9) return 'summer'
    if (monthNumber > 8 && monthNumber < 12) return 'autumn'
    else return 'winter'
}

export const formatCaption: DateFormatter = month => {
    const season = getSeason(month)

    return (
        <>
            <span 
                role="img"
                aria-label={season}
                className={styles.span}    
            >
                {seasonEmoji[season]} 
                {/*  Строка {seasonEmoji[season]} использует 
                переменную season в качестве ключа для доступа к 
                соответствующему значению из объекта seasonEmoji. */}
            </span>
            {dayjs(month).format('MMMM')}
        </>
    )
}