const { GraphQLObjectType, GraphQLFloat, GraphQLInt, GraphQLList, GraphQLSchema, GraphQLString, GraphQLNonNull, GraphQLScalarType } = require("graphql");
const sqlService = require('../service/sql');
const citiesService = require('../service/cities');

const CityWeatherType = new GraphQLObjectType({
  name: 'CityWeather',
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLInt) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    temperature: { type: GraphQLFloat },
    windspeed: { type: GraphQLFloat },
    humidity: { type: GraphQLFloat },
    unixtime: { type: GraphQLInt }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    citiesWeather: {
      type: new GraphQLList(CityWeatherType),
      async resolve(parent, args) {
        const res = await sqlService.fetchCitiesWeather(); 
        return res;
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCity: {
      type: GraphQLList(CityWeatherType),
      args: {
        city: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, args) {
        const res = await citiesService.refreshCity(args.city);

        if (Array.isArray(res) && res[0].city) {
          citiesService.refreshAllCities();
          return res;
        }
        console.error(res);
      }
    },
    removeCity: {
      type: GraphQLString,
      args: {
        city: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, args) {
        const res = await sqlService.removeCity(args.city);
        citiesService.refreshAllCities();

        return res[0] ? res[0].city : 'Nothing to remove here!';
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});