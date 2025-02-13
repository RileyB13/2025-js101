/*
Identify all of the variables, object property names, prim values, objs in following:
*/

function bar(arg1, arg2) {
  let foo = 'Hello';
  const qux = {
    abc: [1, 2, 3, [4, 5, 6]],
    def: null,
    ghi: NaN,
    jkl: foo,
    mno: arg1,
    pqr: arg2,
  };

  return qux;
}

let result = bar('Victor', 'Antonina');

/*
variables: bar, arg1, arg2, foo, qux, result
prop names: abc, def, ghi, jkl, mno, pqr, 0, 1, 2, 3
prims: 'Hello', 1, 2, 3, 4, 5, 6, null, NaN, all prop names, 'Victor', 'Antonina'
objs: bar, qux, qux[abc], qux[abc][3], result 