import {
  AutoIncrement,
  BelongsToMany,
  Column,
  CreatedAt,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import Access from './access.model';
import RoleAccess from './role_access.model';

@Table({ tableName: 'role' })
export class Role extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: true })
  id: string;

  @Column
  title: string;

  @Column
  description: string;

  @CreatedAt
  createdAt?: Date;

  @UpdatedAt
  updatedAt?: Date;

  @BelongsToMany(() => Access, () => RoleAccess)
  access: Access[];
}

export default Role;
