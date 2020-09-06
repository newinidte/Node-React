import knex from 'knex'

var knexDB =null

  export  async function getKnexDBConnection() {
      if(!knexDB){
        knexDB = knex({
            client: 'mysql',
            pool:{min:0,max:10,idleTimeoutMillis:5000},
            connection: {
              host: '127.0.0.1',
              user: 'root',
              password: 'Nokia00&',
              database: 'Test',
              charset: 'utf8',
              insecureAuth: true
            }
          })
        }
return knexDB
      }