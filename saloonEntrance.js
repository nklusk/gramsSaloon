let saloonEntrance;

function preload() {
  saloonEntrance = loadImage("gramsSaloonImages/gramsSaloonEntrance.png");
}

function setup() {
  createCanvas(1000, 1000);
  

}
function draw(){
  image(saloonEntrance, 0, 0);
}

// saloonEntrance = createImg('https://i.pinimg.com/564x/f9/84/58/f98458b84a598b116c8f406d1766e83a.jpg' , 
//   'saloon entrance'
//   );
// saloonEntrance.position(0,0) 
