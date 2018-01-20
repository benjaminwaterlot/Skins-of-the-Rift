<!-- ============== TEMPLATE ============== -->
<template>
	<section
	id="p-about"
	>
		<div class="fb-page"
		data-href="https://www.facebook.com/SkinsOfTheRift/"
		data-tabs="timeline"
		data-width="500"
		data-height="1000"
		data-small-header="false"
		data-adapt-container-width="true"
		data-hide-cover="false"
		data-show-facepile="false">
			<blockquote
			cite="https://www.facebook.com/SkinsOfTheRift/"
			class="fb-xfbml-parse-ignore"><a
			href="https://www.facebook.com/SkinsOfTheRift/">Skins of the Rift</a>
			</blockquote>
		</div>


		<div class="wanna-help">
			<h1 class="wanna-help__title">Wanna help?</h1>
			<p class="wanna-help__body">Skins of the Rift is a fan-made website. Help us make it great!</p>
			<div class="wanna-help__buttons">
				<vButton
				class="wanna-help__button"
				type="facebook">
				</vButton>
				<vButton
				class="wanna-help__button"
				label="Follow SotR on Facebook"
				type="discord">
				</vButton>
				<!-- <vButton
				class="wanna-help__button"
				type="paypal">
				</vButton> -->
			</div>

		</div>
	</section>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'pAbout',
  data() {
    return {
		}
	},

	props:[
		'skindb',
	],

	methods: {
	},

	computed: {
	},
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	#p-about {
		display: grid;
		grid-template-columns: 500px 1fr;
		grid-gap: 30px;
		align-items: start;
	}

	.fb-page {
		border-radius: 5px;
		overflow: hidden;
		box-shadow: 1px 1px 10px rgba(0,0,0,0.3);
		width: 500px;
	}

	.wanna-help {
		background-color: rgba(0,28,34,0.8);
		border-radius: 5px;
		padding: 10px 20px 40px 20px;
	}

	.wanna-help__title {
		font-size: 3em;
		text-shadow: 1px 1px 10px rgba(0,0,0,0.4);
	}

	.wanna-help__body {
		text-shadow: 1px 1px 4px rgba(0,0,0,0.4);
	}

	.wanna-help__buttons {
		display: flex;
	}

	@media (max-width: 650px) {
		.fb-page {
			display: none;
		}
	}

	@media (max-width: 900px) {
		#p-about {
			grid-template-columns: 1fr;
		}
		.fb-page {
			margin: auto;
		}
		.wanna-help {
			max-width: 500px;
			margin: auto;
		}
	}
	@media (max-width: 1200px) {
		.wanna-help__buttons {
			flex-direction: column;
			align-items: center;
		}
	}

</style>
