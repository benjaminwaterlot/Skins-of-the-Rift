<!-- ============== TEMPLATE ============== -->
<template>
	<router-link
		class="wrapper"
		:to="{name:'skinpage', params:{skinident: skin.ident}}">
		<div class="card"
			:style="styles">
			<p class="skin-name"> {{skin.skin}} </p>
			<div class="price-area">
				<p class="price">{{isOnSale ? skin.price : ""}}</p>
				<img class="rp-logo"
				:src="`../src/assets/images/${saleType.logoUrl}`"
				:style="saleType.style"
				:class="{'not-on-sale': !isOnSale}"
				alt="RP logo"/>
			</div>
			<div class="badges-area">
				<img v-for="badge in badgesToDisplay"
				class="badge"
				v-tippy="{ arrow: true, theme: 'light' }"
				:title="returnBadgeDescription(skin, badge)"
				:alt="`characteristics : ${badge}`"
				:src="`../src/assets/images/badges/${badge}.svg`"/>
			</div>
		</div>
	</router-link>
</template>

<!-- ============== COMPONENT ============== -->
<script>
import * as my from './myfunctions.js'
export default {
  name: 'vCard',
  data() {
    return {
			styles: {
				background: 'url("../src/assets/images/loader.svg") center/50% no-repeat',
				backgroundColor: 'rgba(200,200,200,0.5)',
				filter: 'none'
			}
		}
  },

	props:[
		'skin',
	],

	computed: {
		saleType: function(){
			if(isNaN(this.skin.price)) {
				return {
					'logoUrl': 'rp2.png',
					'style': {
						'filter': 'grayscale(100%) contrast(120%) brightness(110%)'
					}
				}
			} else if (this.skin.price == 10) {
				return {
					'logoUrl': 'gem.png',
					'style': {
						'transform': 'scale(1.4) translateY(-1px)',
						'filter': 'brightness(120%)'
					}
				}
			} else {
				return {
					'logoUrl': 'rp2.png',
					'style': {

					}
				}
			}
		},
		badgesToDisplay: function(){
			var badgesToDisplay = [],
			skin = this.skin
			if (skin.chroma) {badgesToDisplay.push('chroma')}
			if (skin.sale == "current") {badgesToDisplay.push('currentlyInSales')}
			if (skin.sale && skin.sale !== "current" && skin.sale.length > 3) {badgesToDisplay.push('plannedSales')}
			if (my.isItNew(skin.releasedate)) {badgesToDisplay.push('newSkin')}
			if (skin.releasedate === '/') {badgesToDisplay.push('futureSkin')}
			return badgesToDisplay
		},
		isOnSale: function(){
			return isNaN(this.skin.price) ? false : true
		}
	},
	methods: {
		// returnBadgeDescription: function(badge){
		// 	switch (badge) {
		// 		case 'chroma':
		// 			return `${this.skin.skin} has chroma variants,
		// 			each available for 290 RP.`
		// 			break
		// 		case 'currentlyInSales':
		// 			return `${this.skin.skin} is on sales until ${this.skin.saleend}.`
		// 			break
		// 		case 'plannedSales':
		// 			return `${this.skin.skin} will be on sales later in ${this.skin.sale}!`
		// 			break
		// 		case 'newSkin':
		// 			return `${this.skin.skin} is new! ${this.skin.releasedate - new Date()}days ago`
		// 			break
		// 		case 'futureSkin':
		// 			return `${this.skin.skin} is not released yet!`
		// 			break
		// 		default:
		// 			break
		// 	}
		// },
		imageIsLoaded: function(src){
			this.styles.background = `url("${src}") top left/cover no-repeat`
		},
		imageIsNotFound: function(src){
			this.styles.filter = `grayscale(60%) brightness(120%)`
			this.styles.background = `url("${src}") top left/cover no-repeat`
		}
	},
	created(){
		var src = `../src/assets/landscape-mini/${this.skin.ident}.jpg`
		var img = new Image()
		img.onload = () => {
			this.imageIsLoaded(src)
			// setTimeout(() => {
			// 	this.imageIsLoaded(src)
			// }, (Math.random() * 1000)+1000)
		}
		img.onerror = () => {
			this.imageIsNotFound(`../src/assets/landscape-mini/${this.skin.champion.toLowerCase()}-classic.jpg`)
		}
		img.src = src
	}

}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	.wrapper {
		height: 130px;
		width: 100%;
	}

	.card {
		/* CHILDS */
		height: inherit;
		display: grid;
		grid-template-areas:
			". b"
			"n p";
		grid-gap: 10px;
		/* DESIGN */
		box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
		border-radius: 3px;
		cursor: pointer;
		transition: all 0.3s ease-out;
		padding: 0px 10px 10px 10px;
	}

	.card:hover {
		transform: translateY(-2px);
		filter: contrast(115%) brightness(115%);
	}

	.skin-name {
		grid-area: n;
		align-self: end;
		font-size: 0.95em;
	}

	p {
		font-weight: 500;
		text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
		margin: 0px;
	}

	.price-area {
		position: relative;
		top: 3px;
		grid-area: p;
		align-self: end;
		justify-self: end;
		display: flex;
		align-items: center;
	}
		.price {
			font-size: 1.05em;
		}
		.rp-logo {
			margin-left: 5px;
			width: 30px;
		}

	.badges-area {
		grid-area: b;
		align-self: start;
		justify-self: end;

		display: flex;
		justify-content: flex-end;
		align-items: flex-start;
	}

	.badge {
		height: 40px;
		margin-left: 10px;
	}

</style>
