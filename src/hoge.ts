function bind<T, U extends any[], R>(
  func: (arg1: T, ...rest: U) => R,
  value: T
): (...args: U) => R {
  return (...args: U) => func(value, ...args);
}

const add = (x: number, y: number, z: number) => x + y + z;

const add1 = bind(add, 1);

console.log(add1(5, 5));

// Argument of type '"foo"' is not assignable to parameter of type 'number'.
// add1("foo");
