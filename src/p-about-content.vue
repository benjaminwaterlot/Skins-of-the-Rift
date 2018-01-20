<!-- ============== TEMPLATE ============== -->
<template>
	<div id="aboutContent">

		<div
		v-if="type === 'about'"
		class="content about"
		>
			<h1
			:style="toStyle.title"
			class="content__title about__title"
			>
			{{ title }}
			</h1>
			<p
			class="body"
			:style="toStyle.body"
			>
			I'm Benjamin, french business school graduate aspiring to learn web development. <br>
			Skins of the Rift is my first project. <br>
			<strong>Want to keep in touch? <a href="https://www.facebook.com/SkinsOfTheRift/">Like our facebook page!</a></strong>
			</p>
		</div>

		<div
		v-if="type === 'support'"
		class="content support"
		>
			<h1
			:style="toStyle.title"
			class="content__title support__title"
			>
			{{ title }}
			</h1>
			<p
			class="body"
			:style="toStyle.body"
			>
			<strong class="big">We need your help!</strong> <br>
			<strong>Speak</strong> about us, <strong>update our database</strong> or <strong>donate</strong> for hosting fees. <br>
			<strong>To help, send me a message on Facebook, I will answer right away :) </strong>
			</p>
		</div>


	</div>
</template>

<!-- ============== COMPONENT ============== -->
<script>
export default {
  name: 'XXX',
  data() {
    return {
    }
  },

	props:[
		'type',
		'toStyle',
		'title',
	],

	methods: {

	}
}

</script>

<!-- ============== STYLE ============== -->
<style scoped>

	h1 {
		margin-top: -10px;
	}

	.body {
	}

	.content__title {
		text-align: left;
		font-size: 3em;
	}

	.big {
		font-size: 1.2em;
	}

</style>
