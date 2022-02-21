export const SEARCH_DATA_REQUEST =  "SEARCH_DATA_REQUEST";
export const SEARCH_DATA_SUCCESS =  "SEARCH_DATA_SUCCESS";
export const SEARCH_DATA_ERROR =  "SEARCH_DATA_ERROR";

export const LOCATION_DATA_REQUEST =  "LOCATION_DATA_REQUEST";
export const LOCATION_DATA_SUCCESS = "LOCATION_DATA_SUCCESS";
export const LOCATION_DATA_ERROR = "LOCATION_DATA_ERROR";

export const WEATHER_DATA_REQUEST = "WEATHER_DATA_REQUEST";
export const WEATHER_DATA_SUCCESS =  "WEATHER_DATA_SUCCESS";
export const WEATHER_DATA_ERROR =  "WEATHER_DATA_ERROR";

export const SET_TEMPERATURE_UNIT = "SET_TEMPERATURE_UNIT";

export const getSearchData = (name) => ({
  type: SEARCH_DATA_REQUEST,
  payload: name
})

export const getSearchDataSuccess = (searchData) => {
  return {
  type: SEARCH_DATA_SUCCESS,
  payload: searchData
}}

export const getSearchDataError = (error) => ({
  type: SEARCH_DATA_ERROR,
  payload: error
})

export const getLocationData = () => ({
  type: LOCATION_DATA_REQUEST
})

export const getLocationDataSuccess = (locationData) => ({
  type: LOCATION_DATA_SUCCESS,
  payload: locationData
})

export const getLocationDataError = (error) => ({
  type: LOCATION_DATA_ERROR,
  payload: error
})

export const getWeatherData = (latitude, longitude, timezone, temperatureUnit) => ({
  type: WEATHER_DATA_REQUEST,
  payload: {
    latitude,
    longitude,
    timezone,
    temperatureUnit
  }
})

export const getWeatherDataSuccess = (weatherData) => ({
  type: WEATHER_DATA_SUCCESS,
  payload: weatherData
})

export const getWeatherDataError = (error) => ({
  type: WEATHER_DATA_ERROR,
  payload: error
})

export const setTemperatureUnit = (unit) => ({
  type: SET_TEMPERATURE_UNIT,
  payload: unit
})

