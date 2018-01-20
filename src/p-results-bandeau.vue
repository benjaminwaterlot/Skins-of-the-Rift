<!-- ============== TEMPLATE ============== -->
<template>
	<div id="bandeau"
		@click="expandBandeau"
		:style="bandeauStyle">
		<div
		v-if="typeOfSearch === 'champion'"
		class="listinfos">
			<h1
			class="listinfos__name"
			:style="styles.listinfosName">
			{{pickASkin.champion}}
			</h1>
			<!-- <div class="listinfos__blank" /> -->
			<p
			class="listinfos__description"
			:style="styles.listinfosDescription">
			{{pickASkin.championlore}}
			</p>
			<p
			class="listinfos__quote"
			:style="styles.listinfosQuote">
			"{{pickASkin.quote}}"
			</p>
		</div>
		<div
		v-else-if="typeOfSearch === 'family'"
		class="listinfos">
			<h1
			class="listinfos__name"
			:style="styles.listinfosName">
			{{skinToDisplay.family}} <span class="little">skins</span>
			</h1>
			<p
			class="listinfos__description"
			:style="styles.listinfosDescription">
			{{skinToDisplay.skin}}
			</p>
		</div>
	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'pResultsBandeau',
  data() {
    return {
			bandeauIsExpanded: false,
			bandeauStyle: {
				backgroundImage: 'url("../src/assets/images/loader.svg")',
				backgroundColor: this.colorize(this.colors.DarkMuted, .3),
				height: document.getElementById('app').offsetWidth * 0.35 + 'px',
				backgroundPositionY: '-50px',
				backgroundSize: '110%'
			}
    }
  },

	props:[
		'skinToDisplay',
		'typeOfSearch',
		'skindbFiltered',
		'colors'
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
		pickASkin: function(){
			return this.skindbFiltered[0]
		},
		styles: function(){
			return {
				listinfosName: {
					'color': 'white',
					'textShadow': `3px 3px 0px ${this.colorize(this.colors.DarkMuted, .6)}
					, 0px 0px 30px rgba(0,0,0,0.6)`
				},
				listinfosDescription: {
					'color': 'white',
					'textShadow': `2px 2px 0px ${this.colorize(this.colors.DarkMuted, .6)}
					, 0px 0px 30px rgba(0,0,0,0.6)`
				},
				listinfosQuote: {
					'display':'none',
					'color': 'white',
					'textShadow': `1px 1px 0px ${this.colorize(this.colors.DarkMuted, .6)}
					, 0px 0px 10px ${this.colorize(this.colors.DarkMuted, .6)}`
				}
			}
		}
	},
	created(){
		var src = `../src/assets/landscape/${this.skinToDisplay.ident.toLowerCase()}.jpg`,
			img = new Image()
		img.onload = () => {
			this.imageIsLoaded(src)
			// setTimeout(() => this.imageIsLoaded(src), (Math.random() * 1000) + 1000)
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
		background: no-repeat top right/cover;

		box-shadow: 1px 1px 3px rgba(0,0,0,0.3);
		border-radius: 3px;
		cursor: pointer;

		transition: all .3s ease-out;
	}

	.listinfos {
		margin: 20px;
	}

	.listinfos__name {
		margin: 0px;
		font-size: 4em;
	}

	.listinfos__description {
		margin: 0px;
		font-size: 1.6em;
		font-weight: bold;
	}


	@media (max-width: 900px) {
		.listinfos__description {
			font-size: 1.3em;
		}
		.listinfos__name {
			font-size: 3em;
		}
	}

	@media (max-width: 600px) {
		.listinfos__description {
			font-size: 1em;
		}
		.listinfos__name {
			font-size: 2em;
		}
	}

	.listinfos__quote {
		margin-top: 5px;
		font-style: italic;
		font-size: 1.1em;
		color: rgba(255, 255, 255, 0.9);
	}

	.little {
		font-size: 0.9em;
		font-weight: 500;
		opacity: 0.9;
	}

	.bandeau-infos {

	}

</style>
