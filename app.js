// Array Data
const people = [
    {
      name: 'bob',
      age: 20,
      position: 'developer',
    },
    {
      name: 'anna',
      age: 25,
      position: 'designer',
    },
    {
      name: 'susy',
      age: 30,
      position: 'the boss',
    },
    {
      name: 'john',
      age: 26,
      position: 'intern',
    },
  ];

//a good example of .map()
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one

//grab all the ages from array:
const ages = people.map((person) => person.age);
console.log(ages);

//grab all name + make it uppercase & grab all ages and multiply by 2

const newAge = people.map((person) => {
    return  {
        Name: person.name.toUpperCase(),
        NewAge: person.age * 2
    }
})
console.log(newAge);

//grab the name and show in Div on index.html (innerHTML)
const names = people.map((item) => `<h3>${item.name}</h3>`);

//get the id of the div.
const result =  document.querySelector('#result');

result.innerHTML = names.join('');
