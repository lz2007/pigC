// const arr = [
//     { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
//     { id: 2, name: '部门B', parentId: 1 },
//     { id: 3, name: '部门C', parentId: 1 },
//     { id: 4, name: '部门D', parentId: 2 },
//     { id: 5, name: '部门E', parentId: 2 },
//     { id: 6, name: '部门F', parentId: 3 },
// ]

import { S } from "@storybook/react/dist/types-0a347bb9"

// 遍历数组，针对每个元素
// - 生成 tree node
// - 找到 parentNode 并加入到它的 `children`

// 找 parentNode 时，需要根据 `id` 能**尽快**找到 tree node<br>
// 需要一个 map ，这样时间复杂度是 `O(1)` 。否则就需要遍历查找，时间复杂度高。

interface IArrayNode {
    id: number
    name: string
    parentId: number
}

interface ITreeNode {
    id: number
    name: string
    children?: ITreeNode[]
}

export function arrToTree(treeArr: IArrayNode[]): ITreeNode | null {
    const map = new Map<number, ITreeNode>();
    let root = null;

    for (const node of treeArr) {
        const { id, name, parentId } = node;
        const treeNode = { id, name } as ITreeNode;
        map.set(id, treeNode);

        const parentNode = map.get(parentId);
        if (parentNode) {
            if (!parentNode.children) {
                parentNode.children = [];
            }
            parentNode.children.push(treeNode);
        }

        if (parentId === 0) {
            root = treeNode;
        }
    }

    return root;
}