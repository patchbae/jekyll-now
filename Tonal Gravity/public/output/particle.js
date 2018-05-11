// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Simple Particle System

// A simple Particle class

class Particle {
  constructor(x, y, c) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.acceleration = createVector(0, 0);
    this.c = c;
    // this.lifespan = 255.0;
  }

  run() {
    this.update();
    this.display();
  }

  applyForce(f) {
    this.acceleration.add(f);
  }

  // Method to update position
  update() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    // this.lifespan -= 2;

    this.velocity.limit(5);
    if (this.position.y < 0) {
      this.velocity.y = this.velocity.y + 0.1;
      this.acceleration.y = this.acceleration.y + 0.01;
    }

     if (this.position.x < 0) {
      this.velocity.x = this.velocity.x + 0.1;
      this.acceleration.x = this.acceleration.x + 0.01;
    }

    if (this.position.y > (windowHeight - 80)) {
      this.velocity.y = this.velocity.y - 0.1;
      this.acceleration.y = this.acceleration.y - 0.01;
    }
    if (this.position.x > windowWidth) {
      this.velocity.x = this.velocity.x - 0.1;
      this.acceleration.x = this.acceleration.x - 0.01;
    }
  }

  // Method to display
  display() {
    noStroke();
    fill(this.c);
    ellipse(this.position.x, this.position.y, 12, 12);
  }

  // Is the particle still useful?
  // isDead() {
  //   if (this.lifespan < 0.0) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }
}