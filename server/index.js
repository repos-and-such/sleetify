const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./graphql/schema');
const cors = require('cors');
const path = require('path');
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

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
})

citiesService.refreshAllCities();

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));