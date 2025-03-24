import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Sponsor {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column()
  company_name: string;
  @Column()
  donated_items: string;
  @Column('uuid')
  preferred_fighter: string;
}
