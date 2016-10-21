namespace Base {

  export interface IPerson {
    readonly name: string;
    readonly age: number;

    print (): void;
  }

  export interface IDeveloper extends IPerson {
    readonly type: string;

    getType (): string;
  }

  export class Person implements IPerson {
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }

    readonly name: string;
    readonly age: number;

    print(): void {
      console.log(this.name, this.age);
    }
  }

  export class Developer extends Person implements IDeveloper {
    constructor(name: string, age: number, type: string) {
      super(name, age);
      this.type = type;
    }

    readonly type: string;

    print(): void {
      super.print();
      console.log('--->', this.type);
    }

    getType() : string {
      return this.type;
    }
  }

}
