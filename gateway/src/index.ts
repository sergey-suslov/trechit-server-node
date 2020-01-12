import 'reflect-metadata'
import { config as dotconfig } from 'dotenv'
dotconfig({ path: '.env' })
import { createConnection } from 'typeorm'
import express from 'express'
import config from 'config'
import expressPinoLogger from 'express-pino-logger'
import { loggerExpress, injectLogger } from './utils/logger'

createConnection().then(() => {
  const app = express()

  app.use(expressPinoLogger({ logger: loggerExpress }))
  app.use(injectLogger)

  app.get('/', (req, res) => {
    res.send('Hello')
  })

  app.listen(config.get('port') || 3000, () => console.log('Running on port', config.get('port') || 3000))
})
