import getType from './get-type'

it('getType number 类型', () => {
    expect(getType(1)).toBe('number')
    expect(getType(1.1)).toBe('number')
    expect(getType(1e10)).toBe('number')
    expect(getType(1e-10)).toBe('number')
    expect(getType(Infinity)).toBe('number')
    expect(getType(NaN)).toBe('number')
})

it('getType string 类型', () => {
    expect(getType('')).toBe('string')
    expect(getType('1')).toBe('string')
    expect(getType('1.1')).toBe('string')
    expect(getType('1e10')).toBe('string')
    expect(getType('1e-10')).toBe('string')
    expect(getType('Infinity')).toBe('string')
    expect(getType('NaN')).toBe('string')
})

it('getType undefined 类型', () => {
    expect(getType(undefined)).toBe('undefined')
    expect(getType()).toBe('undefined')
})
it('getType null 类型', () => {
    expect(getType(null)).toBe('null')
})
it('getType symbol 类型', () => {
    expect(getType(Symbol())).toBe('symbol')
})
it('getType function 类型', () => {
    expect(getType(() => { })).toBe('function')
})

it('getType boolean 类型', () => {
    expect(getType(true)).toBe('boolean')
    expect(getType(false)).toBe('boolean')
})

it('getType object 类型', () => {
    expect(getType({})).toBe('object')
    expect(getType({ a: 1 })).toBe('object')
    expect(getType({ a: { b: 1 } })).toBe('object')
    expect(getType({ a: { b: { c: 1 } } })).toBe('object')
})
it('getType array 类型', () => {
    expect(getType([])).toBe('array')
    expect(getType([1])).toBe('array')
    expect(getType([1, 2])).toBe('array')
    expect(getType([1, 2, 3])).toBe('array')
})

it('getType map 类型', () => {
    expect(getType(new Map())).toBe('map')
    expect(getType(new Map([[1, 2]]))).toBe('map')
    expect(getType(new Map([[1, 2], [3, 4]]))).toBe('map')
})

it('getType set 类型', () => {
    expect(getType(new Set())).toBe('set')
    expect(getType(new Set([1]))).toBe('set')
    expect(getType(new Set([1, 2]))).toBe('set')
    expect(getType(new Set([1, 2, 3]))).toBe('set')
})
