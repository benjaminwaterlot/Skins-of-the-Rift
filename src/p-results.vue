<!-- ============== TEMPLATE ============== -->
<template>
	<div class="main">
		<transition
		name="fade-in"
		appear
		mode="out-in">
			<div v-if="skindbFiltered.length <= 30"
			class="results-main"
			:key="searched">

				<pResultsSidebar
				class="sidebar"
				:skindbFiltered="skindbFiltered"
				:colors="colors"/>

				<pResultsBandeau
				class="bandeau"
				:skinToDisplay="skinForBandeau"
				:typeOfSearch="typeOfSearch"
				:skindbFiltered="skindbFiltered"
				:colors="colors"/>


				<!-- <h2 class="results-number">
					<span
					class="bignumber">
						{{skindbFiltered.length}}
					</span> results for <span class="search-restit">
						{{searched}}
					</span>
				</h2> -->
				<vCardContainer
				class="card-container"
				:skindbFiltered="skindbFiltered"/>

			</div>
			<pResultsError
			v-else
			id="error"
			:skindbFiltered="skindbFiltered"
			:key="searched"/>
		</transition>
	</div>
</template>


<!-- ============== COMPONENT ============== -->
<script>
	import * as my from './myfunctions.js'
	export default {
	  name: 'pageResults',

	  data () {
	    return {
	    }
	  },

		props:[
			'searched',
			'skindb'
		],

		computed: {
			skindbFiltered: function(){
				var stringSearched = this.searched.toLowerCase(),
				skindb = this.skindb
				// PRE-SEARCH FOR CHAMPION NAMES
				function champPreSearch(recherche) {
					return recherche.champion.toLowerCase() == stringSearched
					? true
					: false
				}
				// SEARCH IN EVERY FIELDS
				function globalSearch(recherche) {
					return (recherche.champion.toLowerCase().includes(stringSearched) ||  
						recherche.skin.toLowerCase().includes(stringSearched) ||
						recherche.price.includes(stringSearched) ||
						recherche.family.toLowerCase() == stringSearched)
						? true
						: false
				}
				// DEFINITION OF WHAT SEARCH IS USED
				var preSearch = skindb.filter(champPreSearch),
					globSearch = skindb.filter(globalSearch)
				return preSearch.length >= 1
				? preSearch : globSearch.length >= 1
				? globSearch : false
			},

			skinForBandeau: function(){
				var championFixed = this.skindbFiltered[0].champion
					.toLowerCase().replace(" ", "-").replace("'", "")
				if (this.typeOfSearch === 'champion'){
				return {"ident": `${championFixed}-classic`}
				} else {
					return _.sample(this.skindbFiltered)
				}

			},
			typeOfSearch: function(){
				var skindbFiltered = this.skindbFiltered
				function isItAFamily(){
					return _.every(skindbFiltered,
					(val, index, collection) =>
					val.family == collection[0].family && val.family)
				}
				function isItAChampion(){
					return _.every(skindbFiltered,
					(val, index, collection) =>
					val.champion == collection[0].champion)
				}
				if (isItAChampion()){return 'champion'}
				else if (isItAFamily()){return 'family'}
				else return ''
			},
			colors: function(){
				return this.createPalette(this.skinForBandeau)
			}
		},
	}
</script>


<!-- ============== STYLE ============== -->
<style scoped>

	.results-main {
		display: grid;
		grid-template-columns: 300px 1fr;
		grid-template-rows: auto auto;
		grid-gap: 20px;
		align-items: start;
		grid-template-areas:
			"b b"
			"s c"
	}

	@media (max-width: 640px) {
		.results-main {
			grid-template-areas:
			"b b"
			"s s"
			"c c"
		}
	}

	.results-number {
		color: #47BDA7;
		margin: 0px 0px 10px 0px;
	}
	.results-number em{
		color: #47BDA7;
	}

	.bignumber {
		color: #47BDA7;
	}

	.search-restit {
		font-weight: 500;
	}

	.bandeau {
		grid-area: b;
	}

	.sidebar {
		grid-area: s;
	}

	.card-container {
		grid-area: c;
	}

	.fade-in-enter-active, .fade-in-leave-active {
		transition: all .3s ease;
	}

	.fade-in-enter, .fade-in-leave-to {
		opacity: .1;
		transform: translateY(-5px);
	}

	#error {
		margin: 60px 20px;
	}

</style>
