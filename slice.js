const address = 'andorkilla';
const part = address.slice(2, 5);
console.log(part);

const sentence = 'I am a good and hardworking persion.';
// console.log(sentence.split(' '));
console.log(sentence.split('a'));

const friendsstr = 'Rahim,kahim,dahim,lahim,fahim,sahim';
const friends = friendsstr.split(',');
console.log(friends);
const realFriend = [ 'Rahim', 'kahim', 'dahim', 'lahim', 'fahim', 'sahim' ];
console.log(realFriend.join());
console.log(realFriend.join('|'));
console.log(realFriend.join('-'));
