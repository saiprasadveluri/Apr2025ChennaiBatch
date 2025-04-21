import { DataServiceFactoryF } from './data-service-factory';

describe('DataServiceFactory', () => {
  it('should create an instance', () => {
    expect(DataServiceFactoryF(1)).toBeTruthy();
  });
});
