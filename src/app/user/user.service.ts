import { Injectable, Inject } from '@nestjs/common';
import { UserRepositoryName } from './model/user.repository';
import { Repository } from 'typeorm';
import { User } from './model/user.entity';

@Injectable()
export class UserService {
  constructor(
    @Inject(UserRepositoryName)
    private userRepository: Repository<User>,
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async find(id: number): Promise<User | null> {
    return this.userRepository.findOne(id);
  }

  async save(user: User): Promise<User> {
    return this.userRepository.save(user);
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
