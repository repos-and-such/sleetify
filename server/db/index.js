const { Pool } = require('pg');

const connectionString = 'postgres://htjelcdusqmenb:e2acb9b2757e8d84dfb4071f007e69ec78ceaa69ee197bd96e9bd95803aa2ee6@ec2-54-75-231-215.eu-west-1.compute.amazonaws.com:5432/dfv17niueuioor' 
const pool = new Pool({
  connectionString: connectionString,
  ssl: { rejectUnauthorized: false } 
})

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  process.exit(-1);
})

module.exports = pool;