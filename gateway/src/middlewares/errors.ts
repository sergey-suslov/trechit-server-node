import express from 'express'
import Boom from '@hapi/boom'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, @typescript-eslint/no-unused-vars
export const errorHandler = (err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  let error: Boom.Boom
  if (Boom.isBoom(err)) {
    error = Boom.boomify(err)
  } else {
    error = Boom.boomify(err, { statusCode: 500 })
  }

  res.status(error.output.statusCode)
  return res.json({
    ...error.output.payload,
    data: error.data,
  })
}
