---
title: "𝐅𝐨𝐮𝐧𝐝𝐚𝐭𝐢𝐨𝐧𝐬 𝐨𝐟 𝐎𝐛𝐣𝐞𝐜𝐭-𝐎𝐫𝐢𝐞𝐧𝐭𝐞𝐝 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠"
description: "𝐄𝐧𝐜𝐚𝐩𝐬𝐮𝐥𝐚𝐭𝐢𝐨𝐧, 𝐀𝐛𝐬𝐭𝐫𝐚𝐜𝐭𝐢𝐨𝐧, 𝐈𝐧𝐡𝐞𝐫𝐢𝐭𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐏𝐨𝐥𝐲𝐦𝐨𝐫𝐩𝐡𝐢𝐬𝐦"
pubDate: 'Aug 10 2024'
heroImage: "../img/oop.webp"
---

## 𝐄𝐧𝐜𝐚𝐩𝐬𝐮𝐥𝐚𝐭𝐢𝐨𝐧, 𝐀𝐛𝐬𝐭𝐫𝐚𝐜𝐭𝐢𝐨𝐧, 𝐈𝐧𝐡𝐞𝐫𝐢𝐭𝐚𝐧𝐜𝐞, 𝐚𝐧𝐝 𝐏𝐨𝐥𝐲𝐦𝐨𝐫𝐩𝐡𝐢𝐬𝐦

![php image](/public/img/oop.webp)

## 1. Encapsulation:
Encapsulation is the technique of grouping the data and the operations that manipulate the data within a single unit (class). This hides the internal state of the object and only exposes necessary functionality.

### Benefits:
#### - Data Hiding: Protects the object's state from unauthorized access.
#### - Modularity: Changes in one part of the code can be made independently of other parts.
#### - Ease of Maintenance: Reduces complexity and increases code readability.

Example: A "Car" class can encapsulate data like brand, model, and price, and methods to start the engine or stop the car. External code interacts with the car using these methods without knowing the internal workings.


```php
class Car {
  private $brand;
  private $model;
  private $price;

  public function __construct($brand, $model, $price) {
    $this->brand = $brand;
    $this->model = $model;
    $this->price = $price;
  }

  public function startEngine() {
    echo "{$this->brand} {$this->model} engine started"
  }

  public function stopCar() {
    echo "{$this->brand} {$this->model} stopped"
  }
}

$myCar = new Car('Toyota', 'Corolla', '2000');
$myCar->startEngine();
$myCar->stopCar();
```

## 2. Abstraction:
Abstraction involves reducing complexity by hiding unnecessary details and showing only essential features to the user. This is achieved by defining clear interfaces and hiding internal implementation.

### Benefits:
#### - Simplifies Complex Systems: By exposing only high-level mechanisms.
#### - Reduces Impact of Change: Changes to the implementation don’t affect users of the abstraction.
#### - Promotes Reusability: Common interfaces can be reused across different parts of the application.

Example: When using a remote control, the user doesn't need to know about the internal electronics. They just use the buttons to control the device.


```php
abstract class RemoteControl {
  abstract public function powerOn(); 
  abstract public function powerOff();
} 

class TVRemoteControl extends RemoteControl { 
  public function powerOn() { 
    echo "TV is now ON."; 
  }

  public function powerOff() { 
    echo "TV is now OFF."; 
  } 
} 

$myRemote = new TVRemoteControl(); 
$myRemote->powerOn();
$myRemote->powerOff();
```

## 3. Inheritance:
Inheritance allows a class (derived or subclass) to inherit properties and behaviors from another class (base or parent). This promotes code reuse and hierarchical class relationships.

### Benefits:
#### - Code Reusability: Common functionality can be written once in the base class.
#### - Extensibility: New features can be added to existing classes without modifying them.
#### - Class Hierarchies: Logical structures can be created to represent relationships.

Example: A "Vehicle" class can be the base class for subclasses like "Car", "Plane", and "Boat". The subclasses inherit characteristics from the "Vehicle" class but can also add their own specific behaviors.

```php
class Vehicle {
   protected $brand;
   protected $model; 

  public function _construct($brand, $model) {
    $this->brand = $brand;
    $this->model = $model;
  }  

  public function move() {
    echo "The {$this->brand} {$this->model} is moving."; 
} 
class Car extends Vehicle {
  private $price;

  public function _construct($brand, $model, $price) {
    parent::_construct($brand, $model);
      $this->price = $price;
  }
  
  public function startEngine() {
    echo "The {$this->brand} {$this->model}'s engine is started." }
  }  

class Boat extends Vehicle {
  public function sail() {
    echo "The {$this->brand} {$this->model} is sailing.";
  } 
} 
$myCar = new car('Toyota', 'Corolla', 20000);
$myCar->move();
$myCar->startEngine();

$myBoat = new Boat('Yamaha', 'FX Cruiser');
$myBoat->move();
$myBoat->sail(); 
```

## 4. Polymorphism:
Polymorphism is the ability of an object to take many forms and behave differently. It allows objects of different classes to respond to the same method call in unique ways.

### Benefits:
#### - Flexibility: Allows for the use of objects interchangeably.
#### - Extensibility: New functionality can be easily integrated with minimal changes.
#### - Maintainability: Reduces code complexity by using a unified interface.

Example: If you have an "Animal" class with a "makeSound()" method, and subclasses like "Dog" and "Cat" each overriding "makeSound()", calling "makeSound()" on a "Dog" object will bark, while a "Cat" object will meow.


```php
abstract class Animal { 
   abstract public function makeSound(); 
}

class Dog extends Animal {
  public function makeSound() {
    return "Woof!";
  }
}

class Cat extends Animal {
  public function makeSound() {
    return "Meow!";
  }
}

function animalSound(Animal $animal) { 
  echo $animal->makeSound();
}

$myDog = new Dog();
$myCat = new Cat(); 

animalSound($myDog);
animalSound($myCat); 
```