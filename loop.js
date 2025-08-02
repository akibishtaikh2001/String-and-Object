const moblie = {
    brand: 'samsung',
    price: 25000,
    color: 'black',
    camera: '12mp',
    isNew: true
}

// for of : array
// for in : object
for (const prop in moblie) {
    console.log(prop);
    console.log(moblie[prop]);
    
}

const keys = Object.keys(moblie);
console.log(keys);

for(const key of keys){
    console.log(key,':', moblie[key]); 
}