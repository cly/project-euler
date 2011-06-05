var i, ii, sum = 0;
for(i = 0, ii = 1000; i < ii; ++i) {
  if(i % 3 === 0 || i % 5 === 0) {
    sum += i;
  }
}
console.log(sum);
