import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import axios from 'axios';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ) {
  }

  async create(data: any): Promise<User> {
    return this.userRepository.save(data);
  }

  async findOne(conget: any): Promise<User> {
    return this.userRepository.findOne(conget);
  }

  async getUsers(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async getSingleUser(id: number): Promise<User[]> {
    return await this.userRepository.find({
      select: ["name", "email", "id", "mobile_no"],
      where: [{ "id": id }]
    });
  }

  async getRandomJoke(): Promise<String> {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      return response.data.value;
    } catch (error) {
      throw new Error('Failed to fetch Chuck Norris joke.');
    }
  }

}
