const person = {
    name: 'sodor uddin',
    age: 25,
    profession: 'developer',
    salary: 25000,
    married: true,
   ' fav Places': ['bandorban', 'saintmartin', 'kuakata']
}

person.salary = 30000;
person['age'] = 26;
person[' fav Places'] = ['maldives', 'bali', 'pataya'];

const propName = 'profession';
person[propName] = 'devops'
console.log(person);