const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');
const root = require('path').join(__dirname, 'public')
const citiesService = require('./service/cities');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.use(express.static(root));

app.get('*', (req, res) => {
  res.sendFile('index.html', { root });
})

citiesService.refreshAllCities();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));