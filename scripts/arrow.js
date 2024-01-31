const o = {
    msg: 'An object',
    person: {
        firstName: 'Grace',
        lastName: 'Hopper',
        age: 89,
        //this wont work, should use regular function rather that arrow
        fullName: () => { return this.firstName + ' ' + this.lastName } 
    }
}

let x = o.person.fullName();
console.log(x);
  
