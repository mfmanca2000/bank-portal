import { Test, TestingModule } from '@nestjs/testing';
import {ApplicationsService } from './applications.service';

describe('ModulesService', () => {
  let service:ApplicationsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationsService],
    }).compile();

    service = module.get<ApplicationsService>(ApplicationsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
