export const getLocalStorage = (name: string) => {
	if (typeof localStorage !== undefined) {
		const storage = localStorage.getItem(name)
		return storage ? JSON.parse(storage) : null
	}
	return null
}
