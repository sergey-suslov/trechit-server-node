import 'reflect-metadata'
import { config as dotconfig } from 'dotenv'
dotconfig({ path: '.env' })
import { createConnection } from 'typeorm'
import express from 'express'
import config from 'config'
import expressPinoLogger from 'express-pino-logger'
import { loggerExpress, injectLogger } from './utils/logger'
import { errorHandler } from './middlewares/errors'
import routes from './routes'

createConnection()
  .then(() => {
    const app = express()

    app.use(expressPinoLogger({ logger: loggerExpress }))
    app.use(injectLogger)
    app.use(routes)
    app.use(errorHandler)

    app.listen(config.get('port') || 8080, () => console.log('Running on port', config.get('port') || 8080))
  })
  .catch(console.log)
