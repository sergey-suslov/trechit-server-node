import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, getRepository } from 'typeorm'
import { generateHash } from '../utils/crypto'

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({
    unique: true,
  })
  email: string

  @Column()
  hash: string

  @Column()
  salt: string

  @CreateDateColumn()
  created: Date

  @UpdateDateColumn()
  updated: Date

  static registerByEmail = (email: string, password: string): Promise<User> => {
    const generated = generateHash(password)
    const repository = getRepository(User)
    const user = new User()
    user.email = email
    user.hash = generated.hash
    user.salt = generated.salt
    return repository.save(user)
  }
}
