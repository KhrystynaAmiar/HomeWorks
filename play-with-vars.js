
function playWithVars() {
    const a = 1;
    let b = 2;
    b = 3;
    b = 'test string';
    const c = 4;

    let e;
    e = a + b;

    console.log(a, b, c, e);

    const booleanVar = true;
    const undefinedVar = undefined;

    console.log(booleanVar, undefinedVar);

    const obj = {
        key: 'value',
        key2: 'value2'

    };
    console.log(obj);

    return obj;

}

playWithVars();

console.log('\n' + playWithVars());
