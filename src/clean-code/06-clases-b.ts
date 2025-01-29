(() => {

  // Sin aplicar el principio de responsabilidad única

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date
    gender    : Gender;
    name     : string;
  }

  interface UserProps {
    email: string;
    person: PersonProps
    role : string;
  }

  interface UserSettingsProps {
    lasOpenFolder: string;
    user: UserProps
    workingDirectory: string;
  }

  class Person {

    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({name, gender, birthdate}: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  class User extends Person {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({email, role, person}: UserProps) {
      super(person);
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lasOpenFolder: string;

    constructor({workingDirectory, lasOpenFolder, user}: UserSettingsProps) {
      super(user);
      this.workingDirectory = workingDirectory;
      this.lasOpenFolder = lasOpenFolder;
    }
  }

  const userMeta: UserSettingsProps = {
    workingDirectory: '/usr/home',
    lasOpenFolder: 'home',
    user: {
      email: 'daniel@house-d.com',
      role: 'Admin',
      person: {
        birthdate: new Date('1997-06-02'),
        gender: 'M',
        name: 'Daniel',
      }
    }
  }

  const userSettings = new UserSettings(userMeta)

  console.log({userSettings/* , areCredentialsValid: userSettings.checkCredentials() */})

})();