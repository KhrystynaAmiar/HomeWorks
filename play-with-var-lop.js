const a = true;
const b = false;

console.log(a && b);
console.log(!a);

const c = null;
const d = 2;
const e = c ?? d ?? 4;
console.log(e);
