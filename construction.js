function construct(name) {
  let person = {
    name: name,
    material: "human",
    assemble: true,
    duration: 1000,
  };

  return person;
}

// The following lines of code are not required for the solution, but can be
// used by you to test your solution.
console.log(typeof name);
const somePerson = construct();
console.log("Name is: " + somePerson.name); // should be "Noah"
console.log("Material is: " + somePerson.material); // should be "Human"
console.log("Assamble: " + somePerson.assemble); // should be true
console.log("Duration is: " + somePerson.duration); // should be 1000
