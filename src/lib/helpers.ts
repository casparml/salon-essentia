// Get Text dark Color
export function getTextColor(color) {
    let darkColor = getDarkColor(color)
    return darkColor.replace('is-', 'has-text-')
}

// Get Text for Color Highlighted elements like buttons, notification or heros
export function getHighlightTextColor(color) {
    let textColor = (
        color === 'is-light' ||
        color === 'is-white') ? 'is-dark' : //if its light return dark
            (color === 'is-warning') ? getDarkColor(color) : // if its warning return dark contrast
            getLightColor(color)

    return textColor.replace('is-', 'has-text-')
}

// Get contrasting color
export function getContrastColor(color) {
    return (
        color === 'is-light' ||
        color === 'is-white') ? 'is-dark' : //if its light return dark
            (color === 'is-warning') ? 'is-warning-dark' : // if its warning return dark contrast
                color // else return color
}

// Get light background color
export function getLightBackgroundColor(color) {
    let lightColor = getLightColor(color)
    // console.log('HIERO:', color, lightColor.replace('is-', 'has-background-'))
    return lightColor.replace('is-', 'has-background-')
}

// Get Highlight background color
export function getBackgroundColor(color) {
    // console.log('HIERO:', color, lightColor.replace('is-', 'has-background-'))
    return color.replace('is-', 'has-background-')
}

// Get light version of color
export function getLightColor(color) {
    return (!color ? 'is-light' :
        color === 'is-light') ? 'is-light' :
            (color === 'is-white') ? 'is-white' :
                (color === 'is-dark') ? 'is-light' :
                    ( color === "is-black") ? 'is-white' :
                        color + '-light' // else return light version
}

// get dark version of color
export function getDarkColor(color) {
    return (
        color === 'is-light') ? 'is-dark' :
            (color === 'is-white') ? 'is-black' :
                (color === 'is-dark') ? 'is-dark' :
                    ( color === "is-black") ? 'is-black' :
                        color + '-dark' // else return dark version
}


// Group Items by Type
/**
* @description
* Takes an Array<V>, and a grouping function,
* and returns a Map of the array grouped by the grouping function.
*
* @param list An array of type V.
* @param keyGetter A Function that takes the the Array type V as an input, and returns a value of type K.
*                  K is generally intended to be a property key of V.
*
* @returns Map of the array grouped by the grouping function.
*/
// export function groupBy<K, V>(list: Array<V>, keyGetter: (input: V) => K): Map<K, Array<V>> {
//    const map = new Map<K, Array<V>>();
export function groupByType(list) {
	const map = []
	// Each Item
	list.forEach((item) => {
		const key = item.data.type;
		// check if group object exists that has the same key
		const groupIndex = map.findIndex(group => String(group.key) == String(key))
		// If the collection doesnt exist
		if (groupIndex >= 0) {
			map[groupIndex].items.push(item);
		} else {
			map.push({key: String(key), items: new Array(item) });
			const groupIndex = map.findIndex(group => String(group.key) == String(key)) || undefined
		}
	});

	return map;
}