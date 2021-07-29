import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryName } from './model/user.repository';
import { Not, Repository } from 'typeorm';
import { User } from './model/user.entity';
import UserInterface from './interface/user.interface';
import { generatePassword } from './model/hash.provider';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryName)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return await this.userRepository
      .createQueryBuilder()
      .from(User, 'user')
      .select(['user.id', 'user.name', 'user.email'])
      .getMany();
  }

  async find(id: number): Promise<User | null> {
    return this.userRepository.findOne(id);
  }

  async findByEmail(
    email: string,
    userId: null | number = null,
  ): Promise<User | null> {
    if (userId) {
      return this.userRepository.findOne({
        where: {
          id: Not(userId),
          email,
        },
      });
    }
    return this.userRepository.findOne({ email });
  }

  async findByCpf(
    cpf: string,
    userId: null | number = null,
  ): Promise<User | null> {
    if (userId) {
      return this.userRepository.findOne({
        where: {
          id: Not(userId),
          cpf,
        },
      });
    }
    return this.userRepository.findOne({ cpf });
  }

  async save(user: UserInterface): Promise<User> {
    return this.userRepository.save({
      ...user,
      password: await generatePassword(user.password),
    });
  }

  async update(userId: number, userData: UserInterface): Promise<User> {
    await this.userRepository.update(userId, userData);
    return await this.userRepository.findOne(userId);
  }

  async delete(user: User): Promise<boolean> {
    try {
      await this.userRepository.delete(user);
      return true;
    } catch (_err) {
      return false;
    }
  }
}
