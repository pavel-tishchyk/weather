import { call, put, takeLatest } from 'redux-saga/effects'
import { SEARCH_DATA_REQUEST, SEARCH_DATA_SUCCESS, SEARCH_DATA_ERROR,
  LOCATION_DATA_REQUEST, LOCATION_DATA_SUCCESS, LOCATION_DATA_ERROR,
  WEATHER_DATA_REQUEST, WEATHER_DATA_SUCCESS, WEATHER_DATA_ERROR } from "../actions/weather";
import requests from "../requests";

function* fetchLocationData() {
  try {
    const {city, country_code, latitude, longitude, time_zone, region_name} = yield call(requests.getLocationByIp);
    const locationData = {name: city, country_code, latitude, longitude, timezone: time_zone, admin1: region_name};
    yield put({type: LOCATION_DATA_SUCCESS, payload: locationData});
  } catch (e) {
    yield put({type: LOCATION_DATA_ERROR, error: e.message});
  }
}

function* fetchSearchData({payload}) {
  try {
    const response = yield call(requests.getSearchDataByName, payload);
    yield put({type: SEARCH_DATA_SUCCESS, payload: response.results });
  } catch (e) {
    yield put({type: SEARCH_DATA_ERROR, error: e.message});
  }
}

function* fetchWeather({payload}) {
  try {
    const {latitude, longitude, timezone, temperatureUnit} = payload;

    const weatherData = yield call(requests.getWeatherData, latitude, longitude, timezone, temperatureUnit);
    // const uv = yield call(requests.getUvIndex, payload.latitude, payload.longitude);
    yield put({type: WEATHER_DATA_SUCCESS, payload: {...weatherData, uv: 5}});
  } catch (e) {
    yield put({type: WEATHER_DATA_ERROR, error: e.message});
  }
}

function* weatherSaga() {
  yield takeLatest(LOCATION_DATA_REQUEST, fetchLocationData);
  yield takeLatest(SEARCH_DATA_REQUEST, fetchSearchData);
  yield takeLatest(WEATHER_DATA_REQUEST, fetchWeather);
}

export default weatherSaga;
