import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

export enum TransactionStatus {
    COMPLETED = "completed",
    FAILED = "failed",
    DISCOVERED = "discovered",
  }

@Entity()
export class BlackMarketTransaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column('uuid')
  buyer_id: string;
  @Column('uuid')
  seller_id: string;
  @Column()
  item: string;
  @Column('decimal')
  amount: number;
  @Column({ 
    type: 'enum', 
    enum: TransactionStatus, 
    default: 
    TransactionStatus.FAILED 
  })
  status: TransactionStatus;
}
