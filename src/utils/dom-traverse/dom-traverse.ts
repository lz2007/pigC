/**
 * 深度优先遍历
 * @param root dom node
 */
export function depthFirstTraverse(root: Node) {
    const stack = [root];
    while (stack.length) {
        const node = stack.pop();
        if (node) {
        console.log(node);
        if (node.childNodes) {
            for (let i = node.childNodes.length - 1; i >= 0; i--) {
            stack.push(node.childNodes[i]);
            }
        }
        }
    }
}

/**
 * 广度优先遍历
 * @param root dom node
 */
export function breadthFirstTraverse(root: Node) {
    const queue: Node[] = [] // 数组 vs 链表

    // 根节点入队列
    queue.unshift(root)

    while (queue.length > 0) {
        const curNode = queue.pop()
        console.log(curNode);
        if (curNode == null) break
        // 子节点入队
        const childNodes = curNode.childNodes
        if (childNodes.length) {
            childNodes.forEach(child => queue.unshift(child))
        }
    }
}
