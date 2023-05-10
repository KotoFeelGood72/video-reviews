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

// .float-navigation {
// 	position: fixed;
// 	top: 5%;
// 	left: 5%;
// 	z-index: 99;
// 	background-color: #171717f6;
// 	padding: 20px 30px;
// 	border-radius: 10px;
// 	ul {
// 		display: flex;
// 		align-items: center;
// 		justify-content: center;
// 		margin: -20px -20px 0 0;
// 		li {
// 			padding: 20px 20px 0 0;
// 			a {
// 				color: #fff;
// 				text-decoration: none;
// 				// font-size: 18px;
// 				background-color: #ffffff2f;
// 				font-family: Arial, Helvetica, sans-serif;
// 				padding: 10px 20px;
// 				border-radius: 5px;
// 				display: block;

// 				&.router-link-exact-active {
// 					background-color: rgba(57, 157, 190, 0.267);
// 					pointer-events: none;
// 				}
// 			}
// 		}
// 	}
// }

</style>
