var prev = 1,
    curr = 1,
    temp,
    max = 4000000,
    sum = 0;

while(curr < max){
  if(curr % 2 === 0){
    sum += curr;
  }
  temp = curr;
  curr += prev;
  prev = temp;
}
console.log(sum);
