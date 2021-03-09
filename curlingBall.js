class curlingBall {
  constructor(team) { //variables de la clase
    this.team = team ? "A" : "B"
    this.colorBall = team ? "Yellow" : "Green"
    this.x = -50;
    this.y = -50;
    this.velx = 0;
    this.velx = 0;
    this.friction = 0.98; //este coeficiente tiene valores entre 0 y 1.
  }

  grab() {
    this.x = pmouseX
    this.y = pmouseY
    this.distance=width;
  }

  throw() {
    this.velx = mouseX - pmouseX
    this.vely = mouseY - pmouseY
  }

  slide() {
    this.velx *= this.friction
    this.vely *= this.friction
    if (this.velx + this.vely < 0.01) {
      this.velx = 0
      this.vely = 0
    }
    this.x += this.velx
    this.y += this.vely
  }
  
  show() {
    fill(this.colorBall)
    circle(this.x, this.y, height / 25)
  }
  
  distanceTo(x, y) {
    this.distance=dist(x, y, this.x, this.y)
    return dist(x, y, this.x, this.y)
  }
}