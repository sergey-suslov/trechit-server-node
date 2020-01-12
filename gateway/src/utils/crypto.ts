import config from 'config'
import crypto from 'crypto'

export const generateHash = (string: string): { salt: string; hash: string } => {
  const salt = crypto.randomBytes(config.get('crypto.hash.length')).toString('base64')

  const hash = crypto.pbkdf2Sync(string, salt, 12000, config.get('crypto.hash.length'), 'sha256').toString('base64')
  return {
    salt,
    hash,
  }
}

export const compareHashes = (income: string, hash: string, salt: string): boolean => {
  const hashResult = crypto
    .pbkdf2Sync(income, salt, 12000, config.get('crypto.hash.length'), 'sha256')
    .toString('base64')
  return hash === hashResult
}

export const generateSid = (): string => crypto.randomBytes(config.get('crypto.hash.length')).toString('base64')
