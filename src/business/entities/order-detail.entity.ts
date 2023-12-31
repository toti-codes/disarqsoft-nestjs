import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { OrderEntity } from './order.entity';
import { ProductEntity } from './product.entity';

@Entity({
  schema: 'das',
  name: 'order_detail',
})
export class OrderDetailEntity {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @ManyToOne(() => OrderEntity, (order) => order.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'order_id',
  })
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (p) => p.id, {
    nullable: false,
  })
  @JoinColumn({
    name: 'product_id',
  })
  product: ProductEntity;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  quantity: number;

  @Column({
    name: 'price',
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  price: number;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  igv: number;

  @Column({
    nullable: false,
    type: 'numeric',
    precision: 10,
    scale: 2,
  })
  total: number;
}
