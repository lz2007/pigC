import { myInstanceof } from './myInstanceof';

it('myInstanceof null undefined', () => {
    expect(myInstanceof(null, null)).toBe(false);
    expect(myInstanceof(undefined, undefined)).toBe(false);
})

it('myInstanceof string', () => {
    expect(myInstanceof('str', String)).toBe(true);
})

it('myInstanceof number', () => {
    expect(myInstanceof(123, Number)).toBe(true);
})

it('myInstanceof Object', () => {
    expect(myInstanceof({}, Object)).toBe(true);
})

it('myInstanceof Array', () => {
    expect(myInstanceof([], Array)).toBe(true);
})

it('myInstanceof Function', () => {
    expect(myInstanceof(() => { }, Function)).toBe(true);
})

it('myInstanceof 自定义', () => {
    class Foo {}
    const f = new Foo()
    const res1 = myInstanceof(f, Foo)
    expect(res1).toBe(true)

    const res2 = myInstanceof(f, Object)
    expect(res2).toBe(true)
})