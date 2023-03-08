
const car = {name: 'Mazda 6', itv: [2015, 2011, 2020] }

let {name} = car;
let{itv} = car;

let [itv1, itv2, itv3] = car.itv;

console.log(name);
console.log(itv);
console.log(`ITV 1: ${itv1}, ITV 2: ${itv2}, ITV 3: ${itv3}`);