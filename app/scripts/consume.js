var Base;
(function (Base) {
    var person = new Base.Person('frank', 55);
    person.print();
    var developer = new Base.Developer('frank', 55, 'front-end');
    developer.print();
    console.log('TYPE', developer.getType());
})(Base || (Base = {}));
