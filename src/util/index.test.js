import { generateRandomNumber } from './index';

describe('Util functions', () => {
  it('should generate a random number between 1 and 6', () => {
    const randomNumber = generateRandomNumber(1, 6);

    expect(randomNumber > 0).toBe(true);
    expect(randomNumber < 7).toBe(true);
  })
})
