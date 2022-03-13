import { PhoneBookPipe } from './phone-book.pipe';

describe('PhoneBookPipe', () => {
  it('create an instance', () => {
    const pipe = new PhoneBookPipe();
    expect(pipe).toBeTruthy();
  });
});
