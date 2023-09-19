(() => {

  // Sin aplicar el principio de responsabilidad única

  type Gender = 'M' | 'F';
  /* // Forma extendida de crear una clase - Leccion 26
  class Person {
    public name: string;
    public gender: Gender;
    public birthdate:  Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  } */

  // Forma acortada de construir una clase
  class Person {

    constructor(
      public name: string, 
      public gender: Gender, 
      public birthdate: Date
    ) {}


  }

  /* // Leccion 26
  const newPerson = new Person('Daniel', 'M', new Date('1997-06-02'));
  console.log({newPerson}); */

  class User extends Person {
    private lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lasOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    'home',
    'daniel@house-d.com',
    'Admin',
    'Daniel',
    'M',
    new Date('1997-06-02')
  )

  console.log({userSettings/* , areCredentialsValid: userSettings.checkCredentials() */})

})();