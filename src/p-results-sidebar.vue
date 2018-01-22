// ============== TEMPLATE ==============
<template>
	<div
	id="sidebar"
	:style="styles.sidebar">

		<h2
		class="subtitle"
		:style="styles.subtitle">
		Champions
		</h2>

		<router-link
			v-for="occurrence in filteringUniques('c')"
			:to="'/search/'+occurrence.toLowerCase()"
			class="label"
			:style="styles.label"
			:key="occurrence">
			<img
				:src="'../src/assets/portrait-mini/'+fixName(occurrence)+'-classic.jpg'"
				class="label-portrait"
				alt="champion portrait">
			<p class="label-name">{{occurrence}}</p>
		</router-link>

		<h2
		class="subtitle"
		v-if="filteringUniques('f').length > 0"
		:style="styles.subtitle">
		Skin Lines
		</h2>

		<router-link
			v-for="occurrence in filteringUniques('f')"
			:to="'/search/'+occurrence.family.toLowerCase()"
			class="label"
			:style="styles.label"
			:key="occurrence.family">
			<div class="label-portrait-container">
				<img
					:src="`../src/assets/portrait-mini/${occurrence.ident}.jpg`"
					class="label-portrait"
					alt="champion portrait">
			</div>
			<p class="label-name">{{occurrence.family}}</p>
		</router-link>
	</div>
</template>

// ============== COMPONENT ==============
<script>
export default {
  name: 'rResultsSidebar',
  data() {
    return {
    }
  },

	props:[
		'skindbFiltered',
		'colors'
	],

	computed: {
		styles: function(){
			return {
				sidebar: {
					background: `linear-gradient(to bottom right,
					${this.colorize(this.colors.DarkMuted, .7)},
					${this.colorize(this.colors.Muted, .5)})`
					},
				label: {
					background: this.colorize(this.colors.DarkMuted, .5, 'darker')
				},
				subtitle: {
					color: this.colorize(this.colors.LightVibrant, .9, 'lighter'),
					textShadow: `3px 3px 0px ${this.colorize(this.colors.DarkMuted, .6)}`
				},
			}
		}
	},

	methods: {
		filteringUniques: function(type){
			switch(type){
				case "c":
					return _.uniq(this.skindbFiltered.map((value) => value.champion))
					break
				case "f":
					var test = '',
					refined = []
					this.skindbFiltered.forEach(function(v){
						if (!test.includes(v.family)){
							refined.push(v)
							test = test + v.family
						}
					})
					return refined
					break
				default:
					return "TYPE OF FILTER IS REQUIRED"
					break
			}
		},
		fixName: function(name){
			return name.toLowerCase().replace(" ", "-").replace("'", "")
		}
	}
}

</script>

// ============== STYLE ==============
<style scoped>

	#sidebar {
		padding: 10px 10px 50px 10px;
		border-radius: 5px;
	}

	.subtitle {
		font-size: 1.9em;
		margin: 2px 0px 10px 0px;
		color: #47BDA7;
	}

	@media (max-width: 600px) {
		.subtitle {
			font-size: 1.4em;
		}
	}

	.subtitle:last-of-type {
		margin-top: 30px;
	}

	.label {
		display: inline-flex;
		align-items: center;
		overflow: hidden;
		margin: 5px 5px 5px 0px;
		border-radius: 20px;
		transition: all .3s ease-out;
	}

	.label:hover {
		filter: brightness(150%) contrast(130%);
		/* box-shadow: 1px 1px 10px rgba(0,0,0,0.6); */
	}

	.label-portrait{
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

	.label-name {
		font-size: 0.8em;
		padding: 0px 15px 0px 28px;
	}

</style>
