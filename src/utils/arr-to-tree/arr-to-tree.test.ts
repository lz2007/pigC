import { arrToTree } from './arr-to-tree'

it('arrToTree', () => {
    const arr = [
        { id: 1, name: '部门A', parentId: 0 }, // 0 代表顶级节点，无父节点
        { id: 2, name: '部门B', parentId: 1 },
    ]

    const tree = arrToTree(arr);

    expect(tree).toEqual({
        id: 1,
        name:'部门A',
        children:[
            {
                id:2,
                name:'部门B'
            }
        ]
    });
})