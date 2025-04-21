import { SmsFactory } from './sms-factory';

describe('SmsFactory', () => {
  it('should create an instance', () => {
    expect(new SmsFactory()).toBeTruthy();
  });
});
