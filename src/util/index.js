export const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

export const getNDicesValue = (NDices) => {
  let dices = {}

  for (let i = 1; i < (NDices + 1); i += 1) {
    dices[`dice${i}`] = generateRandomNumber(1, 6)
  }

  return dices
};