import express from 'express'
import config from 'config'
import { config as dotconfig } from 'dotenv'
dotconfig({ path: '.env' })
import expressPinoLogger from 'express-pino-logger'
import { loggerExpress, injectLogger } from './utils/logger'

const app = express()

app.use(expressPinoLogger({ logger: loggerExpress }))
app.use(injectLogger)

app.get('/', (req, res) => {
  res.send('Ping')
})

app.listen(config.get('port') || 3000, () => console.log('Running on port', config.get('port') || 3000))
