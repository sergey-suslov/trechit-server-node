import { Request, Response } from 'express'

interface UserSignInForm {
  email: string
  password: string
}

const signInValidate = (req: Request, res: Response) => {
  const signIn = req.body as UserSignInForm
}
