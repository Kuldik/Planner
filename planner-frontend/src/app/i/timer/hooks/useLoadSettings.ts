import { useProfile } from "@/hooks/useProfile";

export function useLoadSettings() {
	const { data } = useProfile()

	const workInterval = data?.user.workInterval ?? 120
	const breakInterval = data?.user.workInterval ?? 30
    // ?? - оператор нулевого слияния, возвращает значение правого операнда, елси
    // ?? - значение левого опреранда содержит null или undefined. В противном случае возвращает значение левого операнда


	return { workInterval, breakInterval }
}