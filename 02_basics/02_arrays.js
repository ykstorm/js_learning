const marvel_heros = ["spidey","thor","ironman"]
const dc_heros = ["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1]);
// console.log(marvel_heros[2]);
//  const newheros =   marvel_heros.concat(dc_heros)
// console.log(newheros);
// const all_heros = [...marvel_heros,...dc_heros] //spread operator
// console.log(all_heros)
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(another_array[3][2])
console.log(another_array[5][2][1]) //to find elements in the array
const another_real_array = another_array.flat(Infinity)
console.log(another_real_array)

console.log(Array.isArray("hitesh"))
console.log(Array.from("hitesh"))
console.log(Array.of({name : "hitesh"}))

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))




