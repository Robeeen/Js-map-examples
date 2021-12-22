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
    {
      name: 'susy',
      age: 30,
      position: 'messenger'
    }
  ];

//a good example of .map()
// returns a new array
// does not change the size of original array (unlike filter)
// uses values from original array when making new one
// will integrate the Unique Values.

//grab all the ages from array: & Unique values
const ages = ['all', ...new Set(people.map((person) => person.age))];
console.log(ages);

const getDiv = document.querySelector('#ages');

getDiv.innerHTML = ages;

//grab all name + make it uppercase & grab all ages and multiply by 2

const newAge = people.map((person) => {
    return  {
        Name: person.name.toUpperCase(),
        NewAge: person.age * 2
    }
})
console.log(newAge);

//grab the name to show in Div on index.html (innerHTML)
const names = ['all', ...new Set(people.map((item) => `${item.name}`))];

//get the id of the div.
const result =  document.querySelector('#result');

//Assign the data into Div ID & get the unique values only.
result.innerHTML = names.map((names) => {
    return `<button> ${names} </button>`
}).join(''); // join to remove the (,)
