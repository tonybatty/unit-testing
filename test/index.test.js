const functions = require('../src/index');

test('Addition', function(){
  const expected = 5;
  const result = functions.add(2, 3);
  expect(result).toBe(expected);
});

test('LongestString',  function(){
  const expected = "orange";
  const result = functions.longestString(["blue", "orange"]);
  expect(result).toBe(expected);
})

test('LongestString',  function(){
  const expected = "perpendicular";
  const result = functions.longestString(["perpendicular", "narrative"]);
  expect(result).toBe(expected);
})

test('l337', function(){
  const expected = "50n681rd"
  const result = functions.l337("songbird");
  expect(result).toBe(expected);
})

test('l337', function(){
  const expected = "70n7"
  const result = functions.l337("tony");
  expect(result).toBe(expected);
})

test('UniqueStrings',  function(){
  const expected = ["orange", "blue"];
  const result = functions.uniqueStrings(["orange", "green", "blue", "green"]);
  expect(result).toEqual(expected);
})

test('UniqueStrings',  function(){
  const expected = ["yellow"];
  const result = functions.uniqueStrings(["orange", "orange", "green", "blue", "yellow", "blue", "green"]);
  expect(result).toEqual(expected);
})

test('developer', function() {
  const expected = {name: "Tony", languages: ["HTML", "CSS", "Javascript"]}
  const developer = new functions.Developer("Tony", ["HTML", "CSS", "Javascript"]);
  expect(developer).toEqual(expected);
})

test('developer', function() {
  const expected = {name: "Bob", languages: ["Java", "Python", "C++"]}
  const developer = new functions.Developer("Bob", ["Java", "Python", "C++"]);
  expect(developer).toEqual(expected);
})

test('DevLanguages', function() {
  const expected = ["HTML", "CSS", "Javascript", "C++"];
  const developer = new functions.Developer("Tony", ["HTML", "CSS", "Javascript"])
  const result = developer.learnLanguage("C++");
  expect(result).toEqual(expected);
})

test('stringsConcat', function() {
  const expected = ["redorangeyellowgreenblueindigoviolet"]
  const result = functions.stringsConcat(["red", 3, "orange", 4, 6, "yellow", 5, 2, "green", "blue", 6, "indigo", 4,  "violet"])
  expect(result).toEqual(expected);
})




