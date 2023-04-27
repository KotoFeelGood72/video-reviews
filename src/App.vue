<template>
  <div id="app">
	<nav class="float-navigation">
		<ul>
			<li v-for="(item, i ) in nav" :key="i + 'nav'">
				<router-link :to="`/${item.link}`">{{item.name}}</router-link>
			</li>
		</ul>
	</nav>
    <router-view></router-view>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
  },
  data() {
	return {
		nav: [
			{
				name: 'Movie',
				link: 'embed',
			},
			{
				name: 'Comming Soon',
				link: 'soon',
			},
		]
	}
  }
}
</script>

<style lang="scss">
html, body, div, span, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
abbr, address, cite, code,
del, dfn, em, img, ins, kbd, q, samp,
small, strong, var,
b, i,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
article, aside, canvas, details, figcaption, figure,
footer, header, hgroup, menu, nav, section, summary,
time, mark, audio, video, button {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	vertical-align: baseline;
	background: transparent;
	box-sizing: border-box;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

	&:before,
	&:after {
		box-sizing: border-box;
	}
}

sub,
sup {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	background: transparent;
	box-sizing: border-box;

	&:before,
	&:after {
		box-sizing: border-box;
	}
}

a {
	&:before,
	&:after {
		box-sizing: border-box;
	}
}

table, caption, tbody, tfoot, thead, tr, th, td {
	margin: 0;
	padding: 0;
	border: 0;
	outline: 0;
	font-size: 100%;
	background: transparent;
}

article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}

ol, ul, li {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote {
	&:before, &:after {
		content: none;
	}
}

q {
	&:before, &:after {
		content: none;
	}
}

:focus {
	outline: 0;
}

input[type="text"], textarea {
	-webkit-appearance: none;

	&::-ms-clear {
		display: none;
	}
}

input,
textarea {
	border-radius: 0;
	box-sizing: border-box;



	&:focus {
		&::-webkit-input-placeholder {
			color: transparent;
		}

		&::-moz-placeholder {
			color: transparent;
		}
		&:-ms-input-placeholder {
			color: transparent;
		}
	}
}

textarea {
	resize: none;
}

ins {
	text-decoration: none;
}

del {
	text-decoration: line-through;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

* {
	box-sizing: border-box;
	word-wrap: break-word;
}

.float-navigation {
	position: fixed;
	top: 5%;
	left: 50%;
	transform: translateX(-50%);
	z-index: 99;
	background-color: #171717f6;
	padding: 20px 30px;
	border-radius: 10px;
	ul {
		display: flex;
		align-items: center;
		justify-content: center;
		margin: -20px -20px 0 0;
		li {
			padding: 20px 20px 0 0;
			a {
				color: #fff;
				text-decoration: none;
				// font-size: 18px;
				background-color: #ffffff2f;
				font-family: Arial, Helvetica, sans-serif;
				padding: 10px 20px;
				border-radius: 5px;
				display: block;

				&.router-link-exact-active {
					background-color: rgba(57, 157, 190, 0.267);
					pointer-events: none;
				}
			}
		}
	}
}

</style>
