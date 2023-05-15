import { customNew } from './new';

it('customNew', () => {
 
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    
    Person.prototype.say = function() {
        console.log(`I'm ${this.name}, ${this.age} years old.`);
    }
    
    const person = customNew(Person, 'Tom', 18);
    expect(person.name).toBe('Tom');
    expect(person.age).toBe(18);
    expect(person.say).toBeInstanceOf(Function);
});