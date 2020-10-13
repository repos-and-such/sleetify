const pool = require('../db/index')

const executePostgreSQL = async (query) =>  {
  return await (async () => {
    const client = await pool.connect()
    try {
      const res = await client.query(query);
      return res.rows;
    } finally {
      client.release()
    }
  })().catch(err => {
    console.error(err.stack)
    return err.stack;
  })    
}

module.exports = executePostgreSQL;