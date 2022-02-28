console.log('conncting hoise boss')

const numbers=[4,5,7,8,9,10,12,15];
// console.log(numbers);
const output=[];

// console.log(output);

const double=(number)=>number*2;

for(const number of numbers){
    const result=double(number);

    output.push(result);
}
console.log(output);

// eikhane frothom a loop korchi
//elemnt diya function re call korsi
// then result gulare niya ekta array te push korsi


