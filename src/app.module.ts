import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { JobModule } from './job/job.module';
import { ContractModule } from './contract/contract.module';
import { RatingModule } from './rating/rating.module';
import { ResponseInterceptor } from './interceptors/response.interceptor';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { PaymentModule } from './payment/payment.module';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    UsersModule,
    JobModule,
    ContractModule,
    RatingModule,
    PaymentModule,
    CompanyModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule {}
