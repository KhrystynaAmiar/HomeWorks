const b1 = true;
const b2 = false;

if(b1 && b2) {
    console.log('if worked');
} else {
    console.log('else worked');
}

console.log('------');
if (b1 && b2){
    console.log ('if worked');
} else if (b1 || b2){
    console.log('else worked');
}

