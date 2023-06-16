<template>
  <div id="app" class=" bg-gray-800 min-h-[100vh]">
		<component :is="layout">
			<router-view></router-view>
		</component>
  </div>
</template>

<script>

export default {
  name: 'App',
	computed: {
		layout() {
				const layoutName = this.$route.meta.layout || 'default-layout';
				return () => import(`@/layouts/${layoutName}`)
		}
	}

}
</script>

<style lang="scss">



</style>
