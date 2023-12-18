// import { Test, TestingModule } from '@nestjs/testing';
// import { DeepMocked, createMock } from '@golevelup/ts-jest';
// import { CanActivate, HttpStatus } from '@nestjs/common';
// import { JwtAuthGuard } from '../../auth/jwt/jwt-auth.guard';
// import { RoleGuard } from '../../auth/roles/role.guard';
// import { RatingController } from '../payment.controller';
// import { RatingService } from '../payment.service';
// import { IRating } from '../interface/payment.interface';
// import { RatingCreateDto } from '../dto/payment-request-create.dto';
// import { RatingUpdateDto } from '../dto/rating-update.dto';

// describe('RatingController', () => {
//   let controller: RatingController;
//   let ratingService: DeepMocked<RatingService>;
//   const mockFailGuard: CanActivate = {
//     canActivate: jest.fn().mockReturnValue(true),
//   };
//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       providers: [RatingService],
//       controllers: [RatingController],
//     })
//       .useMocker(createMock)
//       .overrideGuard(JwtAuthGuard)
//       .useValue(mockFailGuard)
//       .overrideGuard(RoleGuard)
//       .useValue(mockFailGuard)
//       .compile();
//     controller = module.get<RatingController>(RatingController);
//     ratingService = module.get(RatingService);
//   });

//   afterEach(() => {
//     jest.resetAllMocks();
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });

//   it('craeteRating success', async () => {
//     const createRatingDTO: RatingCreateDto = {
//       userId: 'test',
//       givenByUserId: 'test',
//       ratingOf10: 9,
//     };

//     const mockJob: IRating = {
//       id: 'ratingId',
//       givenByUserId: 'userId',
//       ratingOf10: 9,
//     };

//     const createSpy = jest
//       .spyOn(ratingService, 'create')
//       .mockResolvedValue(mockJob);

//     const statusSpy = jest.fn().mockReturnThis();
//     const jsonSpy = jest.fn().mockReturnValue(mockJob);

//     const mockRes = {
//       status: statusSpy,
//       json: jsonSpy,
//     };

//     const res = await controller.createRating(mockRes, createRatingDTO);

//     expect(createSpy).toBeCalledWith(createRatingDTO);
//     expect(res).toEqual(mockJob);

//     createSpy.mockRestore();
//   });
//   it('craeteRating fail error', async () => {
//     const mockResponse = {
//       status: HttpStatus.I_AM_A_TEAPOT,
//       message: 'GENERAL_ERROR',
//     };

//     const createSpy = jest
//       .spyOn(ratingService, 'create')
//       .mockRejectedValue(mockResponse);

//     const statusSpy = jest.fn().mockReturnThis();
//     const jsonSpy = jest.fn().mockReturnValue(mockResponse);

//     const mockRes = {
//       status: statusSpy,
//       json: jsonSpy,
//     };

//     try {
//       await controller.createRating(mockRes, null);
//     } catch (e) {
//       expect(createSpy).toBeCalledWith(null);
//       expect(e).toEqual(mockResponse);

//       createSpy.mockRestore();
//     }
//   });
//   it('updateRating success', async () => {
//     const ratingUpdateDto: RatingUpdateDto = {
//       id: 'randomId',
//       userId: 'test',
//       givenByUserId: 'test',
//       ratingOf10: 9,
//     };
//     const mockJob: IRating = {
//       id: 'ratingId',
//       givenByUserId: 'userId',
//       ratingOf10: 9,
//     };

//     const updateSpy = jest
//       .spyOn(ratingService, 'update')
//       .mockResolvedValue(mockJob);

//     const statusSpy = jest.fn().mockReturnThis();
//     const jsonSpy = jest.fn().mockReturnValue(mockJob);

//     const mockRes = {
//       status: statusSpy,
//       json: jsonSpy,
//     };

//     const res = await controller.updateRating(mockRes, ratingUpdateDto);

//     expect(updateSpy).toBeCalledWith({
//       id: 'randomId',
//       givenByUserId: 'test',
//       ratingOf10: 9,
//       userId: 'test',
//     });
//     expect(res).toEqual(mockJob);

//     updateSpy.mockRestore();
//   });
//   it('updateRating fail error', async () => {
//     const ratingUpdateDto: RatingUpdateDto = {
//       id: 'randomId',
//       userId: 'test',
//       givenByUserId: 'test',
//       ratingOf10: 9,
//     };
//     const mockResponse = {
//       status: HttpStatus.I_AM_A_TEAPOT,
//       message: 'GENERAL_ERROR',
//     };

//     const updateSpy = jest
//       .spyOn(ratingService, 'update')
//       .mockRejectedValue(mockResponse);

//     const statusSpy = jest.fn().mockReturnThis();
//     const jsonSpy = jest.fn().mockReturnValue(mockResponse);

//     const mockRes = {
//       status: statusSpy,
//       json: jsonSpy,
//     };

//     try {
//       await controller.updateRating(mockRes, ratingUpdateDto);
//     } catch (e) {
//       expect(updateSpy).toBeCalledWith({
//         id: 'randomId',
//         userId: 'test',
//         givenByUserId: 'test',
//         ratingOf10: 9,
//       });
//       expect(e).toEqual(mockResponse);

//       updateSpy.mockRestore();
//     }
//   });
// });
