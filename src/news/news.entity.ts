import{
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne,
} from 'typeorm';

@Entity()
export class News{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    title: string;

    @Column({ length: 2500 })
    content: string;

    @Column({ length: 100 })
    publish_date: string;

    @Column({ length: 250 })
    author: string;
 

//    @ManyToOne(() => Universe, (universe) => universe.heroes)
//   universe: Universe;

  // @Column({ default: 0, nullable: true })
  // totalStrength?: number;

  // @ManyToMany(() => Power)
  // @JoinTable()
  // powers: Power[];
}