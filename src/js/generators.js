/**
 * Generates random characters
 *
 * @param allowedTypes iterable of classes
 * @param maxLevel max character level
 * @returns Character type children (ex. Magician, Bowman, etc)
 */
export function* characterGenerator(allowedTypes, maxLevel) {
  // TODO: write logic here
  const rndInd = Math.floor(Math.random() * allowedTypes.length);
  const rndLvl = Math.floor(Math.random() * maxLevel) + 1;
  yield { Char: allowedTypes[rndInd], lvl: rndLvl };
}

export function generateTeam(allowedTypes, maxLevel, characterCount) {
  // TODO: write logic here
  const chars = [];
  for (let i = 0; i < characterCount; i += 1) {
    chars.push(characterGenerator(allowedTypes, maxLevel).next().value);
  }
  return chars;
}
