// ****************************** INHERITANCE ******************************
// Inheritance -> Two types classical and prototypical
// Super

// Inheritance and method overriding
class Shape_parent {
  constructor(color) {
    this.color = color;
  }
  move() {
    console.log(" shape move");
  }
}

class Circle_child extends Shape_parent {
  constructor(color, radius) {
    super(color); // calls the constructor of parent class
    this.radius = radius;
  }

  move() {
    super.move();
    console.log("circle move");
  }
  draw() {
    console.log("draw");
  }
}

const c6 = new Circle_child("red", 3);
c6.move();
