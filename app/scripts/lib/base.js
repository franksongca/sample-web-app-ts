var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Base;
(function (Base) {
    var Person = (function () {
        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        Person.prototype.print = function () {
            console.log(this.name, this.age);
        };
        return Person;
    }());
    Base.Person = Person;
    var Developer = (function (_super) {
        __extends(Developer, _super);
        function Developer(name, age, type) {
            _super.call(this, name, age);
            this.type = type;
        }
        Developer.prototype.print = function () {
            _super.prototype.print.call(this);
            console.log('--->', this.type);
        };
        Developer.prototype.getType = function () {
            return this.type;
        };
        return Developer;
    }(Person));
    Base.Developer = Developer;
})(Base || (Base = {}));
