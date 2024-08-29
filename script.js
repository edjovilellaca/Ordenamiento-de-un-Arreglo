const nums = [];
for(let i = 0; i<10; i++){
    nums.push(Math.floor(Math.random()*10));
}
console.log(nums);           //Desordenado
console.log(nums.sort());    //Ordenado