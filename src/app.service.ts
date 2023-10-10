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
  
  getProductPrice(sku: string, pricing: any[]): any {
    return pricing.find((p) => p.sku === sku) || {};
  }

  getCategoryName(categoryId: number, categories: any[]): string {
    const category = categories.find((c) => c.id === categoryId);
    return category ? category.name : '';
  }
  
  getProductsAndPrices(): any[] {
    const products = [
      {
        "id":1,
        "sku":"abc",
        "productName":"name 1",
        "category":1
        },
        {
        "id":2,
        "sku":"def",
        "productName":"name 2",
        "category":2
        },
        {
        "id":3,
        "sku":"ghi",
        "productName":"name 1",
        "category":2
        },
        {
        "id":4,
        "sku":"klm",
        "productName":"name 1",
        "category":3
        },
        {
        "id":5,
        "sku":"xyz",
        "productName":"name 1",
        "category":1
        }        
    ];

    const pricing = [
      {
        "sku":"abc",
        "price":10,
        },
        {
        "sku":"def",
        "price":20,
        },
        {
        "sku":"ghi",
        "price":30,
        },
        {
        "sku":"klm",
        "price":40,
        },
        {
        "sku":"xyz",
        "price":50,
        }
    ];

    const categories = [
      {
        "id":1, 
        "name":"category1"
      },
      {
        "id":2,
        "name":"category2"
      },
      {
        "id":3,
        "name":"category3"
      },
      {
        "id":4, 
        "name":"category4"
      },
      {
        "id":5,
        "name":"category5"
      }
    ];

    const productsWithPrices = products.map((product) => {
      const productPricing = this.getProductPrice(product.sku, pricing);
      const categoryName = this.getCategoryName(product.category, categories);

      return {
        id: product.id,
        sku: product.sku,
        productName: product.productName,
        category: product.category,
        price: productPricing.price,
        categoryName,
      };
    });

    return productsWithPrices;
  }

}
