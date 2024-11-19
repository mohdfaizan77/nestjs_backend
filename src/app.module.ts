import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PrismaModule } from '../prisma/prisma.module';
import { FilterModule } from './saas_admin/filters/filter.module';
import { DashboardModule } from './saas_admin/dashboard/dashboard.module';
import { FeaturesModule } from './saas_admin/features/features.module';
import { PaymentplansModule } from './saas_admin/paymentplans/paymentplans.module';



@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [PrismaModule,
    MongooseModule.forRoot('mongodb://localhost/goodwares'),
    FilterModule,
    DashboardModule,
    FeaturesModule,
    PaymentplansModule],
})
export class AppModule {}
