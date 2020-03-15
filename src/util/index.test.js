import { generateRandomNumber, getNDicesValue } from './index';

describe('Util functions', () => {
  it('should generate a random number between 1 and 6', () => {
    const randomNumber = generateRandomNumber(1, 6);

    expect(randomNumber > 0).toBe(true);
    expect(randomNumber < 7).toBe(true);
  });

  it('should generate a number of dices based on a give NDices', () => {
    const dices = getNDicesValue(5);

    expect(Object.keys(dices).length === 5).toBe(true);
  })
})
