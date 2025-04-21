import { DataServiceFactory } from './data-service-factory';

describe('DataServiceFactory', () => {
  it('should create an instance', () => {
    expect(new DataServiceFactory()).toBeTruthy();
  });
});
