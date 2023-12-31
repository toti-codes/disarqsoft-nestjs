import { Inject, Injectable, Logger } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { OrderEntity } from '../entities/order.entity';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class OrderService {
  private logger: Logger = new Logger(OrderService.name);

  @Inject(DataSource)
  private readonly datasource: DataSource;

  async getById(id: number): Promise<OrderEntity> {
    const repository = this.datasource.getRepository(OrderEntity);

    return await repository.findOne({
      where: { id },
      relations: ['client', 'vehicle', 'detail', 'detail.product'],
    });
  }

  async list(filter?: string): Promise<OrderEntity[]> {
    const repository = this.datasource.getRepository(OrderEntity);

    const filterQuery = {};
    if (filter) {
      filterQuery['id'] = +filter;
    }

    return await repository.find({
      relations: ['client', 'vehicle'],
      where: filterQuery,
    });
  }

  async save(o: OrderEntity, idUser: number) {
    o.issueDate = new Date();
    o.user = new UserEntity(idUser);
    o.detail.forEach((d) => (d.order = o));
    const repository = this.datasource.getRepository(OrderEntity);

    await repository.save(o);
  }
}
