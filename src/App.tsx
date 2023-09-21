import { Component, Slot } from 'vue'
export default defineComponent({
	setup() {
		const route = useRoute()
		const slot = {
			default: (scope: { Component: Component }) =>
				route.meta.keepAlive ? <KeepAlive>{scope.Component}</KeepAlive> : <>{scope.Component}</>
		}

		return () => (
			<div>
				<router-view>{(scope: any) => slot.default(scope)}</router-view>
			</div>
		)
	}
})
