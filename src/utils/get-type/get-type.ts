export function getType(x?: any): string {
    return Object.prototype.toString.call(x).slice(8, -1).toLowerCase();
}
