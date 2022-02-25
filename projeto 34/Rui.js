class Rui {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      length: 300,
      stiffness: 1.2
    }

    this.pointB = pointB
    this.rui = Constraint.create(options)
    World.add(world, this.rui)
  }
  fly() {
    this.rui.bodyA = null
  }
  attach(body) {
    this.rui.bodyA = body
  }
  display() {
    if (this.rui.bodyA) {
      var pointA = this.rui.bodyA.position
      var pointB = this.pointB
      push()
      strokeWeight(5)
      line(pointA.x, pointA.y, pointB.x, pointB.y)
      pop()
    }
  }
}
