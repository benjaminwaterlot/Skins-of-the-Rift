<!-- ============== TEMPLATE ============== -->
<template>
	<div id="bandeau"
		@click="expandBandeau"
		:style="bandeauStyle"
		>

	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script scoped>
export default {
  name: 'vBandeau',
  data() {
    return {
			bandeauIsExpanded: false,
			bandeauStyle: {
				backgroundImage: `url("../src/assets/landscape-mini/${this.skinToDisplay.ident}.jpg")`,
				height: document.getElementById('app').offsetWidth * 0.35 + 'px',
				backgroundPositionY: '-40px',
				backgroundSize: 'cover'
			}
    }
  },

	props:[
		'skinToDisplay',
		'type'
	],

	methods: {
		imageIsLoaded: function(src){
			this.bandeauStyle.backgroundImage = `url("${src}")`
		},
		expandBandeau: function(){
			var actualWidth = document.getElementById('bandeau').offsetWidth
			if (this.bandeauIsExpanded) {
				this.bandeauStyle.height = 0.3 * actualWidth + 'px'
				this.bandeauStyle.backgroundPositionY = '-50px'
			} else {
				this.bandeauStyle.height = 0.5625 * actualWidth + 'px'
				this.bandeauStyle.backgroundPositionY = '0px'
			}
			this.bandeauIsExpanded = !this.bandeauIsExpanded
		}
	},
	computed: {
	},
	created(){
		var src = `../src/assets/landscape/${this.skinToDisplay.ident}.jpg`,
		bandeauStyle = this.bandeauStyle
		var img = new Image()
		img.onload = () => {
			this.imageIsLoaded(src)
			// setTimeout(function(){
			// 	this.imageIsLoaded(src)
			// }, (Math.random() * 1000) + 1000)
		}
		img.onerror = () => {
			this.imageIsLoaded(`../src/assets/landscape/${this.skinToDisplay.champion}-classic.jpg`)
		}
		img.src = src
	}
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	#bandeau {
		display: flex;
		flex-direction: column;
		justify-content: flex-end;

		width: 100%;

		box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
		border-radius: 3px;
		cursor: pointer;

		transition: all .3s ease-in-out;
	}

	h1, h2 {
		margin: 0;
		text-shadow: 1px 1px 8px rgba(0,0,0,0.6);
	}
	p {
		margin: 5px 0px;
		text-shadow: 1px 1px 4px rgba(0,0,0,0.6);
	}
	.bandeau-infos {
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}

	.infos-skin-name {
		margin: 10px 20px;
	}

	.price-area-bandeau {
		display: flex;
		align-items: center;
		margin: 10px 20px;
	}

	.price-area-bandeau > p {
		font-size: 2em;
		margin: 0;
	}

	.price-area-bandeau > img {
		height: 35px;
	}

</style>
