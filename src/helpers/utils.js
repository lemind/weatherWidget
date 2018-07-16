import { TEMP_DIFFERENCE, IMG_URL } from 'src/config'

const tempDifference = TEMP_DIFFERENCE;

export function kelvinToCelsius(tempCelsius) {
	return Math.round(tempCelsius - tempDifference)
}

export function formWeatherPicSrc(icon) {
	return IMG_URL + icon + '.png'
}