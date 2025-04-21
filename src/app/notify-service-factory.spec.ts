import { NotifyServiceFactory } from './notify-service-factory';

describe('NotifyServiceFactory', () => {
  it('should create an instance', () => {
    expect(new NotifyServiceFactory()).toBeTruthy();
  });
});
