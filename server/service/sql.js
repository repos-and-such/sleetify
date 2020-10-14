const pool = require('../db/index');

class PostgreSQLService {

  async fetchCityNames() {
    return await this.executeSQL('select city from city_weather');
  }

  async fetchCitiesWeather() {
    return await this.executeSQL('select * from city_weather');
  };
  

  async persistCityWeather(cityWeather) {
    const { city, temp, windSpeed, humidity, unixTime } = cityWeather;
    const params = [city, temp, windSpeed, humidity, unixTime];

    return await this.executeSQL(
      `
        insert into city_weather (city, temperature, windspeed, humidity, unixtime) 
          values (INITCAP($1), $2, $3, $4, $5) 
          on conflict (city) do update set temperature = $2, 
          windspeed = $3, humidity = $4, unixtime = $5 returning *
      `, params);
  }

  async removeCity(city) {
    const params = [city];
    return await this.executeSQL(`delete from city_weather where city = (INITCAP($1)) returning city`, params);
  }

  async executeSQL(query, params) {
    return await (async () => {
      const client = await pool.connect();
      try {
        const res = await client.query(query, params);
        return res.rows;
      } finally {
        client.release();
      }
    })().catch(err => {
      console.error(err.stack);
      return err.stack;
    })
  }
}

module.exports = new PostgreSQLService();