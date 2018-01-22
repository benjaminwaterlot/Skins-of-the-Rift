<!-- ============== TEMPLATE ============== -->
<template>
	<div class="page">
		<div class="title">
			<h1 class="title__title">Champions</h1>
			<p class="title__subtitle">Browse skins by champions. <br>Page in early access, design will change.</p>
		</div>
		<section
		id="pChampions"
		>
			<!-- <router-link
			v-for="champion in championdb"
			:to="{path: `/search/${champion.champion}`}"
			>
				<p> {{champion.champion}} </p>
			</router-link> -->
		<router-link
			class="list__label"
			v-for="occurrence in championdb"
			:to="'/search/'+occurrence.champion.toLowerCase()"
			:key="occurrence.champion">
			<img
				class="list__portrait"
				:src="'../src/assets/portrait-mini/'+fixName(occurrence.champion)+'-classic.jpg'"
				alt="champion portrait">
			<p
			class="list__name"
			>
			{{occurrence.champion}}
			</p>
		</router-link>
		<div class="blank">

		</div>


		</section>
	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'pChampions',
  data() {
    return {
		}
	},

	props:[
		'skindb',
		'championdb'
	],

	methods: {
		fixName: function(name){
			return name.toLowerCase().replace(" ", "-").replace("'", "")
		},
	},

	computed: {
	},
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	.title {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.title__title {
		font-size: 3.5em;
		text-shadow: 3px 3px 0px rgba(0,28,34,.4);
		margin-bottom: 10px;
	}

	.title__subtitle {
		font-size: 1.1em;
		text-shadow: 2px 2px 0px rgba(0,28,34,.4);
	}

	#pChampions{
		margin-top: 60px;
		display: grid;
		grid-template-columns: repeat(5,1fr);
		justify-items: start;
		text-align: left;
	}

	.list__champion {
		display: block;
	}

	.list__label {
		display: inline-flex;
		align-items: center;
		overflow: hidden;
		margin: 8px 15px;
		border-radius: 20px;
		background-color: rgba(0,28,34,.5);
		box-shadow: 2px 2px 0px rgba(0,28,34,.75);
		transition: all .3s ease-out;
	}

	.list__label:hover {
		filter: brightness(150%) contrast(130%);
	}

	.list__portrait{
		position: relative;
		width: 25px;
		height: 35px;
		border-radius: 100%;
		object-position: 0px 0px;
		object-fit: cover;
		transform: scale(2);
		top: 6px;
		left: 8px;
	}

	.list__name {
		font-size: 0.9em;
		text-shadow: 1px 1px 3px rgba(0,0,0,.4);
		padding: 0px 15px 0px 28px;
	}

	.blank {
		/* flex-grow: 1; */
	}

</style>
