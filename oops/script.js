class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hii My name is ${this.name} and my age is ${this.age}`);
    }
}


const priyanhu = new Person("Priyanshu",24);

priyanhu.greet();