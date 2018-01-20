// ============== TEMPLATE ==============
<template>
	<div
	class="sidebar"
	:style="styles.sidebar">

		<div class="skin-presentation">
			<h1
			class="skin-presentation__name"
			:style="styles.skinPresentationName">
			{{ thisSkin.skin }}
			</h1>
			<div
			class="skin-presentation__portrait"
			:style="styles.skinPresentationPortrait"
			alt="portrait of the skin"
			@error="imageError" />
		</div>

		<div class="sales">
			<p class="sales__availability"
			:style="styles.salesAvailability" >
			{{saleType.saleDescription}}
			</p>
			<div
			class="sales__pricecontainer"
			:style="styles.salesPricecontainer">
				<p
				v-if="isOnSale"
				class="sales__price"
				:style="styles.salesPrice">
				{{thisSkin.price}}
				</p>
				<img class="sales__rp-logo"
				:src="`../src/assets/images/${saleType.logoName}`"
				:style="saleType.style"
				alt="RP logo">
			</div>
		</div>

		<div class="badges">
			<div
			v-for="badge in badgesToDisplay"
			class="badges__badge"
			:key="badge">
				<img
				class="badges__image"
				:src="`./../src/assets/images/badges/${badge}.svg`"
				alt="">
				<p
				class="badges__description"
				:style="styles.badgeDescription">
				{{returnBadgeDescription(thisSkin, badge)}}
				</p>
			</div>
		</div>

		<div
		v-if="thisSkin.releasedate"
		class="release-infos">
			<p
			class="release-infos__label"
			:style="styles.releaseInfos">
			Released
			</p>
			<p
			class="release-infos__date"
			:style="styles.releaseInfos">
			{{ thisSkin.releasedate }}
			</p>
		</div>

	</div>
</template>

// ============== COMPONENT ==============
<script>
import * as my from './myfunctions.js'
export default {
  name: 'rskinsidebar',
  data() {
    return {
			styles: {
				sidebar: {
					background: `linear-gradient(to bottom right,
						${this.colorize(this.colors.DarkMuted, .8)},
						${this.colorize(this.colors.Muted, .6)})`
					},
				skinPresentationName: {
					color: this.colorize(this.colors.LightVibrant, 1),
					textShadow: `3px 3px 0px ${this.colorize(this.colors.DarkMuted, 1)}`
				},
				skinPresentationPortrait: {
					boxShadow: `0px 5px 0px ${this.colorize(this.colors.DarkMuted)}`,
					background: 'url("../src/assets/images/loader.svg") top center/cover',
					opacity: 0.3,
				},
				salesAvailability: {
					color: this.colorize(this.colors.LightVibrant, .8),
				},
				salesPricecontainer: {
					backgroundColor: this.isOnSale
					? this.colorize(this.colors.DarkMuted)
					: 'rgba(0,0,0,0.5)',
				},
				salesPrice: {
					color: this.colorize(this.colors.LightVibrant, 1, "isLight"),
				},
				releaseInfos: {
					color: this.colorize(this.colors.LightVibrant, 1, "isLight"),
				},
				badgeDescription: {
					color: this.colorize(this.colors.LightVibrant, .9)
				},
			}
    }
  },

	props:[
		'colors',
		'thisSkin',
	],

	methods: {
		imageIsLoaded: function(src){
			const skinPresentationPortrait = this.styles.skinPresentationPortrait
			skinPresentationPortrait.background = `url("${src}") top -50px center/110%`
			skinPresentationPortrait.opacity = 1
		},
		imageError: function(){
			console.error("ERROR LOADING THE IMAGE!")
		},
	},

	computed: {
		badgesToDisplay: function(){
			var badgesToDisplay = [],
			skin = this.thisSkin
			if (skin.chroma) {badgesToDisplay.push('chroma')}
			if (skin.sale == "current") {badgesToDisplay.push('currentlyInSales')}
			if (skin.sale && skin.sale !== "current" && skin.sale.length > 3) {badgesToDisplay.push('plannedSales')}
			if (skin.releasedate === '/') {badgesToDisplay.push('futureSkin')}
			if (my.isItNew(skin.releasedate)) {badgesToDisplay.push('newSkin')}
			return badgesToDisplay
		},
		isOnSale: function(){
			return isNaN(this.thisSkin.price)
			? false
			: true
		},
		saleType: function(){
			if(isNaN(this.thisSkin.price)) {
				return {
					'saleDescription': 'Not in sales',
					'logoName': 'rp2.png',
					'style': {
						'filter': 'grayscale(100%) brightness(120%)'
					}
				}
			} else if (this.thisSkin.price == 10) {
				return {
					'saleDescription': 'Unlock with gems',
					'logoName': 'gem.png',
					'style': {
						'transform': 'scale(1.4)',
						'filter': 'brightness(120%)'
					}
				}
			} else {
				return {
					'saleDescription': 'Currently available',
					'logoName': 'rp2.png'
				}
			}
		}
	},
	created(){
		const src = `../src/assets/portrait-medium/${this.thisSkin.ident}.jpg`
		const img = new Image()
		img.onload = () => {
			this.imageIsLoaded(src)
			// setTimeout(() => {
			// 	this.imageIsLoaded(src)
			// }, (Math.random() * 1000)+300)
		}
		img.onerror = () => {
			this.imageIsLoaded(`../src/assets/portrait-medium/${this.thisSkin.champion.toLowerCase()}-classic.jpg`)
		}
		img.src = src
	}
}

</script>

// ============== STYLE ==============
<style scoped>

* {
	text-shadow: 1px 1px 4px hsla(0, 0%, 0%, 0.4);
}

.sidebar {
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 17px;
	border-radius: 3px;
	box-shadow: 1px 1px 3px hsla(0, 0%, 0%, 0.2);
}

.skin-presentation {
	display: flex;
	flex-direction: column;
	align-items: center;
}

	.skin-presentation__name{
		font-size: 2em;
		text-align: center;
	}

	.skin-presentation__portrait {
		margin: 20px 0px;
		width: 200px;
		height: 200px;
		border-radius: 100px;
		box-shadow: 1px 1px 5px hsla(0, 0%, 0%, 0.2);
		transition: opacity .4s ease-in-out;
	}

	.skin-presentation__skinname {
		font-size: 1.7em;
		font-weight: 800;
		margin: 0px;
		text-align: center;
	}

.sales {
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 20px 0px;
}

	.sales__availability {
	}

	.sales__pricecontainer {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 3px 16px 1px 16px;
		border-radius: 100px;
	}

	.sales__price {
		font-size: 28px;
		font-weight: 600;
		margin-right: 10px;
	}

	.sales__rp-logo {
		height: 35px;
	}

.badges {
	display: flex;
	flex-direction: column;
	margin: 20px 0;
}

	.badges__badge {
		display: flex;
		align-items: flex-start;
		width: 100%;
		margin-bottom: 20px;
	}

	.badges__image {
		width: 40px;
		margin-right: 10px;
	}

	.badges__description {
		font-size: 0.9em;
		font-weight: 400;
		color: black;
		margin: 0px;
	}

.release-infos {
	display: flex;
	width: 100%;
	flex-direction: column;
	align-items: flex-start;
}

	.release-infos__date {
		font-size: 1.4em;
		font-weight: 500;
		margin-bottom: 0px;
	}

</style>
