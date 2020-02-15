import { Request, Response, NextFunction } from 'express'
import joi from '@hapi/joi'
import boom from '@hapi/boom'

interface UserSignUpForm<TEmail = string, TPassword = string> {
  email: TEmail
  password: TPassword
}

type UserSignUpFormJoi = UserSignUpForm<joi.StringSchema, joi.StringSchema>

export const signUpValidate = (req: Request, res: Response, next: NextFunction ) => {
  const signUp = req.body as UserSignUpForm
  const joiSignUp: UserSignUpFormJoi = {
    email: joi.string().email(),
    password: joi.string().email(),
  }

  const validator = joi.object(joiSignUp)

  try {
    validator.validate(signUp)
  } catch (error) {
    throw boom.badRequest('Wrong email or password')
  }
  next()
}
