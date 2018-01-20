<!-- ============== TEMPLATE ============== -->
<template>
	<div
	id="featured"
	:style="styles.featured">
		<h2
		class="title"
		:style="styles.title">
		Random skin of the day
		</h2>
		<vCard
		:key="skinFeatured.ref"
		:skin="skinFeatured"/>
	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'pHomeFeatured',
  data() {
    return {
    }
  },

	props:[
		'championdb',
		'skindb'
	],

	computed: {
		skinFeatured: function(){
				const currentTimeInDays = Math.floor(Date.now() / 1000 / 60 / 60 / 24)
				const incrementalRandNumber = (currentTimeInDays - 17500 + 1) * 18264
				const randomSkinIndex = incrementalRandNumber % this.skindb.length
				const skinFeatured = this.skindb[randomSkinIndex]
				return skinFeatured
		},
		colors: function(){
			return this.createPalette(this.skinFeatured)
		},
		styles: function(){
			return {
				featured: {
					background: `rgba(0, 28, 34, 0.7)`
				},
				title: {
					color: 'white'
				}
			}
		},
	},

	methods: {
	},
}

</script>

<!-- ============== STYLE ============== -->
<style>

	#featured {
		padding: 10px;
		border-radius: 5px;
		box-shadow: 1px 1px 25px rgba(0,0,0,0.15);
	}

	.title {
		font-size: 1.3em;
		margin: 10px 0px;
	}

</style>
