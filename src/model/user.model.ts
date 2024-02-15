import { Photo } from './photo.model';
import { Column, HasMany, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'user', timestamps: false })
export class User extends Model<User> {
  @Column({ primaryKey: true })
  id: number;

  @Column
  username: string;

  @Column
  password: string;

  @Column
  mobile: string;

  @Column
  email: string;

  @Column
  sex: string;

  @Column
  age: number;

  @Column({ defaultValue: true })
  isActive: boolean;

  @HasMany(() => Photo, 'userId')
  photos: Photo[];
}

export default User;