import { Test, TestingModule } from '@nestjs/testing';
import { HttpException } from '@nestjs/common';
import { DeepMocked, createMock } from '@golevelup/ts-jest';
import { JobService } from '../job.service';
import { IJob } from '../interface/job.interface';
import { JobRepository } from '../job.repository';

describe('JobService', () => {
  let service: JobService;
  let reposiotry: DeepMocked<JobRepository>;
  let jobMock: IJob;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JobService, JobRepository],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<JobService>(JobService);
    reposiotry = module.get(JobRepository);
    jobMock = {
      id: 'randomId',
      title: 'deez noot',
      description: 'this is description about job that is created for test',
      createdAt: new Date(),
      updatedAt: new Date(),
      companyId: 'randomCompanyId',
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create success', async () => {
    const createJobDto = {
      title: 'test',
      description: 'test',
      companyId: 'test',
    };
    const createSpy = jest
      .spyOn(reposiotry, 'create')
      .mockResolvedValue(jobMock);

    const res = await service.create(createJobDto);

    expect(createSpy).toBeCalledTimes(1);
    expect(createSpy).toBeCalledWith(createJobDto);
    expect(res).toEqual(jobMock);

    createSpy.mockRestore();
  });
  it('delete success', async () => {
    const deleteSpy = jest
      .spyOn(reposiotry, 'delete')
      .mockResolvedValue(jobMock);

    const res = await service.delete('randomId');

    expect(deleteSpy).toBeCalledTimes(1);
    expect(deleteSpy).toBeCalledWith('randomId');
    expect(res).toEqual(jobMock);

    deleteSpy.mockRestore();
  });
});
