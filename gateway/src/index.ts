import express from 'express'
import config from 'config'
import { config as dotconfig } from 'dotenv'

dotconfig({ path: '.env' })

const app = express()

app.get('/', (req, res) => res.send('Ping'))

app.listen(config.get('port') || 3000, () => console.log('Running on port', config.get('port') || 3000))
