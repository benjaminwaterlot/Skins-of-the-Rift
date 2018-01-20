<!-- ============== TEMPLATE ============== -->
<template>
	<nav class="appHeader">
		<router-link
			:key="$route.params.skinident"
			:to="{name:'homepage'}">
			<img class="logo" src="./assets/images/logo.svg">
		</router-link>
		<div class="searchbox">
			<input
			placeholder="search..."
			v-on:focus="inp.focus = true; inp.value=''"
			v-on:blur="inp.focus = false"
			v-model="inp.value"
			@keyup.enter="launchSearch(inp.value); inp.value=''" />
			<div id="whiteline"
			v-bind:class="{focused: inp.focus}" />
		</div>
		<router-link :to="{ path: `/search/${_.sample(skindb).champion}` }">
			<img src="./assets/images/shuffle.svg" class="shuffle" alt="random skin">
		</router-link>
		</div>
		<div class="blank">

		</div>
		<div
			class="fb-like"
			data-href="https://www.facebook.com/SkinsOfTheRift/"
			data-layout="button"
			data-action="like"
			data-size="large"
			data-show-faces="false"
			data-colorscheme="dark"
			data-share="false">
		</div>
	</nav>
</template>


<!-- ============== COMPONENT ============== -->
<script>
	export default {
	  name: 'appHeader',
	  data () {
	    return {
				inp:{
					value: "",
					focus: false
				}
	    }
	  },
		props: [
			'skindb'
		],

		methods: {
			launchSearch: function(toSearch){
				this.$router.push({
					name:'searchpage', params:{searched: toSearch}
				})
			},
			randomize: function(){
				var rand = Math.floor(Math.random() * this.skindb.length)
				return this.skindb[rand].champion.toLowerCase()
			}
		}
	}
</script>


<!-- ============== STYLE ============== -->
<style scoped>

	.appHeader {
		display: flex;
		align-items: center;
		margin-bottom: 20px;
	}

	.appHeader > * {
		margin-right: 20px;
	}

	.logo {
		height: 70px;
		transition: all .3s;
	}

	.logo:hover {
		filter: drop-shadow(1px 1px 4px rgba(0,0,0,0.5));
		transform: translateY(-2px);
}

	.searchbox {
		display: flex;
		flex-direction: column;
	}

	input {
		width: 250px;
		padding: 7px 10px;

		border-radius: 5px;
		background-color: rgba(0, 23, 39, 0.8);
		border: none;
		color: white;

		font-size: 1.5em;
		font-weight: bold;
	}

	input:focus{
		background-color: rgba(0, 23, 39, 1);
		outline: none;
	}

	input::placeholder{
		color: rgba(255,255,255,0.5);
	}

	input:focus::placeholder{
		color: rgba(255,255,255,0.3);
	}

	#whiteline {
		width: 0px;
		height: 5px;
		background-color: white;
		border-radius: 0px 0px 5px 5px;
		transition: all 0.2s ease-out;
	}

	#whiteline.focused {
		width: 250px;
	}

	.shuffle {
		opacity: .9;
		height: 36px;
		transition: all .3s ease-out;
	}

	.shuffle:hover{
		transform: translateY(-2px);
	}

	.blank {
		flex-grow: 1;
	}

	@media (max-width: 700px) {
		.appHeader {
			flex-direction: column;
		}
		.appHeader > * {
			margin-bottom: 10px;
		}
		.fb-like {
			display: none;
		}
	}

</style>
