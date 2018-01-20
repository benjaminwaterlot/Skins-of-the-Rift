var isItNew = (releaseDate) => {
	var today = new Date()
	var before = new Date(releaseDate)
	if ((before.getTime() + (40 * 24 * 60 * 60 * 1000) ) > today.getTime()) {
		return true
	} else {
		return false
	}
}
export {isItNew}

var returnBadgeDescription = (skinToCheckBadges, badge) => {
	var skinName = skinToCheckBadges.skin

	var returnAgeInString = function(age){
		return age > 1
		? `was released ${age} days ago`
		: age = 1
		? `was released yesterday!`
		: `was released today!`
	}

	var howOldIsIt = (skinToAssertAge) => {
		var skinReleaseDate = skinToAssertAge.releasedate
		var today = new Date()
		var dayOfRelease = new Date(skinReleaseDate)
		return Math.floor((today.getTime() - dayOfRelease.getTime()) / (24 * 60 * 60 * 1000))
	}

	switch (badge) {
		case 'chroma':
			return `${skinName} has chroma variants,
			each available for 290 RP.`
			break
		case 'currentlyInSales':
			return `${skinName} is on sales until ${skinToCheckBadges.saleend}.`
			break
		case 'plannedSales':
		return `${skinName} will be on sales later in ${skinToCheckBadges.sale}!`
			break
		case 'newSkin':
			var age = howOldIsIt(skinToCheckBadges)
			return `${skinName} ${returnAgeInString(age)}`
			break
		case 'futureSkin':
		return `${skinName} is not released yet!`
			break
		default:
			break
	}
}
export {returnBadgeDescription}

var isItSingle = (length) => {
	if (length === 0 || length === 1) {
		return ""
	} else {
		return "s"
	}
}
export {isItSingle}

var isItUnique = (occurence, list) => {
	return !list.includes(occurence)
}
export {isItUnique}

var isSingleChamp = (filtered) => {
	var o = true
	for (var i = 0; i < filtered.length; i++) {
		if (filtered[i].champion !== filtered[0].champion) {
			o = false
		}
	}
	if (o) {
		return true
	} else {
		return false
	}
}
export {isSingleChamp}

var fixChamp = (name) => {
	var fixed = name.toLowerCase().replace(" ", "-").replace("'", "")
	return fixed
}
export {fixChamp}

var isItAvailable = (price) => {
	if (price !== "/") {
		return true
	} else {
		return false
	}
}
export {isItAvailable}


// COLORING THE UI

import colorsdb from './colorsdb.json'
function createPalette(thisSkin) {
	var rawColors = colorsdb.find(val =>
		val.Skin === thisSkin.ident
	)

	if(!rawColors){
		console.warn(`ERROR : THIS SKIN : ${thisSkin.ident} IS NOT PRESENT IN COLORSDB`)
		rawColors = colorsdb.find(val => val.Skin === 'ezreal-explorer' )
	}

	if (rawColors.Vibrant === "none") {
		console.warn(`THIS SKIN : ${thisSkin.ident} has no Vibrant`)
		rawColors.Vibrant = rawColors.Muted
	}

	if (rawColors.Muted === "none") {
		console.warn(`THIS SKIN : ${thisSkin.ident} has no Muted : ${rawColors.Muted}`)
		rawColors.Muted = rawColors.Vibrant
	}

	if (rawColors.LightVibrant === "none") {
		const inter = (100 - rawColors.Vibrant.l) / 2
		rawColors.LightVibrant = {
			"h": rawColors.Vibrant.h,
			"s": rawColors.Vibrant.s,
			"l": rawColors.Vibrant.l + inter
		}
	}

	return (rawColors)
}
export {createPalette}

function colorize(raw, opacity, param){
	if (opacity){var intro = `hsla`, op = `, ${opacity}`}
	else {var op = '', intro = `hsl`}


	if(Array.isArray(param)){
		param[0] === null
		? ''
		: raw.h = param[0]

		param[1] === null
		? ''
		: raw.s = param[1]

		param[2] === null
		? ''
		: raw.l = param[2]
	}
	else {
		switch (param) {
			case 'light':
				raw.l = _.random(75, 85)
				break
			case 'lighter':
				const prevLightness = raw.l
				if (prevLightness < 70){
					raw.l = 70
					raw.s = raw.s + (70 - prevLightness)
				}
				break
			case 'brighter':
				raw.s = raw.s + 20
				raw.l = raw.l + 10
				if (raw.s > 100) {raw.s = 100}
				if (raw.l > 100) {raw.l = 100}
				break
			case 'desature':
				raw.s = raw.s - 20
				if (raw.s < 0) {raw.s = 0}
				break
			case 'darker':
				raw.l = raw.l - 10
				if (raw.l < 0) {raw.l = 0}
				break
			case 'dark':
				raw.l = _.random(40, 60)
				raw
				break
		}
	}
	return `${intro}(${raw.h}, ${raw.s}%, ${raw.l}%${op})`
}
export {colorize}
