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
        return await sqlService.fetchCitiesWeather();
      }
    }
  }
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addCity: {
      type: CityWeatherType,
      args: {
        city: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, args) {
        const res = await citiesService.refreshCity(args.city);
        // tagastab cityWeather objekti
        return res[0];
      }
    },
    removeCity: {
      type: GraphQLString,
      args: {
        city: {type: new GraphQLNonNull(GraphQLString)}
      },
      async resolve(parent, args) {

        const res = await sqlService.removeCity(args.city);
        // siin juba õige asi, aga mis kujul tagastada?
        return Array.isArray(res) ? res[0].city : 'DATABASE_ERROR';
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});