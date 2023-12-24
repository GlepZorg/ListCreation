const animalNames = ['aardvark', 'alligator', 'alpaca', 'bear', 'beaver', 'cat', 'dog', 'elephant',];

const animalsStartingWith =  animalNames.filter((animal) => animal.startsWith('a' || 'b'));

console.log(animalsStartingWith);