import moment from "moment";

export const getCurrentDateIndex = (hourly) => (
  hourly.time.findIndex((date) => date.includes(moment().format("YYYY-MM-DDTHH")))
);

export const getCurrentTemperature = (hourly) => Math.round(hourly.temperature_2m[getCurrentDateIndex(hourly)])

export const getCurrentWindSpeed = (hourly) => hourly.windspeed_10m[getCurrentDateIndex(hourly)]

export const getCurrentWindDirection = (hourly) => hourly.winddirection_10m[getCurrentDateIndex(hourly)]

export const getCompassWindDirection = (degrees) => {
// Define array of directions
  const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];

// Split into the 8 directions
  degrees = degrees * 16 / 360;

// round to nearest integer.
  degrees = Math.round(degrees, 0);

// Ensure it's within 0-7
  degrees = (degrees + 16) % 16

  return directions[degrees]
}

export const getCurrentRelativeHumidity = (hourly) => hourly.relativehumidity_2m[getCurrentDateIndex(hourly)]

export const getHumidityStatus = (percents) => {
  if(percents < 30) return "To dry \u{1F44E}";
  else if (percents > 60) return "Too humid \u{1F44E}";
  else return "Comfortably \u{1F44C}"
}

export const getCurrentPrecipitationRate = (hourly) => hourly.precipitation[getCurrentDateIndex(hourly)]

export const getCurrentWeatherCode = (hourly) => hourly.weathercode[getCurrentDateIndex(hourly)]

export const getWeatherCondition = (weatherCode) => {
  switch (weatherCode) {
    case 0: return "Clear sky";

    case 1: return "Mainly clear";
    case 2: return "Partly cloudy";
    case 3: return "Overcast";

    case 45: return "Fog";
    case 48: return "Depositing rime fog";

    case 51:  return "Light drizzle";
    case 53:  return "Moderate drizzle"
    case 55:  return "Dense drizzle";

    case 56: return "Light freezing drizzle";
    case 57: return "Dense freezing drizzle";

    case 61: return "Slight rain";
    case 63: return "Moderate rain";
    case 65: return "Heavy rain";

    case 66: return "Light freezing rain";
    case 67: return "Heavy freezing rain";

    case 71: return "Slight snow fall";
    case 73: return "Moderate snow fall";
    case 75: return "Heavy snow fall";

    case 77: return "Snow grains";

    case 80: return "Slight rain showers";
    case 81: return "Moderate rain showers";
    case 82: return "Violent rain showers";

    case 85: return "Slight snow showers";
    case 86: return "Heavy snow showers";

    case 95: return "Slight or moderate thunderstorm";
    case 96: return "Thunderstorm with slight hail";
    case 99: return "Thunderstorm with heavy hail";

    default: return "Unknown weather condition"
  }
}

export const isDateFormat = (date, format) => moment(date).format(format) === date;

export const isDay = (date, sunrise, sunset) => {
  if (isDateFormat(date, 'YYYY-MM-DD')) return true;
  else return moment(date).isBetween(moment(sunrise), moment(sunset));
}

export const getWeatherIconPath = (weatherCode, date, sunrise, sunset) => {
  const nightIconsCodes = [0, 1, 2, 45, 48, 63, 71, 73, 85, 95, 96];
  const isIconExist = nightIconsCodes.includes((code) => code === weatherCode);

  if(!isDay(date, sunrise, sunset) && isIconExist) return `/icons//night/${weatherCode}.svg`;
  else return `/icons/${weatherCode}.svg`;
}

export const getCurrentCloudCover = (hourly, altitude) => {
  let levels =  {
    3: "cloudcover_low",
    6: "cloudcover_mid",
    9: "cloudcover_high",
    12: "cloudcover"
  }
  return hourly[levels[altitude]][getCurrentDateIndex(hourly)]
}
