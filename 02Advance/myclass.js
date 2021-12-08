class Nomso{
    constructor(firstname, lastname, credit){
        this.firstname = firstname
        this.lastname = lastname
        this.credits = credit
    }
    getFullName(){
        let fullname = `${this.firstname} ${this.lastname} is my fullname`;
        return fullname;
    }
    editName(newname){
        const myname = newname.split(" ");
        this.firstname = myname[0];
        this.lastname = myname[1];
    }
    
}

class Teacher extends Nomso {
  constructor(firstname, lastname, credit, subject) {
    super(firstname, lastname, credit);
    this.subject = subject;
  }
  getFullName() {
    let fullname = `${this.firstname}.${this.lastname} is my fullname and i teach ${this.subject}`;
    return fullname;
  }
  favDrink(name){
      console.log(`my fav. drink is ${name}`);
  }
}

const paul = new Teacher('Paul', 'Dominic', 34, 'Phyton');
// console.log(paul);
console.log(paul.getFullName());
paul.editName("Kondo Dominic");
console.log(paul.getFullName());
paul.favDrink('FearLess');

// const sammy = new Nomso();
// console.log(sammy);