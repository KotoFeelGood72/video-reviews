<template>
  <div id="app">
	<!-- <nav class="float-navigation">
		<ul>
			<li v-for="(item, i ) in nav" :key="i + 'nav'">
				<router-link :to="`/${item.link}`">{{item.name}}</router-link>
			</li>
		</ul>
	</nav> -->
	<default-layout>
       <router-view></router-view>
	</default-layout>
  </div>
</template>

<script>

import defaultLayout from '@/layouts/default-layout.vue';
export default {
  name: 'App',
  components: {
		defaultLayout,
  },

}
</script>

<style lang="scss">



</style>
