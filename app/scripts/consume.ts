namespace Base {

  let person = new Person('frank', 55);

  person.print();

  let developer = new Developer('frank', 55, 'front-end');

  developer.print();


  console.log('TYPE', developer.getType());
}
