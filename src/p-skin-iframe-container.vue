// ============== TEMPLATE ==============
<template>
	<div id="iframe-area">
		<div v-if="videoType == 'spotlight'" class="iframe-container">
			<div class="iframe-borders"
			:style="styles.iframe">
				<iframe
				class="iframe"
				:src="'https://www.youtube.com/embed/'+skinToDisplay.youtube+iframeParams"
				:style="styles.iframe"
				/>
			</div>
		</div>
		<div v-if="videoType == 'chroma'" class="iframe-container">
			<div class="iframe-borders"
			:style="styles.iframeborders">
				<iframe
				class="iframe"
				:style="styles.iframe"
				:src="'https://www.youtube.com/embed/'+skinToDisplay.chroma+iframeParams"
				/>
			</div>
		</div>
	</div>
</template>

// ============== COMPONENT ==============
<script>
export default {
  name: 'rSkinIframeContainer',
  data() {
    return {
			iframeParams: "?color=white"
				+"&iv_load_policy=3"
				+"&rel=0&showinfo=0"
				+"&start=10"
				+"&modestbranding=1",
			styles: {
				iframe: {
					height: '300px',
					background: 'url("../src/assets/images/loader.svg") center/50% no-repeat',
					backgroundColor: this.colorize(this.colors.DarkMuted, .3),
				},
			}
    }
  },

	props:[
		'skinToDisplay',
		'videoType',
		'colors',
	],

	methods: {

	},

	computed: {
	},

	mounted(){
		var actualWidth = document.getElementById('iframe-area').offsetWidth
		this.styles.iframe.height = 0.5625 * actualWidth + 'px'
	}
}

</script>

// ============== STYLE ==============
<style scoped>

	.iframe-container {
		margin: auto;
		width: 100%;
		transform: translateY(-20px);
	}

	.iframe-borders {
		width: 100%;
		border-radius: 6px;
		overflow: hidden;
	}

	.iframe {
		width: 100%;
		height: 100%;
		border: none;
		object-fit: cover;
		box-shadow: 1px 1px 4px rgba(0,0,0,0.4);
	}

</style>
