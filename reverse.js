const sentence = 'I am Learning Web Dev.';

let reverse = '';
for( const later of sentence){
    // console.log(later);
    reverse = later + reverse;
    
}
// console.log(reverse);


// ignore this solution
let rev = '';
for( let i = 0; i < sentence.length; i++){
    // console.log(i);
    // console.log(sentence[i]);
    
    const later = sentence[i];
    rev = later + rev;
}

//    console.log(rev);

// shortcut
const reversed = sentence.split('').reverse().join('');
console.log(reversed);

