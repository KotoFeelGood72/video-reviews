<template>
	<header class="header">
		<div class="container">
				<div class="header_main">
					<div class="header_col--left">
						<div class="header_logo">
							<router-link to="/">
								<img :src="require('@/assets/img/logo.svg')" alt="">
							</router-link>
						</div>
						<nav class="header_nav">	
							<ul>
								<li v-for="(item, i ) in HeaderNav.nav" :key="i + 'nav'">
									<router-link :to="`/${item.link}`">{{item.name}}</router-link>
								</li>
							</ul>
						</nav>
					</div>
					<nav class="user-nav">
						<ul>
							<li v-for="(item, i ) in User.nav" :key="i + 'nav'">
								<router-link :to="`/${item.link}`">{{item.name}}</router-link>
							</li>
						</ul>
					</nav>
				</div>
		</div>
	</header>
</template>

<script>
	import HeaderNav from '@/components/shared/Header/HeaderNav'
	import User from './User';
    export default {
        data() {
			return {
				HeaderNav,
				User,
			}
		},
    }
</script>

<style lang="scss" scoped>

.header_col--left {
	display: flex;
	align-items: center;
	justify-content: flex-start;
}
	.header_main {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 10px 0;
	}

	.header {
		background-color: rgba(255, 255, 255, 0.06);
		ul {
			padding: 0;
			margin: 0;
			list-style: none;
		}
		a {
			color: white;
			font-size: 18px;
			text-decoration: none;
		}
	}

	.header_logo {
		margin-right: 60px;
		max-width: 50px;
		img {
			width: 100%;
		}
	}

	.user-nav {
		ul {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			li {
				a {
					background-color: rgba(255, 255, 255, 0.13);
					border-radius: 8px;
					display: block;
					padding: 7px 20px;
					font-size: 16px;

					&.router-link-exact-active {
						background-color: #6834F4;
					}
				}
				&:not(:last-child) {
					margin-right: 20px;
				}
			}
		}

	}

	.header_nav {
		ul {
			display: flex;
			align-items: center;
			justify-content: flex-start;
			li {
				a {

					border-radius: 8px;
					display: block;
					font-size: 18px;
					opacity: .7;
					position: relative;
					padding-bottom: 1px;
					&:before {
						position: absolute;
						bottom: 0;
						left: 0;
						width: 0%;
						border-bottom: 2px solid #fff;
						content: '';
						transition: all .3s ease;
					}
					&.router-link-exact-active, &:hover {
						opacity: 1;
						&:before {
							width: 100%;
						}
					}
				}
				&:not(:last-child) {
					margin-right: 30px;
				}
			}
		}
	}
</style>