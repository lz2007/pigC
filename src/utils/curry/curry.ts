export function curry(fn: Function) {
    const len = fn.length;
    const args: any[] = [];

    const result = function (...rest: any[]) {
        args.push(...rest);
        if (args.length === len) {
            return fn(...args);
        } else {
            return result;
        }
    }
    return result;
}