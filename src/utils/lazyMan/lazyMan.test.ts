import {LazyMan} from './lazyMan';
it('LazyMan', () => {
    const lazyMan = new LazyMan('Tony');
    lazyMan.eat('lunch').sleep(3).eat('dinner');
    // Tony eat lunch
    expect(lazyMan.taskList[0]).toBeInstanceOf(Function);
});