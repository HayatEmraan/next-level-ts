class Person {
  name: string;
  age: number;
  gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const hayat = new Person("hayat", 18, "male");

class Student {
  constructor(
    public name: string,
    public age: number,
    public department: string
  ) {}
}

const emraan = new Student("emraan", 18, "IT");

emraan.department = "ICT";
