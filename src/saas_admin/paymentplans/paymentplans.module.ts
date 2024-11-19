import { Module } from '@nestjs/common';
import { PaymentplansService } from './paymentplans.service';
import { PaymentplansController } from './paymentplans.controller';

@Module({
  providers: [PaymentplansService],
  controllers: [PaymentplansController]
})
export class PaymentplansModule {}
