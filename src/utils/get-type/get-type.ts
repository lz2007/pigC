/**
 * 传入一个变量，能准确的获取它的类型
 * @param x 
 * @returns 返回类型字符串
 */
export function getType(x?: any): string {
    return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
}
