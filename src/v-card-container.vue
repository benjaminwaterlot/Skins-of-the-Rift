<!-- ============== TEMPLATE ============== -->
<template>
	<div id="card-container">
	  <vCard
		v-for="skin in skindbFiltered"
		:key="skin.ref"
		:skin="skin"/>
	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'vCardContainer',
  data() {
    return {

    }
  },

	props:[
		'skindbFiltered'
	],
}

</script>

<!-- ============== STYLE ============== -->
<style>

	#card-container {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		grid-gap: 15px;
	}

	@media (max-width: 600px) {
		
	}

</style>
