import Vue from 'vue'
import VueRouter from 'vue-router'
import VueTippy from 'vue-tippy'
import toRgba from 'hex-rgba'
// import colorsdb from './colorsdb.js'
// import skindb from './skindb.js'
// import championdb from './championdb.js'
import colorsdb from './colorsdb.json'
import championdb from './championdb.json'
import skindb from './skindb.json'


Vue.use(VueRouter)
Vue.use(VueTippy)

import _ from 'lodash'
import * as my from './myfunctions.js'
Vue.prototype.colorize = my.colorize
Vue.prototype.createPalette = my.createPalette
Vue.prototype.returnBadgeDescription = my.returnBadgeDescription
Vue.prototype._ = _

import app from './app.vue'
import appHeader from './app-header.vue'
import appFooter from './app-footer.vue'

import pAbout from './p-about.vue'

import pPartners from './p-partners.vue'

import pHome from './p-home.vue'
import pHomeLatest from './p-home-latest.vue'
import pHomeFeatured from './p-home-featured.vue'

import pResults from './p-results.vue'
import pResultsError from './p-results-error.vue'
import pResultsSidebar from './p-results-sidebar.vue'
import pResultsBandeau from './p-results-bandeau.vue'

import pSkin from './p-skin.vue'
import pSkinSidebar from './p-skin-sidebar.vue'
import pSkinIframeContainer from './p-skin-iframe-container.vue'
import pSkinBandeau from './p-skin-bandeau.vue'

import vCardContainer from './v-card-container.vue'
import vCard from './v-card.vue'
import vButton from './v-button.vue'

function pResultsProps (route) {
	return {
		skindb: skindb,
		searched: route.params.searched
	}
}

function pageRandomProps (route) {
	return {
		skindb: skindb,
		searched: _.sample(skindb).champion
	}
}

function pSkinProps (route) {
	return {
		skindb: skindb,
		thisSkinIdent: route.params.skinident
	}
}

function pHomeProps (route) {
	return {
		skindb: skindb,
		championdb: championdb
	}
}

function pAboutProps (route) {
	return {
		skindb: skindb,
		colorsdb: colorsdb
	}
}

const routes = [
	{ path: '/search/:searched',
	name:'searchpage',
	component: pResults,
	props: pResultsProps },

	{ path: '/skin/:skinident',
	name:'skinpage',
	component: pSkin,
	props: pSkinProps },

	{ path: '/about',
	name:'about',
	component: pAbout,
	props: pAboutProps},

	{ path: '/',
	name:'homepage',
	component: pHome,
	props: pHomeProps },

	{ path: '/partners',
	name:'partners',
	component: pPartners},
]

const router = new VueRouter({
	mode: 'history',
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

Vue.component('appHeader', appHeader)
Vue.component('appFooter', appFooter)

Vue.component('pAbout', pAbout)

Vue.component('pPartners', pPartners)

Vue.component('pHome', pHome)
Vue.component('pHomeLatest', pHomeLatest)
Vue.component('pHomeFeatured', pHomeFeatured)

Vue.component('pResults', pResults)
Vue.component('pResultsBandeau', pResultsBandeau)
Vue.component('pResultsError', pResultsError)
Vue.component('pResultsSidebar', pResultsSidebar)

Vue.component('pSkin', pSkin)
Vue.component('pSkinBandeau', pSkinBandeau)
Vue.component('pSkinIframeContainer', pSkinIframeContainer)
Vue.component('pSkinSidebar', pSkinSidebar)

Vue.component('vCardContainer', vCardContainer)
Vue.component('vCard', vCard)
Vue.component('vButton', vButton)

new Vue({
  el: '#app',
	router: router,
  render: h => h(app)
})
