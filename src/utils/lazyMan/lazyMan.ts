
// 手写 LazyMan ，实现 `sleep` 和 `eat` 两个方法，支持链式调用。
export class LazyMan {
    name: string;
    taskList: Function[];
    constructor(name: string) {
        this.name = name;
        this.taskList = [];
        setTimeout(()=>{
            this.next();
        })
    }
    eat(food: string) {
        this.taskList.push(() => {
            console.log(this.name + ' eat ' + food);
            this.next();
        });
        return this;
    }
    next() {
        const fn = this.taskList.shift();
        fn && fn();
    }
    sleep(time: number) {
        this.taskList.push(() => {
            return new Promise(() => {
                setTimeout(() => {
                    console.log('等待了' + time + '秒...');
                    this.next();
                }, time * 1000);
            });
        });
        return this;
    }
}
