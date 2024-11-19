import { Test, TestingModule } from '@nestjs/testing';
import { PaymentplansController } from './paymentplans.controller';

describe('PaymentplansController', () => {
  let controller: PaymentplansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PaymentplansController],
    }).compile();

    controller = module.get<PaymentplansController>(PaymentplansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
