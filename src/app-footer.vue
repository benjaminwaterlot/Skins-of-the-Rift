<!-- ============== TEMPLATE ============== -->
<template>
	<div id="footer">
		<div
		id="tlkio"
		data-channel="skingg"
		data-theme="theme--day"
		style="width:100%;height:100%;borderRadius:5px;" />
	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'appFooter',
  data() {
    return {
    }
  },

	props:[

	],

	methods: {

	}
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	#footer {
		display: none;
		width: 600px;
		height: 500px;
		margin-top: 200px;
		background-color: hsl(0,0%,94%);
		padding: 20px;
		border-radius: 5px;
		box-shadow: 1px 1px 5px rgba(0,0,0,0.4);
	}

</style>
