// ============== TEMPLATE ==============
<template>
	<div id="pHome">

		<section
		class="welcome">
			<div
			class="welcome__container">
				<router-link :to="{ path: `/search/${_.sample(skindb).champion}` }">
					<img
					class="welcome__logo"
					title="Pick a random champion"
					v-tippy="{ arrow: true, theme: 'light', top: 50 }"
					src="./assets/images/logo-base.svg"
					alt="website logo">
				</router-link>
				<h1
				class="welcome__title">
				Welcome, Summoner
				</h1>
			</div>
			<!-- <pHomeFeatured
			class="featured"
			:championdb="championdb"
			:skindb="skindb"/> -->
		</section>

		<section
		class="latest">
			<pHomeLatest
			class="latest__block"
			:skindb="skindb"/>
			<!-- <pHomeLatest
			class="latest__block"
			:type="'futureSkins'"
			:skindb="skindb"/> -->
		</section>
		<!-- <pAbout
		class="about"
		:skindb="skindb"/> -->

	</div>
</template>

// ============== COMPONENT ==============
<script>
export default {
  name: 'pHome',
  data() {
    return {
    }
  },

	props:[
		'skindb',
		'championdb'
	],

	computed: {
	},

	methods: {

	},
	created(){
		console.warn("HOME WAS CREATED");
	}
}

</script>

// ============== STYLE ==============
<style scoped>

	.welcome {
		margin: 50px 0px;
		align-items: start;
	}

	.welcome__container {
		text-align: center;
		margin: auto;
	}

	.welcome__logo {
		height: 200px;
		margin-bottom: 20px;
		filter: drop-shadow(1px 1px 40px hsla(0, 0%, 0%, 0.2));
		transition: all .3s ease-out;
	}

	.welcome__logo:hover {
		filter: drop-shadow(1px 1px 40px hsla(0, 0%, 0%, 0.6)) brightness(110%);
	}

	.welcome__title {
		font-size: 4.5em;
		text-shadow: 4px 4px 0px hsla(173, 29%, 23%, 0.6);
		margin-bottom: 20px;
	}

	@media (max-width: 800px) {
		.welcome__title {
			font-size: 3em;
		}
	}

	.latest {
		display: grid;
		grid-template-columns: auto;
		grid-gap: 15px;
	}

	@media (max-width: 800px) {
		.latest {
			grid-template-columns: auto;
		}
	}


</style>
