<!-- ============== TEMPLATE ============== -->
<template>
	<div id="main">
		<p>{{ colors }}</p>
		<vBandeauSkin
			:skinToDisplay="thisSkin"
			:key="thisSkin.ref">
		</vBandeauSkin>
			<div id="skininfos">

				<vBox :color="colors.LightVibrant">
					<div class="skininfos__side">
						<div class="presentation">
							<h1 class="presentation__skinname">{{ thisSkin.skin }}</h1>
							<img
								id="presentation__skinportrait"
								:src="`src/assets/portrait-medium/${thisSkin.ident}.jpg`"
								alt="portrait of the skin">
						</div>
						<div class="buy">
							<p class="buy__availability label--blue">Currently available</p>
							<div class="buy__pricearea">
								<p class="buy__price">{{thisSkin.price}}</p>
								<img class="buy__rplogo" src="src/assets/images/rp.png" alt="RP logo">
							</div>
						</div>
						<div class="released">
							<p class="released__label label--blue">Released</p>
							<p class="released__date">{{ thisSkin.releasedate }}</p>
						</div>
					</div>
				</vBox>

				<vBox>
					<div class="skininfos__main">
						<rSkinIframeContainer
						:skinToDisplay="thisSkin"
						:videoType="'spotlight'"
						/>
						<rSkinIframeContainer
						v-if="thisSkin.chroma"
						:skinToDisplay="thisSkin"
						:videoType="'chroma'"
						/>
					</div>
				</vBox>
			</div>

			<div class="otherskins">
				<vBox class="otherskins__champion">
					<h1>Other {{thisSkin.champion}} skins</h1>
					<vCardContainer :skindbFiltered="otherSkinsChampion"/>
				</vBox>
				<vBox v-if="otherSkinsFamily" class="otherskins__family">
					<h1>Other {{thisSkin.family}} skins</h1>
					<vCardContainer :skindbFiltered="otherSkinsFamily"/>
				</vBox>
			</div>

	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
import colorsdb from './colorsdb.js'
export default {
  name: 'pageSkin',
  data() {
    return {
			skin: "",
			colorsdb: colorsdb
    }
  },

	props:[
		'skindb',
		'skinident'
	],

	computed:{
		thisSkin: function(){
			return this.skindb.find((v) => v.ident == this.skinident)
		},
		otherSkinsChampion: function(){
			return this.skindb.filter(val => val.champion == this.thisSkin.champion)
		},
		otherSkinsFamily: function(){
			return this.thisSkin.family
			? this.skindb.filter(val => val.family == this.thisSkin.family)
			: false
		},
		colors: function(){
			var thisSkin = this.thisSkin,
				colorsdb = this.colorsdb
			var cc = colorsdb.find(val => val.Skin === thisSkin.ident)
			return (cc)
		}
	},

	methods: {

	}
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>


	h1 {
		margin: 10px 10px 20px 10px;
	}

	h2 {
		color: #47BDA7;
	}

	.label--blue {
		font-weight: 500;
		color: #47BDA7;
		margin-bottom: 10px;
		font-size: 1.05em;
	}

	#skininfos {
		margin: 15px 0px;
		display: grid;
		grid-template-columns: 250px 1fr;
		grid-gap: 15px;
		align-items: start;
	}

	.skininfos__side {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.presentation {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#presentation__skinportrait {
		margin: 20px 0px;
		position: relative;
		width: 200px;
		height: 200px;
		border-radius: 100px;
		object-fit: none;
		object-position: 70% 30%;
		box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
	}

	.presentation__skinname {
		font-size: 1.6em;
		margin: 0px;
		text-align: center;
	}

	.buy {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 20px 0px;
	}

	.buy__availability {
	}

	.buy__pricearea {
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.buy__price {
		font-size: 28px;
		font-weight: 600;
	}

	.buy__rplogo {
		margin-left: 10px;
		height: 35px;
	}

	.released {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.released__date {
		font-size: 1.4em;
		font-weight: 500;
	}

	.otherskins {
		width: 100%;
	}

	.otherskins__champion {
		width: 100%;
	}

	.otherskins__family {
		margin: 20px 0px;
		width: 100%;
	}

</style>
