<!-- ============== TEMPLATE ============== -->
<template>
	<section
	id="p-partners"
	>

	<img
	class="partner__logo"
	src="src/assets/images/partners.png"
	alt="NewEngland Logo">

	<h1 class="partner__name">New England LOL</h1>

	<p class="partner__body">
		<strong>New England LOL</strong> is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
		Ut enim ad minim veniam, quis <strong>nostrud exercitation ullamco</strong> laboris nisi ut aliquip ex ea commodo consequat. <br><br>
		Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
		Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	</p>
	<vButton type="newengland"/>

	</section>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'pPartners',
  data() {
    return {
		}
	},

	props:[
	],

	methods: {
	},

	computed: {
	},
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	#p-partners {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 30px 0px;
	}

	.partner__logo {
		filter: drop-shadow(1px 1px 10px rgba(0,0,0,.2));
		width: 200px;
	}

	.partner__name {
		font-size: 3em;
		text-shadow: 3px 3px 0px rgba(0,28,34,.5);
		margin: 20px 0px;
	}

	.partner__body {
		width: 80%;
		padding: 10px;
		background-color: rgba(0,28,34,.5);
		border-radius: 5px;
		text-shadow: 1px 1px 3px rgba(0,0,0,.2);
		/* box-shadow: 1px 1px 5px rgba(0,0,0,.2); */
	}

</style>
