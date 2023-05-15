/**
 * @description 实现 new
 */
export function customNew(constructor: Function, ...args: any[]) {
    // 1. 创建一个空对象，继承 constructor 的原型
    const obj = Object.create(constructor.prototype);
    // 2. 将 obj 作为 this ，执行 constructor ，传入参数
    constructor.apply(obj, args);
    // 3. 返回 obj
    return obj;
}
