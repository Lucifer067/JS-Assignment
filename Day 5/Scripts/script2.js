class User
{
    constructor(name, age , email)
    {
        this.name= name;
        this.age= age;
        this.email= email;
        this.coins=1;
        this.courses=[];
    }

    login()
    {
        console.log(`${this.name} has logged in`);
        return this;
    }

    logout()
    {
        console.log(`${this.name} has logged out`);
        return this;
    }

    
}

class Moderator extends User
{
    constructor(name, age, email, role)
    {
        super(name, age, email);
        this.role= role;
    }
    addCoins(user)
    {
        user.coins++;
        console.log(`${user.name} has ${user.coins} coins`);
        return user;
    }
    removeCoins(user)
    {
        user.coins--;
        console.log(`${user.name} has ${user.coins} coins`);
        return user;
    }
}

class Admin extends Moderator
{
    addCourse(user, course)
    {
        user.courses.push(course);
        console.log(`${user.name} pursues ${user.courses}`);
    }

    deleteCourse(user, course)
    {
        let index= user.courses.indexOf(course);
        if(index>-1)
        {
            user.courses.splice(index, 1);
        }    
        console.log(`${user.name} pursues ${user.courses}`);
    }
}

let user1= new User('Nairobi', 42, 'nai@gmail.com');
let user2= new User('Denver', 32, 'den@gmail.com');
let user3= new User('Lisboa', 45, 'lis@gmail.com');
let mod= new Moderator('Berlin', 45, 'ber@gmail.com', 'Moderator');
let admin= new Admin('Professor', 49, 'prof@gmail.com');

mod.addCoins(user1);
mod.removeCoins(user1);

admin.addCourse(user1, 'Python');
admin.addCourse(user1, 'JavaScript');
admin.deleteCourse(user1, 'Python');