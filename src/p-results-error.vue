// ============== TEMPLATE ==============
<template>
	<div id="error">
		<div class="rounded-cropper">
			<img class="rounded-teemo" alt="teemo 404" src="./assets/portrait-medium/teemo-classic.jpg" />
		</div>
		<p v-if="!skindbFiltered" class="error-message"> <strong>Captain Teemo on duty !</strong> </br> No results to your search. </p>
		<p v-if="skindbFiltered.length > 30" class="error-message"> <strong>Captain Teemo is watching you !</strong> </br> There were too much results. Try to be reasonable. </p>
	</div>
</template>

// ============== COMPONENT ==============
<script>
export default {
  name: 'rResultsError',
  data() {
    return {
    }
  },

	props:[
		'skindbFiltered'
	],

	methods: {

	}
}

</script>

// ============== STYLE ==============
<style>

.error {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 60px 0px;
}
.rounded-cropper {
	display: flex;
	justify-content: center;
	margin: auto;
	width: 200px;
	height: 200px;
	border-radius: 100%;
	overflow: hidden;
	box-shadow: 2px 2px 15px rgba(0,0,0,0.3);
	margin-bottom: 40px;
}
.rounded-teemo {
	position: relative;
	left: 4px;
	bottom: 10px;
	margin: auto;
	width: 110%;
}
.error-message {
	font-size: 1.3em;
	text-shadow: none;
	color: rgba(0,28,34,1);
	font-style: italic;
	text-align: center;
}
.error-message > strong {
	font-size: 2.5em;
	font-weight: bold;
	text-shadow: none;
	color: rgba(0,28,34,1);
	font-style: normal;
}

</style>
