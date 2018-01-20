<!-- ============== TEMPLATE ============== -->
<!-- This component's code is UGLY : updated planned :) -->
<template>
	<a
	:href="contentOfButton.link"
	target="_blank"
	>
	<div
	class="v-button"
	:style="styles.button"
	>
		<h3 class="v-button__title">{{contentOfButton.title}}</h3>
		<p class="v-button__body">{{contentOfButton.body}}</p>
	</div>
</a>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'vButton',
  data() {
    return {
    }
  },

	props:[
		'type'
	],

	methods: {

	},

	computed: {
		contentOfButton: function(){
			const typeOfButton = this.type
			var title, body, link
			switch (typeOfButton) {
				case 'facebook':
					title = 'Follow us on Facebook'
					body = 'keep tuned and join the community :)'
					link = 'https://www.facebook.com/SkinsOfTheRift/'
					break

				case 'discord':
					title = 'Join the Discord'
					body = 'discuss, report bugs, improve SotR'
					link = 'https://discord.gg/bmYTAWj'
					break

				case 'paypal':
					title = 'Donate'
					body = 'and help to pay hosting fees of SotR'
					link = 'https://www.facebook.com/SkinsOfTheRift/'
					break

				case 'newengland':
					title = 'Discover New England LOL'
					body = ''
					link = 'https://www.newenglandlol.com/'
					break

				default:
					title = 'Error: no button of this type :' + typeOfButton
					break
			}
			return {title: title, body: body, link: link}
		},
		styles: function(){
			var bgColor = this.type === 'facebook'
			? 'linear-gradient(135deg, hsl(220, 46%, 45%), hsl(220, 46%, 52%))'
			: this.type === 'discord'
			? 'linear-gradient(135deg, hsl(225, 7%, 16%), hsl(225, 7%, 24%))'
			: this.type === 'paypal'
			? 'linear-gradient(180deg, hsl(45, 98%, 70%), hsl(40, 97%, 55%))'
			: this.type === 'newengland'
			? 'linear-gradient(45deg, hsl(193, 57%, 19%), hsl(193, 57%, 30%))'
			: 'white'
			return {
				button: {
					background: bgColor
				}
			}
		},
	},
}

</script>

<!-- ============== STYLE ============== -->
<style>

	.v-button{
		margin: 20px 20px 20px 0px;
		border-radius: 5px;
		box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
		text-align: center;
		display: inline-block;
		padding: 12px 20px;
		text-shadow: 1px 1px 3px rgba(0,0,0,0.2);
		transition: all .2s ease-out;
	}

	.v-button:hover{
		filter: brightness(120%);
		transform: translateY(3px);
	}

	.v-button__title {
		font-size: 1.4em;
	}

	.v-button__body {
		font-weight: 300;
	}

</style>
