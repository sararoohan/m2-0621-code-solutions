function ExampleConstructor() {}
console.log('value of Prototype:', ExampleConstructor.prototype);
console.log('typeOf Prototype:', typeof ExampleConstructor.prototype);

var Constructor = new ExampleConstructor();
console.log('value of Constructor:', Constructor);

var anInstance = Constructor instanceof ExampleConstructor;
console.log('Is an InstanceOf:', anInstance);
