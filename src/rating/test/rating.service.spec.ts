import { Test, TestingModule } from '@nestjs/testing';
import { DeepMocked, createMock } from '@golevelup/ts-jest';
import { RatingService } from '../rating.service';
import { RatingRepository } from '../rating.repository';
import { RatingCreateDto } from '../dto/rating-create.dto';
import { RatingUpdateDto } from '../dto/rating-update.dto';
import { Rating } from '@prisma/client';

describe('RatingService', () => {
  let service: RatingService;
  let reposiotry: DeepMocked<RatingRepository>;
  let ratingMock: Rating;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RatingService, RatingRepository],
    })
      .useMocker(createMock)
      .compile();

    service = module.get<RatingService>(RatingService);
    reposiotry = module.get(RatingRepository);
    ratingMock = {
      id: 'randomId',
      recruiterUserId: 'randomUserId',
      ratingOf10: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      userId: 'randomUserId',
    };
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('create success', async () => {
    const createRatingDto: RatingCreateDto = {
      userId: 'randomUserId',
      recruiterUserId: 'randomUserId',
      ratingOf10: 9,
    };
    const createSpy = jest
      .spyOn(reposiotry, 'create')
      .mockResolvedValue(ratingMock);

    const res = await service.create(createRatingDto);

    expect(createSpy).toBeCalledTimes(1);
    expect(createSpy).toBeCalledWith(createRatingDto);
    expect(res).toEqual(ratingMock);

    createSpy.mockRestore();
  });
  it('update success', async () => {
    const ratingUpdate: RatingUpdateDto = {
      id: 'randomId',
      userId: 'randomUserId',
      recruiterUserId: 'randomUserId',
      ratingOf10: 9,
    };
    const updateSpy = jest
      .spyOn(reposiotry, 'update')
      .mockResolvedValue(ratingMock);

    const res = await service.update(ratingUpdate);

    expect(updateSpy).toBeCalledTimes(1);
    const { id, ...jobData } = ratingUpdate;
    expect(updateSpy).toBeCalledWith(id, jobData);
    expect(res).toEqual(ratingMock);

    updateSpy.mockRestore();
  });
});
