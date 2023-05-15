import { arrayFlatten, arrayFlatten2, arrayFlatten3 } from './array-flatten';

it('arrayFlatten Array flatten 扁平化，只减少一个嵌套层级', () => {
    expect(arrayFlatten([1, 2, [3, 4, [100, 200], 5], 6])).toEqual([1, 2, 3, 4, [100, 200], 5, 6]);
});
it('arrayFlatten2 彻底扁平，忽略所有嵌套层级', () => {
    expect(arrayFlatten2([1, 2, [3, 4, [100, 200], 5], 6])).toEqual([1, 2, 3, 4, 100, 200, 5, 6]);
});

it('arrayFlatten3 彻底扁平，忽略所有嵌套层级', () => {
    expect(arrayFlatten3([1, 2, [3, 4, [100, 200], 5], 6])).toEqual([1, 2, 3, 4, 100, 200, 5, 6]);
});

