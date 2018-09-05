const hideCharacters = (str, from = 5) => str.slice(0, from) + str.slice(from + 1).replace(/./g, '*');

export {hideCharacters};
