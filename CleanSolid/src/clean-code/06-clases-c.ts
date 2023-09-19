(() => {

  // Aplicando el principio de responsabilidad única
  // priorizar la composición frente la herencia

  type Gender = 'M' | 'F';

  interface PersonProps {
    birthdate: Date
    gender    : Gender;
    name     : string;
  }

  interface UserProps {
    email: string;
    role : string;
  }

  interface SettingsProps {
    lasOpenFolder: string;
    workingDirectory: string;
  }

  interface UserSettingsProps {
    person: PersonProps;
    user: UserProps;
    settings: SettingsProps;
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

  class User {
    private lastAccess: Date;
    public email: string;
    public role: string;

    constructor({email, role}: UserProps) {
      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  class Settings {
    public workingDirectory: string;
    public lasOpenFolder: string;

    constructor({workingDirectory, lasOpenFolder}: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lasOpenFolder = lasOpenFolder;
    }
  }

  class UserSettings {
    public person  : Person;
    public user    : User;
    public settings: Settings;

    constructor({person, user, settings}: UserSettingsProps) {
      this.person = new Person(person);
      this.user = new User(user);
      this.settings = new Settings(settings);
    }
  }

  const userMeta: UserSettingsProps = {
    settings: {
      workingDirectory: '/usr/home',
      lasOpenFolder: 'home',
    },
    user: {
      email: 'daniel@house-d.com',
      role: 'Admin',
    },
    person: {
      birthdate: new Date('1997-06-02'),
      gender: 'M',
      name: 'Daniel',
    }
  }

  const userSettings = new UserSettings(userMeta)

  console.log({userSettings, areCredentialsValid: userSettings.user.checkCredentials()})

})();