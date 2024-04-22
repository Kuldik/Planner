import { useOutside } from "@/hooks/useOutside"
import styles from "./SingleSelect.module.css"
import { Badge } from "../../badge/Badge"
import { X } from "lucide-react"
export interface IOption {
	label: string
	value: string
}

interface ISingleSelect {
	data: IOption[]
	onChange: (value: string) => void
	value: string
	isColorSelect?: boolean
}

export function SingleSelect({
	data,
	onChange,
	value,
	isColorSelect
}: ISingleSelect) {
	const { isShow, setIsShow, ref } = useOutside(false)
	const getValue = () => data.find(item => item.value === value)?.value


    return (
        <div className={styles.wrapper} ref={ref}>
            <button
                onClick={e => {
					e.preventDefault()
					setIsShow(!isShow)
				}}
                className={styles.btnSelect}
            >
                {getValue() ? (
					<Badge
						variant={value}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Click for select</Badge>
				)}
            </button>
            {  (
				<button
					className={styles.btnX}
					onClick={e => {
						e.preventDefault()
						onChange('')
					}}
				>
					<X size={14} />
				</button>
			)}
            {isShow && (
                <div 
                    className={styles.dropdown}
                >   
                    {data.map(item => (
						<button
							key={item.value}
							onClick={e => {
								e.preventDefault()
								onChange(item.value)
								setIsShow(false)
							}}
                            className={styles.show}
                        >
							<Badge variant={item.value}>{item.label}</Badge>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}
