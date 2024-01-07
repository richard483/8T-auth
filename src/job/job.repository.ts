import { HttpException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { JobUpdateDto } from './dto/job-update.dto';
import { JobCreateDto } from './dto/job-create.dto';
import { JobVacancy } from '@prisma/client';
import { JobFilterRequest } from './dto/job-filter.request';
import { pagination, returnablePaginated } from '../prisma/prisma.util';

@Injectable()
export class JobRepository {
  public model;
  private orderBy;
  private field;

  constructor(private prisma: PrismaService) {
    this.model = this.prisma.jobVacancy;

    this.orderBy = {
      title: { title: 'asc' },
      '-title': { title: 'desc' },
      createdAt: { createdAt: 'asc' },
      '-createdAt': { createdAt: 'desc' },
      description: { description: 'asc' },
      '-description': { description: 'desc' },
    };

    this.field = {
      description(keyword: string) {
        return {
          description: {
            contains: keyword || '',
          },
        };
      },
      title(keyword: string) {
        return {
          title: {
            contains: keyword || '',
          },
        };
      },
    };
  }

  async create(job: JobCreateDto): Promise<JobVacancy> {
    return this.prisma.jobVacancy.create({
      data: job,
    });
  }

  async delete(jobId: string): Promise<JobVacancy> {
    return this.prisma.jobVacancy.delete({
      where: {
        id: jobId,
      },
    });
  }

  async update(jobId: string, job: JobUpdateDto): Promise<JobVacancy> {
    return this.prisma.jobVacancy.update({
      where: {
        id: jobId,
      },
      data: job,
    });
  }

  async getById(jobId: string): Promise<JobVacancy> {
    return this.prisma.jobVacancy.findUnique({
      where: {
        id: jobId,
      },
    });
  }

  async findManyByFieldAndSortBy(reqData: JobFilterRequest): Promise<any> {
    const result = this.prisma.jobVacancy.findMany({
      ...pagination(reqData.page, reqData.size),
      where: this.field[reqData.field]
        ? this.field[reqData.field](reqData.keyword)
        : this.field['description'](reqData.keyword),
      orderBy: this.orderBy[reqData.sort] || this.orderBy['-createdAt'],
    });

    const total = this.prisma.jobVacancy.count({
      where: this.field[reqData.field]
        ? this.field[reqData.field](reqData.keyword)
        : this.field['description'](reqData.keyword),
    });

    return Promise.all([result, total])
      .then((values) => {
        const [data, total] = values;
        return returnablePaginated(data, total, reqData.page, reqData.size);
      })
      .catch((e) => {
        console.log(
          '#JobRepository findManyByFieldAndSortBy error caused by: ',
          e,
        );
        throw new HttpException('INVALID_QUERY_REQUEST', 400);
      });
  }
}
