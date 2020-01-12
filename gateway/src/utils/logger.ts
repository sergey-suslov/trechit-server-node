import express from 'express'
import pino from 'pino'
import config from 'config'

export const loggerExpress = pino({
  name: config.get('app.name'),
  prettyPrint: process.env.NODE_ENV === 'development',
  level: 'debug',
})

export const logger = pino({
  name: config.get('app.name'),
  prettyPrint: process.env.NODE_ENV === 'development',
})

export const injectLogger = (req: express.Request, res: express.Response, next: express.NextFunction): void => {
  req.log = logger
  next()
}
