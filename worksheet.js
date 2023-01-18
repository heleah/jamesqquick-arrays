const characters = [
  {
    name: "Luke Skywalker",
    height: 172,
    mass: 77,
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: 202,
    mass: 136,
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: 150,
    mass: 49,
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: 188,
    mass: 84,
    eye_color: "blue",
    gender: "male",
  },
];

//***MAP***
//1. Get array of all names
const names = characters.map((char) => char.name);
//console.log(names);
//2. Get array of all heights
const heights = characters.map((char) => char.height);
//console.log(heights);
//3. Get array of objects with just name and height properties
const nameAndHeight = characters.map((char) => ({
  name: char.name,
  height: char.height,
}));
//console.log(nameAndHeight);
//4. Get array of all first names
const firstNames = characters.map((char) => char.name.split(" ")[0]);
//console.log(firstNames);

//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, curr) => acc + curr.mass, 0);
//console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((acc, curr) => acc + curr.height, 0);
//console.log(totalHeight);
//3. Get total number of characters by eye color
const charsByEyeColor = characters.reduce((acc, curr) => {
  const color = curr.eye_color;
  acc[color] ? acc[color]++ : (acc[color] = 1);
  return acc;
}, {});
//console.log(charsByEyeColor);
//4. Get total number of characters in all the character names
const totalCharNameChars = characters.reduce(
  (acc, curr) => acc + curr.name.length,
  0
);
//console.log(totalCharNameChars);

//***FILTER***
//1. Get characters with mass greater than 100
const greater100Chars = characters.filter((char) => char.mass > 100);
//console.log(greater100Chars);
//2. Get characters with height less than 200
const heightBelow200 = characters.filter((char) => char.height < 200);
//console.log(heightBelow200);
//3. Get all male characters
const maleChars = characters.filter((char) => char.gender === "male");
//console.log(maleChars);
//4. Get all female characters
const femaleChars = characters.filter((char) => char.gender === "female");
//console.log(femaleChars);

//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b) => b.mass - a.mass);
//console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a, b) => b.height - a.height);
//console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a, b) => (a.name < b.name ? -1 : 1));
//console.log(byName);
//4. Sort by gender
const byGender = characters.sort((a, b) => (a.gender === "female" ? -1 : 1));
//console.log(byGender);

//***EVERY***
//1. Does every character have blue eyes?
const allBlueEyes = characters.every((char) => char.eye_color === "blue");
//console.log(allBlueEyes);
//2. Does every character have mass more than 40?
const allAbove40 = characters.every((char) => char.mass > 40);
//console.log(allAbove40);
//3. Is every character shorter than 200?
const allShorter200 = characters.every((char) => char.height < 200);
//console.log(allShorter200);
//4. Is every character male?
const allMale = characters.every((char) => char.gender === "male");
//console.log(allMale);

//***SOME***
//1. Is there at least one male character?
const isMaleChar = characters.some((char) => char.gender === "male");
//console.log(isMaleChar);
//2. Is there at least one character with blue eyes?
const hasBlueEyes = characters.some((char) => char.eye_color === "blue");
//console.log(hasBlueEyes);
//3. Is there at least one character taller than 210?
const taller210 = characters.some((char) => char.height > 210);
//console.log(taller210);
//4. Is there at least one character that has mass less than 50?
const less50 = characters.some((char) => char.mass < 50);
//console.log(less50);
