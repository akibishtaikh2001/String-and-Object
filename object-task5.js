const man = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
}

const keys = Object.keys(man);
console.log(keys);

for(const key of keys){
    console.log('Key:', key, '|', typeof man[key]); 
}