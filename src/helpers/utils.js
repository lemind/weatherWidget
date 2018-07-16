const tempDifference = 273.15

export function kelvinToCelsius(tempCelsius) {
	return Math.round(tempCelsius - tempDifference)
}
