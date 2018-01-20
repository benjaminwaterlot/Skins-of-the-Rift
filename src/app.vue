<!-- ============== TEMPLATE ============== -->
<template>

  <div id="app">
		<appHeader
		v-on:newSearch="launchSearch($event)"
		:skindb="skindb"
		/>
		<transition
		name="fade-in"
		appear mode="out-in">
			<router-view>
			</router-view>
		</transition>
		<pAbout
		class="about"
		:skindb="skindb"/>
  </div>

</template>

<!-- ============== COMPONENT ============== -->
<script>
import skindb from './skindb.json'
export default {
  name: 'app',
  data() {
    return {
			skindb: skindb,
			searched: false
    }
  },
	methods: {
		launchSearch: function(searchInput){
			this.searched = searchInput
		}
	}
}

</script>

<!-- ============== STYLE ============== -->
<style>

	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	abbr, acronym, address, big, cite, code,
	del, dfn, img, ins, kbd, q, s, samp,
	small, strike, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		vertical-align: baseline;
		color: white;
	}

	* {
		box-sizing: border-box;
		text-decoration: none;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
	}

	body {
		background: url('assets/images/app-bg.jpg') no-repeat top left / cover,
			linear-gradient(to right, rgb(11,21,22), rgb(23,39,38));
		height: 2000px;
		padding: 15px;
		margin: 0px;
	}

	img {
		font-size: 5px;
		color: #FFF2;
	}

	h1, h2 {
		color: white;
		margin-top: 0px;
	}

	#app {
		max-width: 1200px;
		margin: auto;
	}

	.fade-in-enter-active, .fade-in-leave-active {
		transition: all .3s ease;
	}

	.fade-in-enter, .fade-in-leave-to {
		opacity: 0;
		transform: translateY(-5px);
	}

	.tippy-tooltip.light-theme .tippy-content {
		color: black;
	}

	.about {
		margin: 200px 0px 100px 0px;
	}


</style>
