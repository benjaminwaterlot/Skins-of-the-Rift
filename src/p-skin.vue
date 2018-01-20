<!-- ============== TEMPLATE ============== -->
<template>
	<div id="main" :key="thisSkin.ident">
		<pSkinBandeau
			:skinToDisplay="thisSkin">
		</pSkinBandeau>
			<div id="skininfos">
				<pSkinSidebar
				:colors="colors"
				:thisSkin="thisSkin"/>

					<div class="skininfos__main">
						<h2 class="iframe-title"
						:style="styles.iframetitle">
						Skin spotlight
						</h2>
						<pSkinIframeContainer
						:colors="colors"
						:skinToDisplay="thisSkin"
						:videoType="'spotlight'"/>
						<h2 class="iframe-title"
						v-if="thisSkin.chroma"
						:style="styles.iframetitle">
						Skin chromas
						</h2>
						<pSkinIframeContainer
						v-if="thisSkin.chroma"
						:colors="colors"
						:skinToDisplay="thisSkin"
						:videoType="'chroma'"/>
					</div>
				</div>

			<div class="otherskins">
				<div
				class="otherskins__champion box"
				:style="styles.box">
					<h2
					class="otherskins__title"
					:style="styles.otherskinsTitle">
					Other {{thisSkin.champion}} skins
					</h2>
					<vCardContainer
					:skindbFiltered="otherSkinsOfChampion"/>
				</div>
				<div
				v-if="otherSkinsOfFamily"
				class="otherskins__family box"
				:style="styles.box">
					<h2
					class="otherskins__title"
					:style="styles.otherskinsTitle">
					Other {{thisSkin.family}} skins
					</h2>
					<vCardContainer
					:skindbFiltered="otherSkinsOfFamily"/>
				</div>
			</div>

	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>

export default {
  name: 'pageSkin',
  data() {
    return {
			skin: "",
    }
  },

	props:[
		'skindb',
		'thisSkinIdent'
	],

	computed:{
		thisSkin: function(){
			return this.skindb.find(
				(v) => v.ident == this.thisSkinIdent)
		},
		otherSkinsOfChampion: function(){
			return this.skindb.filter(
				val => val.champion == this.thisSkin.champion)
		},
		otherSkinsOfFamily: function(){
			return this.thisSkin.family
			? this.skindb.filter(
				val => val.family == this.thisSkin.family)
			: false
		},
		colors: function(){
			return this.createPalette(this.thisSkin)
		},
		styles: function(){
			return {
				iframetitle: {
					backgroundColor: this.colorize(this.colors.DarkMuted, 1),
					color: this.colorize(this.colors.LightVibrant, 1, 'lighter'),
				},
				otherskinsTitle: {
					color: this.colorize(this.colors.LightVibrant, 1, 'lighter'),
					textShadow: `2px 2px 0px ${this.colorize(this.colors.DarkMuted, .8)}`,
				},
				box: {
					background: `linear-gradient(to top left,
					${this.colorize(this.colors.DarkMuted, .8)},
					${this.colorize(this.colors.Muted, .6)})`
				}
			}
		}
	},

	methods: {
	},
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	h2 {
		color: #47BDA7;
	}

	#skininfos {
		display: grid;
		grid-template-columns: 250px 1fr;
		justify-content: center;
		grid-gap: 20px;
		align-items: start;
		margin: 20px 0px;
	}

	@media (max-width: 600px) {
		#skininfos {
			grid-template-columns: 80%;
		}
	}

	.skininfos__main {
		display: flex;
		flex-direction: column;
	}

	.iframe-title {
		display: inline-block;
		margin: auto;
		padding: 6px 20px 5px 20px;
		z-index: 10;

		border-radius: 100px;
		text-align: center;
		font-size: 1.1em;
		font-weight: 600;
		text-transform: uppercase;
		text-shadow: none;
	}

	.label--blue {
		margin-bottom: 10px;
		color: #47BDA7;
		font-weight: 500;
		font-size: 1.05em;
	}

	.otherskins__title {
		margin: 5px 10px 20px 0px;
		color: white;
		font-size: 2em;
	}

	.otherskins {
		width: 100%;
	}

	.box {
		background-color: rgba(0, 28, 34, 0.8);
		padding: 20px;
		border-radius: 5px;
	}

	.otherskins__champion {
		width: 100%;
	}

	.otherskins__family {
		width: 100%;
		margin: 20px 0px;
	}

</style>
