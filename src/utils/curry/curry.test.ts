import { curry } from './curry'

function add(a: number, b: number, c: number) { return a + b + c }

it("测试curry", () => {
    const curryAdd = curry(add)
    expect(curryAdd(1)(2)(3)).toBe(6)
});