const { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLString } = require("graphql");
const sqlService = require('../service/index');

const CityWeatherType = new GraphQLObjectType({
  name: 'CityWeather',
  fields: () => ({
    id: { type: GraphQLInt },
    city: { type: GraphQLString },
    temperature: { type: GraphQLFloat },
    windspeed: { type: GraphQLFloat },
    humidity: { type: GraphQLFloat },
    unixtime: { type: GraphQLInt }
  })
})

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    cityWeather: {
      type: new GraphQLList(CityWeatherType),
      async resolve(parent, args) {
        const res = await sqlService.fetchCitiesWeather(); 
        return res;
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});