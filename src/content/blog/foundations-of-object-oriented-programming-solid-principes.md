---
title: "𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧𝐬 𝐨𝐟 𝐎𝐛𝐣𝐞𝐜𝐭-𝐎𝐫𝐢𝐞𝐧𝐭𝐞𝐝 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠"
description: "𝐓𝐡𝐞 𝐒𝐎𝐋𝐈𝐃 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞𝐬"
pubDate: 'Jul 10 2024'
heroImage: "../img/solid.png"
---

![solid image](/img/solid.png)


## 1. 𝐒𝐢𝐧𝐠𝐥𝐞 𝐑𝐞𝐬𝐩𝐨𝐧𝐬𝐢𝐛𝐢𝐥𝐢𝐭𝐲 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐒𝐑𝐏):
#### Before SRP :
```javascript
class User {
  constructor(name,email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }

  saveUserToDatabase() {
    // Code to save user to database
    console.log('User saved to DB.');
  }
}
```

#### After SRP :

```javascript
class User {
  constructor(name,email) {
    this.name = name;
    this.email = email;
  }

  getUserInfo() {
    return `Name: ${this.name}, Email: ${this.email}`;
  }
}

class UserRepository {
  save(User) {
    console.log('User saved to DB.');
  }
}

const user = new User('John Doe', 'johndoe@example.com');
const userRepository = new UserRepository();
userRepository.save(user);   
```

## 2. 𝐎𝐩𝐞𝐧/𝐂𝐥𝐨𝐬𝐞𝐝 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐎𝐂𝐏):
Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.

#### Before 𝐎𝐂𝐏 :

```javascript
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  } 
}  

class Circle { 
  constructor(radius) {
    this.radius = radius;
  }
} 

function calculateArea(shape) {
  if (shape instanceof Rectangle) {
    return shape.width * shape.height;
  } else if (shape instanceof Circle) { 
    return Math.PI * shape.radtus * shape.radius;
  }
  // Imagine adding more shapes here would require modifying this function 
```

#### After 𝐎𝐂𝐏 :

```javascript
class Shape { 
  area() { 
    throw new Error("This method must be ovirridden!"); 
  } 

class Rectangle extends Shape { 
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  } 
  
  area() {
    return this.width * this.height; 
  }
} 

class Circle extends Shape { 
  constructor(radius) {
    super();
    this.radius = radius;
  } 
  
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

const shapes = [
  new Rectangle(10, 20),
  new Circle(5),
]; 
```

## 3. 𝐋𝐢𝐬𝐤𝐨𝐯 𝐒𝐮𝐛𝐬𝐭𝐢𝐭𝐮𝐭𝐢𝐨𝐧 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐋𝐒𝐏):
Objects of a derived class should be able to replace objects of the base class without altering the correctness of the program.

#### Before 𝐋𝐒𝐏 :

```javascript
class Bird {
  fly() { 
    console.log('Flying');
  } 
} 

class Ostrich extends Bird {
  fly() { 
    throw new Error('Ostriches cannot fly'); 
  }
}

function makeBirdFly(bird) {
  bird.fly(); 
} 

const ostrich = new Ostrich(); 
makeBirdFly(ostrich); // Error: Ostriches cannot fly 
```

#### After 𝐋𝐒𝐏 :

```javascript
class Bird { 
  move() { 
    console.log('Moving'); 
  } 
}

class FlyingBird extends Bird {
  fly() { 
    console.log('Flying'); 
  } 
} 

class Ostrich extends Bird {
  move() { 
    console.log('Running'); 
  } 
} 

function makeBirdMove(bird) { 
  bird.move();
} 

const ostrich = new Ostrich(); 
makeBirdMove(ostrich); //Running 
```

## 4. 𝐈𝐧𝐭𝐞𝐫𝐟𝐚𝐜𝐞 𝐒𝐞𝐠𝐫𝐞𝐠𝐚𝐭𝐢𝐨𝐧 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐈𝐒𝐏):
Clients should not be forced to depend on interfaces they do not use.

#### Before ISP :
```javascript
class Worker { 
  construct(name) { 
    this.name = name; 
  } 
}

work() {
  console.log(`${this.name} is working`)
}

eat() {
  console.log(`${this.name} is eating`)
}

class Robot extends Worker {
  eat() {
    throw new Error('Robots do not eat');
  }
}

const robot = new Robot('robo');
robot.eat(); // Error: Robots do not eat
```

#### After ISP :
```javascript
class Worker { 
  construct(name) { 
    this.name = name; 
  } 
}

class HumanWorker extends Worker { 
  work() {
    console.log(`${this.name} is working`)
  }

  eat() {
    console.log(`${this.name} is eating`)
  }
}

class Robot extends Worker {
  work() {
    console.log(`${this.name} is working`)
  }
}

const robot = new Robot('robo');
robot.work(); // Robot is working
```

## 5. 𝐃𝐞𝐩𝐞𝐧𝐝𝐞𝐧𝐜𝐲 𝐈𝐧𝐯𝐞𝐫𝐬𝐢𝐨𝐧 𝐏𝐫𝐢𝐧𝐜𝐢𝐩𝐥𝐞 (𝐃𝐈𝐏):
High-level modules should not depend on low-level modules. Both should depend on abstractions.

#### Before DIP :
 The Notification class is directly coupled to the EmailService class. If you want to use another type of notification service (such as SMS), you need to modify the Notification class.


```javascript
class EmailService {
  send(message) {
    console.log(`Sending email: ${message}`)
  }
}

class Notification {
  constructor() {
    this.emailService = new EmailService();
  }

  sendNotification(message) {
    this.emailService.send(message);
  }
}

const notification = new Notification();
notification.sendNotification('Hello, this is a notification');
```

#### After DIP :
The Notification class depends on the abstraction NotificationService instead of concrete implementations. You can inject any implementation of NotificationService (such as EmailService or SMSService) without modifying the Notification class. This makes the code more flexible and extensible.

```javascript
// Abstraction (interface)
class NotificationService {
  send(message) {
    throw new Error('This method must be overriden!')
  }
}

class EmailService extends NotificationService {
  send(message) {
    console.log(`Sending email: ${message}`)
  }
}

class SMSService extends NotificationService {
  send(message) {
    console.log(`Sending SMS: ${message}`)
  }
}

class Notification {
  constructor(notificationService) {
    this.notificationService = notificationService();
  }

  sendNotification(message) {
    this.notificationService.send(message);
  }
}
}

const emailService = new EmailService();
const smsService = new SMSService();

const emailNotification = new Notification(emailService);
emailNotification.sendNotification('Hello, this is an email notification');

const smsNotification = new Notification(smsService);
smsNotification.sendNotification('Hello, this is an SMS notification');
```