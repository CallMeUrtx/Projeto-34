const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world
var solo, bola
var box1, box2, box3, box4, box6
var rui

function setup() {
  var canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world
  box6 = new Nezuko(810, 100, 70, 70)
  box5 = new Nezuko(810, 100, 70, 70)
  box1 = new Nezuko(700, 100, 70, 70)
  box2 = new Nezuko(920, 100, 70, 70)
  box3 = new Nezuko(700, 100, 70, 70)
  box4 = new Nezuko(920, 100, 70, 70)
  bola = new Bola(200, 300, 40)
  rui = new Rui(bola.body, { x: 500, y: 50 })

  solo = new Ground(600, 590, 1200, 20)
}

function draw() {
  background('skyBlue')
  Engine.update(engine)
  rui.display()
  box6.display()
  box5.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  bola.display()
  solo.display()
}

function mouseDragged() {
  Matter.Body.setPosition(bola.body, { x: mouseX, y: mouseY })
}
