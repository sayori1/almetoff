import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Project, ProjectDocument } from './schemas/project.schema';
import { Model, ObjectId } from 'mongoose';
@Injectable()
export class ProjectService {
  constructor(
    @InjectModel(Project.name) private projectModel: Model<ProjectDocument>,
  ) {}
  async create(dto, picture, audio): Promise<Project> {
    const project = await this.projectModel.create({ ...dto });
    return project;
  }
  async getAll(count = 10, offset = 0): Promise<Project[]> {
    const projects = await this.projectModel
      .find()
      .skip(Number(offset))
      .limit(Number(count));
    return projects;
  }
  async getOne(id: ObjectId): Promise<Project> {
    const project = await this.projectModel.findById(id);
    return project;
  }
  async delete(id: ObjectId): Promise<ObjectId> {
    const project = await this.projectModel.findByIdAndDelete(id);
    return project._id;
  }
  async search(query: string): Promise<Project[]> {
    const projects = await this.projectModel.find({
      name: { regex: new RegExp(query, 'i') },
    });
    return projects;
  }
}
