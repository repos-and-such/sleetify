import axios from 'axios';

class ApiService {
  async fetchCitiesWeather() {
    return await axios({
      url: 'graphql/',
      method: 'post',
      data: {
       query: `
        query {
          citiesWeather {
            id
            city
            temperature
            humidity
            windspeed
            unixtime
          }
        }`
      }
    })
  }

  async addCity(city) {
    city.trim();
    return await axios({
      url: 'graphql/',
      method: 'post',
      data: {
        query: 
          `mutation {
            addCity(city: "${city}")
          }`
       }      
    });
  }

  async removeCity(city) {
    return await axios({
      url: 'graphql/',
      method: 'post',
      data: {
        query:
          `mutation {
            removeCity(city: "${city}")
          }`
       }      
    });
  }
}

export default new ApiService();