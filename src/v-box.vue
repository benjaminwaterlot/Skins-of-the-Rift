	// ============== TEMPLATE ==============
<template>
	<div id="box"
	:style="style"
	>
		<slot />
	</div>
</template>

// ============== COMPONENT ==============
<script>
export default {
  name: 'box',
	data(){
		return {
			style:{
				backgroundColor: this.color
			},
		}
	},
	props: [
		'color'
	]
}



</script>

// ============== STYLE ==============
<style>

	h1, h2 {
		text-shadow: none;
	}

	#box {
		padding: 17px;
		background-color: rgba(0,28,34,0.8);
		border-radius: 3px;
		box-shadow: 1px 1px 3px rgba(0,0,0,0.2);
	}

</style>
