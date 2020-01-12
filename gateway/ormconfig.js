/* eslint-disable @typescript-eslint/no-var-requires */
const config = require('config')

module.exports = {
  type: 'postgres',
  host: 'localhost',
  port: config.get('db.port'),
  username: config.get('db.username'),
  password: config.get('db.password'),
  database: config.get('db.database'),
  synchronize: true,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  subscribers: ['src/subscriber/**/*.ts'],
}
