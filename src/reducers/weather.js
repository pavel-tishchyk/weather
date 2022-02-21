import { SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS, SEARCH_DATA_ERROR,
  LOCATION_DATA_REQUEST, LOCATION_DATA_SUCCESS, LOCATION_DATA_ERROR,
  WEATHER_DATA_REQUEST, WEATHER_DATA_SUCCESS, WEATHER_DATA_ERROR, SET_TEMPERATURE_UNIT } from "../actions/weather";

const initialState = {
  searchData: [],
  locationData: null,
  temperatureUnit: "celsius", //fahrenheit
  weatherData: null,
  error: null,
  isLoading: false
};

export default function weatherReducer (state = initialState, { payload, type }) {
  switch (type) {
    case SEARCH_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case SEARCH_DATA_SUCCESS:
      return {
        ...state,
        searchData: payload,
        isLoading: false
      }

    case SEARCH_DATA_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false
      }

    case LOCATION_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case LOCATION_DATA_SUCCESS:
      return {
        ...state,
        locationData: payload,
        isLoading: false
      }

    case LOCATION_DATA_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false
      }

    case WEATHER_DATA_REQUEST:
      return {
        ...state,
        isLoading: true
      }

    case WEATHER_DATA_SUCCESS:
      return {
        ...state,
        weatherData: payload,
        isLoading: false
      }

    case WEATHER_DATA_ERROR:
      return {
        ...state,
        error: payload,
        isLoading: false
      }

    case SET_TEMPERATURE_UNIT:
      return {
        ...state,
        temperatureUnit: payload
      }

    default:
      return state;
  }
}