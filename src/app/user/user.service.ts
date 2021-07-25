import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryName } from './model/user.repository';
import { Repository } from 'typeorm';
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

  async findByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ email });
  }

  async findByCpf(cpf: string): Promise<User | null> {
    return this.userRepository.findOne({ cpf });
  }

  async save(user: UserInterface): Promise<User> {
    return this.userRepository.save({
      ...user,
      password: await generatePassword(user.password),
    });
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
