export function myInstanceof(instance: any, origin: any): boolean {
    if (instance == null) return false
    let proto = instance.__proto__;
    let prototype = origin.prototype;
    while (true) {
        if (proto === null) {
            return false;
        }
        if (proto === prototype) {
            return true;
        }
        proto = proto.__proto__;
    }
}