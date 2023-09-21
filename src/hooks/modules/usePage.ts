export const usePage = (params: Partial<IPage> = { pageNum: 1, pageSize: 10 }) => {
	return reactive<IPage>({
		pageNum: 1,
		pageSize: 10,
		...params
	})
}
