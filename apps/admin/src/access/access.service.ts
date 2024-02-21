import { Access } from '@app/db/models/access.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

@Injectable()
export class AccessService {
  constructor(
    @InjectModel(Access)
    private accessModel: typeof Access,
  ) {}

  async findAll() {
    return await this.accessModel.findAll({
      where: {
        moduleId: 0,
      },
      include: [Access],
    });
  }

  async create(body) {
    await this.accessModel.create(body);
  }

  async update(id, body) {
    await this.accessModel.update(body, { where: { id } });
  }
}