<!-- ============== TEMPLATE ============== -->
<template>
	<div class="main">
		<transition name="fade-in" appear mode="out-in">
			<div v-if="skindbFiltered.length <= 30"
			class="results-main"
			:key="searched">
				<rResultsSidebar class="sidebar" :skindbFiltered="skindbFiltered"/>
				<vBandeau class="bandeau"
				:skinToDisplay="randomSkin"
				:typeOfSearch="typeOfSearch" />
				<vBox>
					<h2 class="results-number"> {{skindbFiltered.length}} results for "{{searched}}"</h2>
					<vCardContainer class="card-container" :skindbFiltered="skindbFiltered"/>
				</vBox>
			</div>
			<rResultsError v-else id="error" :skindbFiltered="skindbFiltered" :key="'key' + searched"/>
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
			randomSkin: function(){
				return _.sample(this.skindbFiltered)
			},
			typeOfSearch: function(){
				var skindbFiltered = this.skindbFiltered
				function isItAFamily(){
					return _.every(skindbFiltered,
					(val, index, collection) => val.family == collection[0].family)
				}
				function isItAChampion(){
					return _.every(skindbFiltered,
					(val, index, collection) => val.champion == collection[0].champion)
				}
				if (isItAChampion()){return 'champion'}
				else if (isItAFamily()){return 'family'}
				else return ''
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

	.results-number {
		color: #47BDA7;
		margin: 10px 0px;
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
