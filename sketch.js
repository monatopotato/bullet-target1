var wall, thickness, damage;
var bullet, speed, weight;

function setup() {
    createCanvas(1200, 800);
    thickness = random(22, 83);
    wall = createSprite(1200, 200, thickness, height / 2);
    bullet = createSprite(100, 200, 15, 15);
    wall.shapeColor = "black";
    speed = random(223, 321);
    bullet.velocityX = speed / 10;
    weight = random(30, 52);

    

}

function draw() {

    background("white");

    if (bullet.isTouching(wall)) {
        bullet.velocityX = 0;
        damage = (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

        if (damage > 10) {
            wall.shapeColor = "red";
            text("damage:          " + Math.round(damage), 600, 100);
        }

        else{
            wall.shapeColor = "green";
            text("damage:          " + Math.round(damage), 600, 100);
        }
    }

   

    drawSprites();
}