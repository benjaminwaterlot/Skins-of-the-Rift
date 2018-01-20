<!-- ============== TEMPLATE ============== -->
<template>
	<div class="main">
		<div class="skins">
			<h2
			class="skins__title">
			{{handleType.newSkins.title}}</h2>
			<vCardContainer
			class="skins__cards"
			:skindbFiltered="handleType.newSkins.cards"
			/>

			<h2
			class="skins__title">
			{{handleType.futureSkins.title}}</h2>
			<vCardContainer
			class="skins__cards"
			:skindbFiltered="(handleType.futureSkins.cards)"
			/>
		</div>
	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
import * as my from './myfunctions'
export default {
  name: 'pHomeLatest',
  data() {
    return {
			datas : {
				title: '',
				cards: []
			}
    }
  },

	props:[
		'skindb',
	],

	methods: {
	},

	computed: {
		colors: function(){
			return this.createPalette(this.handleType.cards[0])
		},
		newSkins: function(){
			const skindb = this.skindb
			const lastSkinsIndex = skindb.length - 8
			// const sliceOnLastSkins = _.slice(skindb, lastSkinsIndex)
			// var orderedLastSkins = _.sortBy(sliceOnLastSkins, ['releasedate']);

			const onlyReleased = skindb.filter(val => val.releasedate !== '/')
			const lastSkins = _.slice(onlyReleased, (onlyReleased.length - 4))
			return _.reverse(lastSkins)
		},
		futureSkins: function(){
			const skindb = this.skindb
			const lastSkinsIndex = skindb.length - 10
			const sliceOnLastSkins = _.slice(skindb, lastSkinsIndex)
			return sliceOnLastSkins.filter(val => val.releasedate == '/')
		},
		handleType: function(){
			return {
				newSkins: {
					title: 'New skins',
					cards: this.newSkins
				},
				futureSkins: {
					title: 'Future skins',
					cards: this.futureSkins
				}
			}

			// switch (this.type) {
			// 	case 'newSkins':
			// 	return {
			// 		title: 'New skins',
			// 		cards: this.newSkins
			// 	}
			// 		break
      //
			// 	case 'futureSkins':
			// 	console.log(this.futureSkins)
			// 	return {
			// 		title: 'Future skins',
			// 		cards: this.futureSkins
			// 	}
			// 		break
      //
			// 	default:
			// 		console.log("Error : you didn't provide a highlight type")
			// 		break
			// }
		},
	},
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	.main {
	}

	.skins__title {
		display: inline-block;
		font-size: 2.5em;
		margin: 40px 20px 30px 20px;

		text-shadow: hsla(190, 70%, 6%, .4) 2px 2px 0px;
		background: linear-gradient(to right bottom, hsla(189, 33%, 41%, .9), hsla(189, 33%, 41%, .6));
		border-radius: 100px;
		padding: 0px 20px;
		box-shadow: hsla(190, 70%, 6%, .3) 2px 3px 0px;
	}

	.skins {
		border-radius: 4px;
		display: flex;
		flex-direction: column;
		align-items: left;
		overflow: hidden;
	}

	.skins__cards {
		width: 100%;
		border-radius: 5px;
		padding: 0px 15px 15px 15px;
	}

</style>
