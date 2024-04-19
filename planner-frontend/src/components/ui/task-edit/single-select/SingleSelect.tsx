import { useOutside } from "@/hooks/useOutside"
import styles from "./SingleSelect.module.sass"
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
    const {isShow, setIsShow, ref} = useOutside(false)
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
						className={styles.badge}
						style={isColorSelect ? { backgroundColor: value } : {}}
					>
						{getValue()}
					</Badge>
				) : (
					<Badge>Click for select</Badge>
				)}
            </button>
            {isShow && (
                <div 
                    className={styles.dropdown}
                    style={{top: 'calc(100% + 5px)'}}
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
                            style={
                                isColorSelect
                                    ? { backgroundColor: item.value }
                                    : {}
                            }
                        >
                            <Badge variant={item.value}>{item.label}</Badge>
                        </button>
                    ))}
                </div>
            )}
        </div>
    )
}