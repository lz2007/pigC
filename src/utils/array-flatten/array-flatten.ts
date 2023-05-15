/**
 * 写一个函数，实现 Array flatten 扁平化，只减少一个嵌套层级<br>
 * 例如输入 `[1, 2, [3, 4, [100, 200], 5], 6]` 返回 `[1, 2, 3, 4, [100, 200], 5, 6]`
 * @param arr 
 */
function arrayFlatten(arr: Array<any>): Array<any> {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result.push(...arr[i]);
        } else {
            result.push(arr[i]);
        }
    }
    return result;
}

function arrayFlatten2(arr: Array<any>): Array<any> {
    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(arrayFlatten(val)) : acc.concat(val), []);
}
function arrayFlatten3(arr: Array<any>): Array<any> {
    return arr.toString().split(',').map(item => Number(item));
}

export {
    arrayFlatten,
    arrayFlatten2,
    arrayFlatten3
}