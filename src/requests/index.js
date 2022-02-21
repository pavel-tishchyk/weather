import axios from "axios";

const forecast = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
})

const openUv = axios.create({
  baseURL: "https://api.openuv.io/api/v1/",
  headers: {
    "content-type": "application/json",
    "x-access-token": "d6f9fd2971c9f2144a439fddcfb2b88d"
  }
})

const requests = {
  getLocationByIp: async () => (
    await axios.get(`https://api.freegeoip.app/json/?apikey=7af89fd0-8b54-11ec-97bb-4d0f70a824d9`)
      .then(response => response.data)
  ),

  getSearchDataByName: async (name) => (
    await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${name}`)
      .then(response => response.data)
  ),

  getWeatherData: async (latitude, longitude, timezone, temperatureUnit) => (
    await forecast.get(`forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,windspeed_10m,`
    +`winddirection_10m,relativehumidity_2m,precipitation,weathercode,cloudcover,cloudcover_low,cloudcover_mid,`
    +`cloudcover_high&daily=weathercode,temperature_2m_max,temperature_2m_min,apparent_temperature_max,`
    +`apparent_temperature_min,sunrise,sunset,precipitation_sum,precipitation_hours,windspeed_10m_max,windgusts_10m_max,`
    +`winddirection_10m_dominant,shortwave_radiation_sum&timezone=${timezone}&temperature_unit=${temperatureUnit}`)
      .then(response => response.data)
  ),

  getUvIndex: async (latitude, longitude) => (
    await openUv.get(`uv?lat=${latitude}&lng=${longitude}`)
      .then(response => response.data.result.uv)
  ),

  getMapImage: async (latitude, longitude) => (
    await axios.get(`https://api.mapbox.com/styles/v1/paveltishchyk/ckzq1vcj6001v14qblsoo7p1f/static/${longitude},${latitude},12,0/300x200@2x?access_token=pk.eyJ1IjoicGF2ZWx0aXNoY2h5ayIsImEiOiJja3pweTE1cHEwZ2w2MnBsZzZheHRpazliIn0.ArxpoPY6uF-cXdlSaAic_A`,{ responseType: 'blob' })
      .then(response => response.data)
  ),
}

export default requests;