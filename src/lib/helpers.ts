export function getTextColor(color) {
    let darkColor = getDarkColor(color)
    return darkColor.replace('is-', 'has-text-')
}

export function getHighlightTextColor(color) {
    let textColor = (
        color === 'is-light' ||
        color === 'is-white') ? 'is-dark' : //if its light return dark
            (color === 'is-warning') ? getDarkColor(color) : // if its warning return dark contrast
            getLightColor(color)

    return textColor.replace('is-', 'has-text-')
}

export function getContrastColor(color) {
    return (
        color === 'is-light' ||
        color === 'is-white') ? 'is-dark' : //if its light return dark
            (color === 'is-warning') ? 'is-warning-dark' : // if its warning return dark contrast
                color // else return color
}

export function getLightBackgroundColor(color) {
    let lightColor = getLightColor(color)
    // console.log('HIERO:', color, lightColor.replace('is-', 'has-background-'))
    return lightColor.replace('is-', 'has-background-')
}

export function getBackgroundColor(color) {
    // console.log('HIERO:', color, lightColor.replace('is-', 'has-background-'))
    return color.replace('is-', 'has-background-')
}

export function getLightColor(color) {
    return (!color ? 'is-light' :
        color === 'is-light') ? 'is-light' :
            (color === 'is-white') ? 'is-white' :
                (color === 'is-dark') ? 'is-light' :
                    ( color === "is-black") ? 'is-white' :
                        color + '-light' // else return light version
}

export function getDarkColor(color) {
    return (
        color === 'is-light') ? 'is-dark' :
            (color === 'is-white') ? 'is-black' :
                (color === 'is-dark') ? 'is-dark' :
                    ( color === "is-black") ? 'is-black' :
                        color + '-dark' // else return dark version
}